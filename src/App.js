import React, { Component } from 'react';
// import WinMessage from './WinMessage';
require('./styles/style.scss');

class App extends Component {
  constructor() {
    super();
    this.state = {
 
    } 
  } 
  
  render() {
    const cmArr = [3, 2, 1, 1];
    const cbArr = [2, 2, 2, 3];
    this.checkCodePattern(cmArr, cbArr, 1);
    
    return (
      <div className="App">

      </div>
    );
  }

  checkCodePattern(cmArr, cbArr, turn) {
    const winner = this.isGameFinished(cmArr, cbArr); 

    if (!winner) {
      this.giveFeedBack(cmArr, cbArr); 
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

    console.log(fbArr);
  }
}

export default App;
