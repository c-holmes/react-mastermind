import React, { Component } from 'react';

class PegPicker extends Component {
	render() {
		return(
			<form onSubmit={this.props.handleSubmit.bind(this)}>
				<input type="number" name="peg1" max="6" min="1" />
				<input type="number" name="peg2" max="6" min="1" />
				<input type="number" name="peg3" max="6" min="1" />
				<input type="number" name="peg4" max="6" min="1" />
				<input type="submit" value="Submit"/>
			</form>
		)
	}
}

export default PegPicker;