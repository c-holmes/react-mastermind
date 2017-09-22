import React, { Component } from 'react';
import PegPicker from './Pegpicker';
// import WinMessage from './WinMessage';
require('./styles/style.scss');

class App extends Component {
  constructor() {
    super();
    this.state = {
      winner: false,
      feedback: false,
      turn: 0,
      cmArr: this.generateCode(1, 6, 4)
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
    return (
      <div className="App">
        <PegPicker handleSubmit={(i) => this.handleSubmit(i)} />
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

  checkCodePattern(cmArr, cbArr, turn) {
    const winner = this.isGameFinished(cmArr, cbArr); 
    let feedback = this.giveFeedBack(cmArr, cbArr);

    if (!winner) {
      console.log(feedback);
      this.setState({
        feedback: feedback,
      })
    } else {
      this.setState({
        winner: true,
      })
    }
  } 

  isGameFinished(cmArr, cbArr) {
    if (cbArr === cmArr) {
      console.log('winner');
      return true;
    } else {
      console.log('no winner');
      return false;
    }
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

    // check for right value wrong spot
    cbCleanLeftovers.map((value, i) => {
      for (let cmIndexVal of cmCleanLeftovers) {
        if (value === cmIndexVal) {
          fbArr.push(1);
        }
      }
    });

    return fbArr;
  }
}

export default App;
