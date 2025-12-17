export function getRandomColor() {
	const letters = '1234567890ABCDEF';
	let randomColor = '#';
	for (let i = 0; i < 6; i++) {
		randomColor += letters[Math.floor(Math.random() * 16)];
	}
	return randomColor;
}