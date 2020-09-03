"use strict;"

/**
 * Card component
 * @param {string} content inner html content
 * @param {string} className black or white style of card
 * @param {string} id id of card
 */
function cahCard (content = "", className = "white", id = 0) {

	this.id = id;// It's referenced from hand
	const _storage = global.storage;

	const card = document.createElement('cah-card');
	card.className = className;
	card.innerHTML = `<span></span><div>${content}</div>`;
	card.id = `cah-card-${id}`;

	if (className === 'white') {
		card.addEventListener('click', () => {
			const { selectedCards, selectedCardsLimit } = _storage.getState().Main;
			const isCardSelected = card.classList.contains('selected');
			if (!isCardSelected && selectedCards < selectedCardsLimit) {
				card.classList.add('selected');
				_storage.dispatch({
					type: 'INCREASE_SELECTED_CARDS',
					id
				});
			} else if (isCardSelected) {
				card.classList.remove('selected');
				_storage.dispatch({
					type: 'DECREASE_SELECTED_CARDS',
					id
				});
			}
		});
	}

	return card;
}

export default cahCard;