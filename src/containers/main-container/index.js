import { MetaContainer } from '@rebelstack-io/metaflux';
import '../../css/general.css';
import '../../handlers';
import '../../components/peru-map';

class MainContainer extends MetaContainer {
	// eslint-disable-next-line class-method-use-this
	render () {
		const content = document.createElement('div');
		content.className = 'container';
		const peruMap = document.createElement('peru-map');
		content.appendChild(peruMap);
		return content;
	}
}

window.customElements.define('main-container', MainContainer);
