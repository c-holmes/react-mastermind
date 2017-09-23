import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PastTurn extends Component {
	renderArray(key) {
		return(
			<span className={"value-" + key}>{key}</span>
		)
	}

	render() {
		return(
			<div className="turn past">
				<div className="turnNum">{this.props.key + 1}</div>
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