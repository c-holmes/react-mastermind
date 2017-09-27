import React, {Component} from 'react';

class AdminBar extends Component{
	render() {
		return(
			<div className="admin-bar">
				<span className="score">
					<span className="player1 item">You: {this.props.score.player1}</span>
					<span className="player2 item">Computer: {this.props.score.player2}</span>
				</span>
				<span className="item">Turns Left: {this.props.maxTurns - this.props.turn + 1}</span>
				<span className="item">Game Number: {this.props.gameNum}</span>
			</div>
		)
	}
}

export default AdminBar;