import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PegPicker from './Pegpicker';
import PastTurn from './PastTurn';

class Board extends Component {
	constructor() {
		super();
		this.state = {
			mSecs: 0,
			animateClassName: 'animate-ongoing'
		}
	}

	componentDidMount() {
			this.intervalId = setInterval(() => {
				this.setState({
					mSecs: this.state.mSecs + 250, 
				});
			}, 250);
			setTimeout(() => {
				this.setState({
					animateClassName: 'animate-finished'
				})
				clearInterval(this.intervalId);
			}, 2000);
	}

	renderPastTurns(key, index) {
		return <PastTurn key={index} turnNum={index} feedback={key.feedback} cbArr={key.cbArr} />
	}

	generateRandNum(min, max) {
		return Math.floor(Math.random()*(max-min+1)+min);      
	}

	render() {
		let peg1 = this.generateRandNum(1,6);
		let peg2 = this.generateRandNum(1,6);
		let peg3 = this.generateRandNum(1,6);
		let peg4 = this.generateRandNum(1,6);
		return(
			<div className="board">
				<div className={"answer " + this.state.animateClassName}>
					<div className="code">
						<div className="peg-holder"><span className={"peg peg-" + peg1}></span></div>
						<div className="peg-holder"><span className={"peg peg-" + peg2}></span></div>
						<div className="peg-holder"><span className={"peg peg-" + peg3}></span></div>
						<div className="peg-holder"><span className={"peg peg-" + peg4}></span></div>
					</div>
				</div>
				<div className="turns">
						{this.props.turnHistory.map(this.renderPastTurns)}
						<PegPicker cbArr={this.props.cbArr} turnNum={this.props.turn} handleSubmit={(i) => this.props.handleSubmit(i)} handleClick={(a,b,c) => this.props.handleClick(a,b,c)} />
				</div>
			</div>
		)
	}
} 

export default Board;