import React, { Component } from 'react';
import PropTypes from 'prop-types';

class KeyPegs extends Component {
	render() {
		let KeyPegsClassNames = 'key-pegs';
		if(this.props.feedback){
			KeyPegsClassNames =  KeyPegsClassNames + ' active'; 
		}
		return(
			<div className={KeyPegsClassNames} >
				{this.props.feedback}
			</div>
		)
	}
}

KeyPegs.propTypes = {
  feedback: PropTypes.array,
}

export default KeyPegs;