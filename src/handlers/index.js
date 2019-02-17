import main from './MainHandler.js';

const { MainDefaultState, MainHandler } = main;

window.storage = new Store(
	{Main: MainDefaultState},
	MainHandler
);
