import './App.css';
import React, { useEffect, useRef, useState } from 'react';

import Result from '../components/Result';
import WordGrid from '../components/word-grid/WordGrid';
import checkAnswer from '../constants/checkAnswer';
import { colors, initialState } from '../constants/variables';
import words from '../constants/words';

const App = () => {
	const ref = useRef();
	const [attempt, setAttempt] = useState(0);
	const [keyPress, setKeyPress] = useState('');
	const [showResult, setShowResult] = useState(false);
	const [responses, setResponses] = useState([]);
	const [check, setCheck] = useState([]);
	const [word, setWord] = useState(initialState);
	const [answer, setAnswer] = useState([]);

	const keyboardEvent = (e) => {
		setKeyPress(e);
	};

	useEffect(() => {
		setAnswer(words().split(''));
		window.addEventListener('keydown', (e) => keyboardEvent(e));
		return window.removeEventListener('keydown', (e) => keyboardEvent(e));
	}, []);

	const showAnswer = () => {
		setShowResult(true);
	};

	useEffect(() => {
		if (keyPress.keyCode >= 65 && keyPress.keyCode <= 90 && word.length < 5) {
			setWord((prev) => [...prev, keyPress.key]);
			ref.current.focus();
		}
		if (keyPress.keyCode === 8 && word.length > 0) {
			setWord([...word.slice(0, word.length - 1)]);
		}
	}, [keyPress]);

	const handleRestart = () => {
		setAnswer(words().split(''));
		setAttempt(0);
		setResponses([]);
		setCheck([]);
		setWord(initialState);
		setShowResult(false);
	};

	const crossCheck = () => {
		const result = checkAnswer(answer, word);
		setCheck([...check, result]);
		return result;
	};

	const handleSubmit = () => {
		if (word.length < 5) return;
		const result = crossCheck();
		if (!result.includes(2) && !result.includes(0)) {
			setResponses((prev) => [...prev, word]);
			setShowResult(true);
			setAttempt(6);
			return;
		}
		if (attempt === 5) showAnswer();
		setAttempt(attempt + 1);
		setResponses((prev) => [...prev, word]);
		setWord(initialState);
	};

	return (
		<div className="App">
			<div>
				<p className="heading">Wordle</p>
			</div>
			<div className="word-section">
				{new Array(6).fill().map((item, idx) => (
					<WordGrid
						attempt={attempt}
						colors={colors}
						check={check}
						idx={idx}
						word={word}
						responses={responses}
						item={item}
					/>
				))}
				<div>
					<button className="submit-button" ref={ref} type="button" onClick={handleSubmit}>
						submit
					</button>
				</div>
			</div>
			{showResult && <Result handleRestart={handleRestart} answer={answer} />}
		</div>
	);
};

export default App;
