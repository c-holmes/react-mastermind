import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PastTurn extends Component {
	renderCodePeg(key, index) {
		return(
			<div className="peg-holder">	
				<span key={index} className={"peg peg-" + key}><span></span></span>
			</div>
		)
	}

	renderFeedbackPeg(key, index) {
		return(
				<span key={index} className={"peg peg-" + key}><span></span></span>
		)
	}

	render() {
		return(
			<div className="turn past">
				<div className="turnNum">{this.props.turnNum + 1}</div>
				<div className="code">
					{this.props.cbArr.map(this.renderCodePeg)}
				</div>
				<div className="feedback">
					{this.props.feedback.map(this.renderFeedbackPeg)}
				</div>
			</div>
		)
	}
}

export default PastTurn;