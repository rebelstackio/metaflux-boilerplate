import { MetaContainer } from '@rebelstack-io/metaflux';
import '../../css/general.css';
import '../../css/table-top.scss';
import '../../css/cat-banner.scss';
import '../../css/hand.scss';
import '../../css/card.scss';
import '../../css/score-board.scss';
import '../../css/corner-menu.scss';
import '../../css/czar-indicator.scss';
import '../../css/cah-popup.scss';
import '../../handlers';
import '../../containers/table-top';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

class MainContainer extends MetaContainer {
	// eslint-disable-next-line class-method-use-this
	render () {
		const content = document.createElement('div');
		content.id = 'container';
		content.innerHTML = `
			<table-top></table-top>
		`;
		return content;
	}
}

window.customElements.define('main-container', MainContainer);
