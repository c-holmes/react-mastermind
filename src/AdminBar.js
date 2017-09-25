import React, {Component} from 'react';

class AdminBar extends Component{
	render() {
		return(
			<div className="admin-bar">
				<span>
					<span className="score">Score: </span>
					<span className="player1">You: {this.props.score.player1}</span>
					<span className="player2">Computer: {this.props.score.player2}</span>
				</span>
				<span>Turns Left: {this.props.maxTurns - this.props.turn + 1}</span>
				<span>Game Number: {this.props.gameNum}</span>
			</div>
		)
	}
}

export default AdminBar;