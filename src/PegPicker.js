import React, { Component } from 'react';

class PegPicker extends Component {
	constructor() {
		super();
		this.state = {
			peg1: 0,
			peg2: 0,
			peg3: 0,
			peg4: 0,
		}
	}

	handleClick(direction, pegName, pegState) {
		let peg = {};

		if( direction === 'right' && pegState === 6) {
			pegState = 1;
		} else if( direction === 'right' ) {
			pegState = pegState + 1;
		} else if( direction === 'left' && pegState === 1 || direction === 'left' && pegState === 0 ) {
			pegState = 6;
		} else if( direction === 'left' ) {
			pegState = pegState - 1;
		}

		peg[pegName] = pegState;
		this.setState(peg);
	}

	render() {
		return(
			<div className="turn active">
				<div className="turnNum">{this.props.turnNum + 1}</div>
				<div className="code">
					<span className={"peg peg-" + this.state.peg1}>
						<button className="right" onClick={()=>{this.handleClick('right', 'peg1', this.state.peg1)}}></button>
						<button className="left" onClick={()=>{this.handleClick('left', 'peg1', this.state.peg1)}}></button>
					</span>
					<span className={"peg peg-" + this.state.peg2}>
						<button className="right" onClick={()=>{this.handleClick('right', 'peg2', this.state.peg2)}}></button>
						<button className="left" onClick={()=>{this.handleClick('left', 'peg2', this.state.peg2)}}></button>
					</span>
					<span className={"peg peg-" + this.state.peg3}>
						<button className="right" onClick={()=>{this.handleClick('right', 'peg3', this.state.peg3)}}></button>
						<button className="left" onClick={()=>{this.handleClick('left', 'peg3', this.state.peg3)}}></button>
					</span>
					<span className={"peg peg-" + this.state.peg4}>
						<button className="right" onClick={()=>{this.handleClick('right', 'peg4', this.state.peg4)}}></button>
						<button className="left" onClick={()=>{this.handleClick('left', 'peg4', this.state.peg4)}}></button>
					</span>
				</div>
				<div className="feedback">
					<form onSubmit={this.props.handleSubmit.bind(this)}>
						<input className="hidden" type="number" name="peg1" max="6" min="1" value={this.state.peg1} />
						<input className="hidden" type="number" name="peg2" max="6" min="1" value={this.state.peg2} />
						<input className="hidden" type="number" name="peg3" max="6" min="1" value={this.state.peg3} />
						<input className="hidden" type="number" name="peg4" max="6" min="1" value={this.state.peg4} />
						<input type="submit" value="Submit"/>
					</form>
				</div>
			</div>
		)
	}
}

export default PegPicker;