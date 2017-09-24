import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PegPicker from './Pegpicker';
import PastTurn from './PastTurn';

class Board extends Component {
	renderPastTurns(key, index) {
		return <PastTurn key={index} turnNum={index} feedback={key.feedback} cbArr={key.cbArr} />
	}

	render() {
		return(
			<div className="board">
				<div className="answer"></div>
				<div className="turns">
						{this.props.turnHistory.map(this.renderPastTurns)}
						<PegPicker cbArr={this.props.cbArr} turnNum={this.props.turn} handleSubmit={(i) => this.props.handleSubmit(i)} handleClick={(a,b,c) => this.props.handleClick(a,b,c)} />
				</div>
			</div>
		)
	}
} 

export default Board;