import React, {Component} from 'react';

class WinMessage extends Component {
	render() {
		return(
			<div className="winner popup">
				<h2>Winner!</h2>
				<h3>Game was won in {this.props.turn + 1} turns</h3>
				<button onClick={(i) => this.props.onClick()}>Reset</button>
			</div>
		)
	} 
}

export default WinMessage;