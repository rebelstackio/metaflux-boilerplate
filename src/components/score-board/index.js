import { MetaComponent } from '@rebelstack-io/metaflux';
import '../corner-menu';
import '../czar-indicator';

class ScoreBoard extends MetaComponent {

	constructor () {
		super(global.storage);
	}

	render () {
		const content = document.createElement("div");
		const menu = document.createElement("corner-menu");

		const board = document.createElement("div");
		board.className = "board";

		const boardContent = document.createElement("div");

		const title = document.createElement("h2");
		title.textContent = "Your Score:"

		this.scoreCounter = document.createElement("div");

		this.pickedCardCounter = document.createElement("div");

		const secondTitle = document.createElement("h2");
		secondTitle.textContent = "Czar:"

		const czarIndicator = document.createElement("czar-indicator");

		boardContent.append(title);
		boardContent.append(secondTitle);
		boardContent.append(this.scoreCounter);
		boardContent.append(this.pickedCardCounter);
		boardContent.append(czarIndicator);

		board.append(boardContent);

		content.append(menu);
		content.append(board);

		this.fillCounters();

		return content;
	}

	fillCounters () {
		const { selectedCards, selectedCardsLimit, awesomePoints, isCzar } = this.storage.getState().Main;
		this.scoreCounter.textContent = `Awesome Points: ${awesomePoints}`;
		this.pickedCardCounter.textContent = `Cards picked: ${selectedCards}/${selectedCardsLimit}`;
	}

	handleStoreEvents () {
		return {
			'INCREASE_SELECTED_CARDS': _ => {
				this.fillCounters();
			},
			'DECREASE_SELECTED_CARDS': _ => {
				this.fillCounters();
			},
			'CANCEL_SELECTION': _ => {
				this.fillCounters();
			}
		};
	}
}

window.customElements.define("score-board", ScoreBoard);