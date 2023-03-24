import PropTypes from 'prop-types';
import React from 'react';

import './result.css';

const Result = ({ answer, handleRestart }) => {
	return (
		<div className="outer-result">
			<div className="inner-result">
				<div className="answer">
					{answer.map((item) => (
						<span className="tile correct" key={item}>
							{item.toUpperCase()}
						</span>
					))}
				</div>
				<button onClick={handleRestart} type="button">
					restart
				</button>
			</div>
		</div>
	);
};

Result.propTypes = {
	answer: PropTypes.string,
	handleRestart: PropTypes.func,
};

Result.defaultProps = {
	handleRestart: () => {},
	answer: [],
};

export default Result;
