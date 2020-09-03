import { MetaComponent } from '@rebelstack-io/metaflux';

class Menu extends MetaComponent {
	constructor () {
		super( global.storage );
	}
	render () {
		const content = document.createElement("div");
		this.cog = document.createElement("div");
		this.cog.innerHTML = `
			<span class="fa fa-cog"></span>
		`;
		content.append(this.cog);
		this.user = document.createElement("div");
		this.user.innerHTML = `
			<span class="fa fa-user"></span>
		`;
		content.append(this.user);
		this.cog.addEventListener("click", e => {
			e.preventDefault()
			this.storage.dispatch({
				type: "OPEN_MODAL_SETTINGS"
			});
		});

		return content;
	}
	handleStoreEvents () {
		return {
			'_': _ => {
				//
			}
		}
	}
}

window.customElements.define('corner-menu', Menu);