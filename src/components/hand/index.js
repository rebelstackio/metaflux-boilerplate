import { MetaComponent } from '@rebelstack-io/metaflux';
import cahCard from '../../components/card';
import '../../handlers';

class Hand extends MetaComponent {
	constructor () {
		super(global.storage);
	}
	render () {
		this.content = document.createElement('div');
		this.cards = [];
		const { hand } = this.storage.getState().Main;
		for (let i = 0; i < hand.length; i++) {
			const cardNode = new cahCard(hand[i], 'white', i);
			this.cards.push(cardNode);
			this.content.appendChild(cardNode);
		}
		return this.content;
	}
	tagCard () {
		const { selectedCardIds } = this.storage.getState().Main;

		this.cards.forEach(card => {
			selectedCardIds.forEach((id, index) => {
				if (card.id === `cah-card-${id}`) {
					card.querySelector('span').textContent = index + 1;
					card.querySelector('span').className = `cah-card-count-${index +1}`;
				}
			})
		});
	}
	handleStoreEvents () {
		return {
			'INCREASE_SELECTED_CARDS': _ => {
				const { selectedCards, selectedCardsLimit } = this.storage.getState().Main;
				if (selectedCards === selectedCardsLimit) {
					this.content.classList.add('full-hand');
				} else {
					this.content.classList.remove('full-hand');
				}
				this.tagCard();
			},
			'DECREASE_SELECTED_CARDS': _ => {
				const { selectedCards, selectedCardsLimit } = this.storage.getState().Main;
				if (selectedCards < selectedCardsLimit) {
					this.content.classList.remove('full-hand');
				}
				this.tagCard();
			},
			'CANCEL_SELECTION': _ => {
				this.content.classList.remove('full-hand');
				this.cards.forEach(card => {
					card.classList.remove("selected");
				});
			}
		};
	}
}

window.customElements.define('cah-hand', Hand);