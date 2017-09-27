import React, {Component} from 'react';

class WinMessage extends Component {
	render() {
		let winText = "";
		if (this.props.turn !== this.props.maxTurns) {
			winText = "You Won!";
		} else {
			winText = "Computer Wins";
		}
		return(
			<div className="winner popup">
				<h2>{winText}</h2>
				<h3>Game was won in {this.props.turn + 1} turns</h3>
				<button onClick={(i) => this.props.onClick()}>Play Again?</button>
			</div>
		)
	} 
}

export default WinMessage;