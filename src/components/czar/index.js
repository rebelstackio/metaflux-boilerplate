import { MetaComponent } from '@rebelstack-io/metaflux';
import '../score-board';

class Czar extends MetaComponent {
	constructor () {
		super(global.storage);
	}

	render () {
		let { text } = this.storage.getState().Main.czarCard;

		const content = document.createElement("div");

		this.blackCard = document.createElement("cah-card");
		this.blackCard.className = "black";

		this.blackCard.innerHTML = `<div>${text}</div>`;

		const scoreBoard = document.createElement("score-board");

		content.append(this.blackCard);
		content.append(scoreBoard);

		return content;
	}

	replaceBlanks () {
		const { czarCard, selectedCardIds } = this.storage.getState().Main;
		let { text } = czarCard;

		for (let i = 0; i < selectedCardIds.length; i++) {
			text = text.replace(/_/, `<span>${i + 1}</span>`);
		}
		return text;
	}

	onSelectedCardsChange () {
		const newText = this.replaceBlanks();
		this.blackCard.innerHTML = `<div>${newText}</div>`;
	}

	handleStoreEvents () {
		return {
			'INCREASE_SELECTED_CARDS': _ => {
				this.onSelectedCardsChange();
			},
			'DECREASE_SELECTED_CARDS': _ => {
				this.onSelectedCardsChange();
			},
			'CANCEL_SELECTION': _ => {
				this.onSelectedCardsChange();
			}
		}
	}
}

window.customElements.define('cah-czar', Czar)