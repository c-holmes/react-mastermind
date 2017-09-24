import React, { Component } from 'react';
import Board from './Board';
import WinMessage from './WinMessage';
require('./styles/style.scss');

class App extends Component {
  constructor() {
    super();
    this.state = {
      winner: false,
      feedback: [],
      turn: 0,
      cmArr: this.generateCode(1, 6, 4),
      cbArr: [0,0,0,0],
      turnHistory: [],
      gameNum: 0,
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
      winMessage = <WinMessage turn={this.state.turn} onClick={(i)=>{this.handleReset(i)}} />
    }
    return (
      <div className="App">
        <Board feedback={this.state.feedback} cbArr={this.state.cbArr} turn={this.state.turn} turnHistory={this.state.turnHistory} handleClick={(a,b,c) => {this.handleClick(a,b,c)}} handleSubmit={(i) => this.handleSubmit(i)} />
        {winMessage}
      </div>
    );
  }

  handleSubmit(event){
    event.preventDefault();
    const turn = this.state.turn;
    const target = event.target;
    const cmArr = this.state.cmArr;

    //grab cb peg values
    const cbArr = [
      parseInt(target.peg1.value), 
      parseInt(target.peg2.value), 
      parseInt(target.peg3.value), 
      parseInt(target.peg4.value)
    ];

    this.checkCodePattern(cmArr, cbArr, turn);
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

  checkCodePattern(cmArr, cbArr, turn) {
    const winner = this.isGameFinished(cmArr, cbArr); 
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

  isGameFinished(cmArr, cbArr) {
    console.log(cmArr, cbArr);
    for (let i = 0; i < cmArr.length; i++ ){
      if (cmArr[i] !== cbArr[i]) {
        return false
      }
    }

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
