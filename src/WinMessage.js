import React, {Component} from 'react';

class WinMessage extends Component {
	render() {
		let winText = "";
		let peg1 = this.props.cmArr[0];
		let peg2 = this.props.cmArr[1];
		let peg3 = this.props.cmArr[2];
		let peg4 = this.props.cmArr[3];

		if (this.props.turn !== this.props.maxTurns) {
			winText = "You Won!";
		} else {
			winText = "Computer Wins";
		}
		return(
			<div className="winner popup">
				<div className="code">
					<div className="peg-holder"><span className={"peg peg-" + peg1}></span></div>
					<div className="peg-holder"><span className={"peg peg-" + peg2}></span></div>
					<div className="peg-holder"><span className={"peg peg-" + peg3}></span></div>
					<div className="peg-holder"><span className={"peg peg-" + peg4}></span></div>
				</div>
				<h2>{winText}</h2>
				<h3>Game was won in {this.props.turn + 1} turns</h3>
				<button onClick={(i) => this.props.onClick()}>Play Again?</button>
			</div>
		)
	} 
}

export default WinMessage;