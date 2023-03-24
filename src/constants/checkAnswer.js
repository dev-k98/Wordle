export default (answer, word) => {
	const result = new Array(answer.length);
	// result.fill(0);
	const ansCheck = [...answer];

	for (let i = 0; i < answer.length; i += 1) {
		if (ansCheck.includes(word[i])) {
			if (word[i] === ansCheck[i]) {
				ansCheck[i] = '';
				result[i] = 1;
			} else {
				const idx = ansCheck.indexOf(word[i]);
				ansCheck[idx] = '';
				result[i] = 2;
			}
		} else {
			result[i] = 0;
		}
	}

	// setCheck([...check, result]);
	return result;
};
