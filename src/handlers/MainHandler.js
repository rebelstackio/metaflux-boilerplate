/*
* DEFAULT HANDLER
*/

const MainDefaultState = {
	value: 1
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
