import { MetaComponent } from '@rebelstack-io/metaflux';
import catImage from  '../../css/images/mollejas.png'

console.log(catImage)

class CardBanner extends MetaComponent {
	constructor () {
		super(global.storage);
	}

	render () {
		const content = document.createElement("div");
		const img = document.createElement("img");
		img.setAttribute("src", catImage);
		const btnGroup = document.createElement("div");
		btnGroup.className = "button-group";
		const drawButton = document.createElement("div");
		drawButton.textContent = "Draw!";
		const cancelButton = document.createElement("div");
		cancelButton.textContent = "Cancel";
		cancelButton.addEventListener("click", () => {
			this.storage.dispatch({
				type: "CANCEL_SELECTION"
			});
		});
		btnGroup.append(drawButton);
		btnGroup.append(cancelButton);
		content.append(img);
		content.append(btnGroup);
		return content;
	}

	handleStoreEvents () {
		return {
			'INCREASE_SELECTED_CARDS': _ => {
				const { selectedCards, selectedCardsLimit } = this.storage.getState().Main;
				if ( selectedCards >= selectedCardsLimit ) {
					this.classList.add('open');
				}
			},
			'DECREASE_SELECTED_CARDS': _ => {
				const { selectedCards, selectedCardsLimit } = this.storage.getState().Main;
				if ( selectedCards < selectedCardsLimit ) {
					this.classList.remove('open');
				}
			},
			'CANCEL_SELECTION': _ => {
				this.classList.remove('open');
			}
		}
	}
}

window.customElements.define('cat-banner', CardBanner);
