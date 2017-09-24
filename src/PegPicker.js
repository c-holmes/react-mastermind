import React, { Component } from 'react';

class PegPicker extends Component {
	render() {
		let peg1 = this.props.cbArr[0];
		let peg2 = this.props.cbArr[1];
		let peg3 = this.props.cbArr[2];
		let peg4 = this.props.cbArr[3];

		return(
			<div className="turn active">
				<div className="turnNum">{this.props.turnNum + 1}</div>
				<div className="code">
					<span className={"peg peg-" + peg1}>
						<button className="right" onClick={()=>{this.props.handleClick('right', 0, peg1)}}></button>
						<button className="left" onClick={()=>{this.props.handleClick('left', 0, peg1)}}></button>
					</span>
					<span className={"peg peg-" + peg2}>
						<button className="right" onClick={()=>{this.props.handleClick('right', 1, peg2)}}></button>
						<button className="left" onClick={()=>{this.props.handleClick('left', 1, peg2)}}></button>
					</span>
					<span className={"peg peg-" + peg3}>
						<button className="right" onClick={()=>{this.props.handleClick('right', 2, peg3)}}></button>
						<button className="left" onClick={()=>{this.props.handleClick('left', 2, peg3)}}></button>
					</span>
					<span className={"peg peg-" + peg4}>
						<button className="right" onClick={()=>{this.props.handleClick('right', 3, peg4)}}></button>
						<button className="left" onClick={()=>{this.props.handleClick('left', 3, peg4)}}></button>
					</span>
				</div>
				<div className="feedback">
					<form onSubmit={this.props.handleSubmit.bind(this)}>
						<input className="hidden" type="number" name="peg1" max="6" min="1" value={peg1} />
						<input className="hidden" type="number" name="peg2" max="6" min="1" value={peg2} />
						<input className="hidden" type="number" name="peg3" max="6" min="1" value={peg3} />
						<input className="hidden" type="number" name="peg4" max="6" min="1" value={peg4} />
						<input className="submit" type="submit" value="Submit"/>
					</form>
				</div>
			</div>
		)
	}
}

export default PegPicker;