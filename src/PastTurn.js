import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PastTurn extends Component {
	renderArray(key, index) {
		return(
			<span key={index} className={"peg peg-" + key}><span></span></span>
		)
	}

	render() {
		return(
			<div className="turn past">
				<div className="turnNum">{this.props.turnNum + 1}</div>
				<div className="code">
					{this.props.cbArr.map(this.renderArray)}
				</div>
				<div className="feedback">
					{this.props.feedback.map(this.renderArray)}
				</div>
			</div>
		)
	}
}

export default PastTurn;