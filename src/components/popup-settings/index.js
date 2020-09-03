import { MetaComponent, Div } from '@rebelstack-io/metaflux';

class PopupSettings extends MetaComponent {
	render () {
		return Div();
	}
}

window.customElements.define("popup-settings", PopupSettings);