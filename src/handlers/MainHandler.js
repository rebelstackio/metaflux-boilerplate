/*
* DEFAULT HANDLER
*/

const MainDefaultState = {
	value: 1,
	y: 5,
	lines: [
		[{dots: 4, start: 246.5}],
		[{dots: 4, start: 246.5}],
		[{dots: 5, start: 246.5}],
		[{dots: 4, start: 258.5}],
		[{dots: 7, start: 246.5}],
		[{dots: 9, start: 234.5}],
		[{dots: 10, start: 234.5}],
		[{dots: 12, start: 210.5}, {dots: 5, start: 390.5}],
		[{dots: 23, start: 198.5}],
		[{dots: 26, start: 162.5}],
		[{dots: 26, start: 150.5}],
		[{dots: 2, start: 54.2}, {dots: 27, start: 138.5}],
		[{dots: 4, start: 30.2}, {dots: 29, start: 126.5}],
		[{dots: 6, start: 6.2}, {dots: 29, start: 126.5}],
		[{dots: 8, start: 6.2}, {dots: 27, start: 114.5}, {dots: 2, start: 450.5}],
		[{dots: 33, start: 6.2}],
		[{dots: 31, start: 6.2}],
		[{dots: 29, start: 6.2}],
		[{dots: 29, start: 6.2}],
		[{dots: 29, start: 6.2}],
		[{dots: 29, start: 6.2}],
		[{dots: 26, start: 42.2}],
		[{dots: 22, start: 66.2}],
		[{dots: 21, start: 78.2}],
		[{dots: 20, start: 90.2}],
		[{dots: 20, start: 90.2}],
		[{dots: 19, start: 114.2}],
		[{dots: 20, start: 114.2}],
		[{dots: 19, start: 126.2}],
		[{dots: 22, start: 126.2},{dots: 2, start: 438.2}],
		[{dots: 21, start: 138.2}, {dots: 3, start: 426.2}],
		[{dots: 27, start: 138.2}],
		[{dots: 27, start: 138.2}],
		[{dots: 26, start: 150.2}],
		[{dots: 28, start: 162.2}],
		[{dots: 29, start: 162.2}],
		[{dots: 29, start: 174.2}],
		[{dots: 29, start: 186.2}],
		[{dots: 29, start: 186.2}],
		[{dots: 28, start: 198.2}],
		[{dots: 27, start: 210.2}],
		[{dots: 27, start: 210.2}],
		[{dots: 26, start: 222.2}],
		[{dots: 26, start: 222.2}],
		[{dots: 26, start: 222.2}],
		[{dots: 25, start: 234.2}],
		[{dots: 24, start: 246.2}],
		[{dots: 22, start: 258.2}],
		[{dots: 20, start: 282.2}],
		[{dots: 18, start: 306.2}],
		[{dots: 19, start: 318.2}],
		[{dots: 17, start: 330.2}],
		[{dots: 14, start: 366.2}],
		[{dots: 11, start: 390.2}],
		[{dots: 9, start: 414.2}],
		[{dots: 7, start: 426.2}],
		[{dots: 6, start: 438.2}],
		[{dots: 5, start: 450.2}]
	]
};

export default {
	MainDefaultState,
	MainHandler: {
		'INCREMENT': (action, state) => {
			state.Main.value += 1;
			return { newState: state };
		}
	}
};
