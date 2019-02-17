import '../../handlers/index.js';
import '../../components/counter/index.js';

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
