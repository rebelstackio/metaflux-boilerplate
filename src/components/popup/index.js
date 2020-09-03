import { MetaComponent, Div } from '@rebelstack-io/metaflux';
import '../popup-settings';

class Popup extends MetaComponent {
	constructor () {
		super(global.storage);
	}

	render () {
		const cahCard = Div().HTMLElementCreator("cah-card", {});

		this.content = cahCard.Div();
		cahCard.Button({
			'onclick': () => {
				this.classList.add("hidden");
			}
		}, "close");

		return cahCard.baseNode();
	}

	handleStoreEvents () {
		return {
			'OPEN_MODAL_SETTINGS': _ => {
				this.content.innerHTML = "<popup-settings></popup-settings>";
				this.classList.toggle("hidden");
			}
		}
	}
}

window.customElements.define('cah-popup', Popup);