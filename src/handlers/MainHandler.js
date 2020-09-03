/*
* DEFAULT HANDLER
*/

const MainDefaultState = {
	selectedCards: 0,
	selectedCardsLimit: 2,
	awesomePoints: 0,
	isCzar: false,
	czarData: {
		iconUrl: false,
		username: 'Pablo'
	},
	hand: [
		"People with cake in their mouths talking about how good cake is.",
		"The Hawaiian goddess Kapo and her flying detachable vagina.",
		"Piece of shit Christmas cards with no money in them.",
		"A magical tablet containing a world of unlimited pornography.",
		"Finding out that Santa isn't real.",
		"The Grinch's musty, cum-stained pelt.",
		"Giving money and personal information to strangers on the Internet.",
		"The shittier, Jewish version of Christmas.",
		"Rudolph's bright red balls.",
		"Jizzing into Santa's beard."
	],
	selectedCardIds: [],
	czarCard: {
		text: "But wait, there's more! If you order _ in the next 15 minutes, we'll throw in _ absolutely free!",
		pick: 2
	}
};

export default {
	MainDefaultState,
	MainHandler: {
		'INCREASE_SELECTED_CARDS': (action, state) => {
			const { id } = action;
			state.Main.selectedCards += 1;
			state.Main.selectedCardIds.push(id);
			return { newState: state };
		},
		'DECREASE_SELECTED_CARDS': (action, state) => {
			const { id } = action;
			state.Main.selectedCards -= 1;
			state.Main.selectedCardIds = state.Main.selectedCardIds.filter(_id => _id !== id);
			return { newState: state };
		},
		'CANCEL_SELECTION': (_, state) => {
			state.Main.selectedCards = 0;
			state.Main.selectedCardIds = [];
			return { newState: state };
		},
	}
};
