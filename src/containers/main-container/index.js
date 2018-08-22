import { MetaContainer } from '@rebelstack-io/metaflux';
import '../../css/general.css';
import '../../handlers';
import '../../components/counter';

class MainContainer extends MetaContainer {
	// eslint-disable-next-line class-method-use-this
	render () {
		const content = document.createElement('div');
		content.id = 'container';
		const counter = document.createElement('simple-counter');
		content.appendChild(counter);
		return content;
	}
}

window.customElements.define('main-container', MainContainer);
