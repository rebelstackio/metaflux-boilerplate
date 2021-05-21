import { MetaContainer, Div, HTMLElementCreator } from '@rebelstack-io/metaflux';
import '../../css/general.css';
import '../../handlers';
import '../../components/counter';

class MainContainer extends MetaContainer {
	// eslint-disable-next-line class-method-use-this
	render () {
		return Div({ id: 'container' }, HTMLElementCreator('simple-counter'))
	}
}

window.customElements.define('main-container', MainContainer);
