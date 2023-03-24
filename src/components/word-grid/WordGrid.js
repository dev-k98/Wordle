/* eslint-disable react/forbid-prop-types */
import { PropTypes } from 'prop-types';
import React from 'react';
import './wordGrid.css';

const WordGrid = ({ attempt, colors, check, idx, word, responses, item }) => {
	return (
		<div className="input-section" key={item}>
			<span
				disabled={attempt !== idx}
				className={`tile ${(idx === attempt && word.length) === 0 && 'active'} ${
					colors[check[idx]?.[0]]
				}`}>
				{idx === attempt
					? word[0]?.toUpperCase()
					: responses[idx]?.[0]
					? responses[idx]?.[0]?.toUpperCase()
					: ''}
			</span>
			<span
				disabled={attempt !== idx}
				className={`tile ${(idx === attempt && word.length) === 1 && 'active'} ${
					colors[check[idx]?.[1]]
				}`}>
				{idx === attempt
					? word[1]?.toUpperCase()
					: responses[idx]?.[1]
					? responses[idx]?.[1]?.toUpperCase()
					: ''}
			</span>
			<span
				disabled={attempt !== idx}
				className={`tile ${(idx === attempt && word.length) === 2 && 'active'} ${
					colors[check[idx]?.[2]]
				}`}>
				{idx === attempt
					? word[2]?.toUpperCase()
					: responses[idx]?.[2]
					? responses[idx]?.[2]?.toUpperCase()
					: ''}
			</span>
			<span
				disabled={attempt !== idx}
				className={`tile ${(idx === attempt && word.length) === 3 && 'active'} ${
					colors[check[idx]?.[3]]
				}`}>
				{idx === attempt
					? word[3]?.toUpperCase()
					: responses[idx]?.[3]
					? responses[idx]?.[3]?.toUpperCase()
					: ''}
			</span>
			<span
				disabled={attempt !== idx}
				className={`tile ${(idx === attempt && word.length) === 4 && 'active'} ${
					colors[check[idx]?.[4]]
				}`}>
				{idx === attempt
					? word[4]?.toUpperCase()
					: responses[idx]?.[4]
					? responses[idx]?.[4]?.toUpperCase()
					: ''}
			</span>
		</div>
	);
};

WordGrid.propTypes = {
	attempt: PropTypes.number,
	idx: PropTypes.number,
	colors: PropTypes.array,
	word: PropTypes.array,
	responses: PropTypes.array,
	check: PropTypes.array,
	item: PropTypes.string,
};

WordGrid.defaultProps = {
	attempt: 0,
	idx: 0,
	colors: [],
	word: [],
	responses: [[]],
	check: [[]],
	item: '',
};

export default WordGrid;
