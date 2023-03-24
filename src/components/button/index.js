import PropTypes from 'prop-types';
import React, { useState } from 'react';
import './button.css';

const Button = ({ onClick, label }) => {
	const [isLoading, setIsLoading] = useState(false);

	const callback = () => {
		setIsLoading(true);
		setTimeout(() => {
			onClick();
			setIsLoading(false);
		}, 1000);
	};
	return (
		<button type="button" onClick={callback} className="styled-button">
			{isLoading ? 'Loading...' : label}
		</button>
	);
};

Button.propTypes = {
	onClick: PropTypes.func,
	label: PropTypes.string,
};

Button.defaultProps = {
	onClick: () => {},
	label: 'Submit',
};

export default Button;
