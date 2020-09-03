import { MetaComponent } from '@rebelstack-io/metaflux';
import '../../components/hand';
import '../../components/czar';
import '../../components/catBanner';
import '../../components/popup';

class TableTop extends MetaComponent {
	render () {
		return `
			<cat-banner></cat-banner>
			<cah-czar></cah-czar>
			<cah-hand></cah-hand>
			<cah-popup class="hidden"></cah-popup>
		`;
	}
}

window.customElements.define("table-top", TableTop);