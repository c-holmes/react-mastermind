import React, { Component } from 'react';
import Board from './Board';
import WinMessage from './WinMessage';
import AdminBar from './AdminBar';
require('./styles/style.scss');

// TODO
// make mobilefirendly
// add a sticky total tally bar
// add different modes 8, 10, 12 turns allowed
// add random animation at start & hide codemaker
// add a start menu & router

class App extends Component {
  constructor() {
    super();
    this.state = {
      winner: false,
      feedback: [],
      turn: 0,
      maxTurns: 7,
      cmArr: this.generateCode(1, 6, 4),
      cbArr: [0,0,0,0],
      turnHistory: [],
      gameNum: 0,
      score: {
        player1: 0,
        player2: 0,
      }
    } 
  } 

  generateCode(min, max, size) {
    let code = [];
    for(let i = 0; i < size; i++){
      code.push(Math.floor(Math.random()*(max-min+1)+min));      
    }
    return code;
  }
  
  render() {
    let winMessage;
    if (this.state.winner) {
      winMessage = <WinMessage turn={this.state.turn} maxTurns={this.state.maxTurns} onClick={(i)=>{this.handleReset(i)}} />
    }
    return (
      <div className="App">
        <AdminBar gameNum={this.state.gameNum} score={this.state.score} maxTurns={this.state.maxTurns} turn={this.state.turn} />
        <Board feedback={this.state.feedback} cbArr={this.state.cbArr} turn={this.state.turn} turnHistory={this.state.turnHistory} handleClick={(a,b,c) => {this.handleClick(a,b,c)}} handleSubmit={(i) => this.handleSubmit(i)} />
        {winMessage}
      </div>
    );
  }

  handleSubmit(event){
    event.preventDefault();
    const turn = this.state.turn;
    const maxTurns = this.state.maxTurns;
    const target = event.target;
    const cmArr = this.state.cmArr;

    //grab cb peg values
    const cbArr = [
      parseInt(target.peg1.value), 
      parseInt(target.peg2.value), 
      parseInt(target.peg3.value), 
      parseInt(target.peg4.value)
    ];

    this.checkCodePattern(cmArr, cbArr, maxTurns, turn);
  }

  handleClick(direction, index, value) {
    const cbArr = this.state.cbArr.slice();

    if( direction === 'right' && value === 6) {
      value = 1;
    } else if( direction === 'right' ) {
      value = value + 1;
    } else if( direction === 'left' && value === 1 || direction === 'left' && value === 0 ) {
      value = 6;
    } else if( direction === 'left' ) {
      value = value - 1;
    }

    cbArr[index] = value;

    this.setState({
      cbArr: cbArr
    });
  }

  handleReset() {
    const currGameNum = this.state.gameNum + 1;
    this.setState({
      winner: false,
      feedback: [],
      turn: 0,
      cmArr: this.generateCode(1, 6, 4),
      cbArr: [0,0,0,0],
      turnHistory: [],
      gameNum: currGameNum
    })
  }

  checkCodePattern(cmArr, cbArr, maxTurns, turn) {
    const winner = this.isGameFinished(cmArr, cbArr, maxTurns, turn); 
    let feedback = this.giveFeedBack(cmArr, cbArr);
    let currTurn = turn + 1;
    let turnHistory = this.state.turnHistory.slice();

    // save old turns & their feed back to state
    turnHistory.push({
      cbArr: cbArr,
      feedback: feedback,
    });

    if (!winner) {
      this.setState({
        feedback: feedback,
        turn: currTurn,
        turnHistory: turnHistory
      })
    } else {
      this.setState({
        winner: true,
      })
    }
  } 

  isGameFinished(cmArr, cbArr, maxTurns, turn) {
    console.log(cmArr, cbArr, maxTurns, turn);

    if(maxTurns === turn){
      const newScore = Object.assign({}, this.state.score);
      newScore.player2 = newScore.player2 + 1;
      // computer wins
      this.setState({
        score: newScore
      });
      return true;
    }

    for (let i = 0; i < cmArr.length; i++ ){
      if (cmArr[i] !== cbArr[i]) {
        return false;
      }
    }

    // player wins
    const newScore = Object.assign({}, this.state.score);
    newScore.player1 = newScore.player1 + 1;
    this.setState({
      score: newScore
    });
    return true;
  }

  giveFeedBack(cmArr, cbArr) {
    let fbArr = [];
    let cmLeftovers = cmArr.slice();
    let cbLeftovers = cbArr.slice();    

    // check if any pegs are in right spot and right value
    cbArr.map((value, i) => {
      if (value === cmArr[i]) {
        // push correct spot and value indicator
        fbArr.push(2);

        // remove from cm and cb array
        cmLeftovers[i] = null;
        cbLeftovers[i] = null;
      }
    });

    //remove null values from leftovers
    let cmCleanLeftovers = cmLeftovers.filter( x => x );
    let cbCleanLeftovers = cbLeftovers.filter( x => x );

    // check for right value wrong spot, remove after match
    cbCleanLeftovers.map((value, i) => {
      let index = 0;
      for (let cmIndexVal of cmCleanLeftovers) {
        if (value === cmIndexVal) {
          fbArr.push(1);
          cmCleanLeftovers.splice(index, 1);
        }
        index++;
      }
    });

    return fbArr;
  }
}

export default App;
