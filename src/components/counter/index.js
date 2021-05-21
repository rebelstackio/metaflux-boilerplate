import { MetaComponent, Div, Button } from '@rebelstack-io/metaflux';

class Counter extends MetaComponent {
	/**
	 * MetaComponent constructor needs storage.
	 */
	constructor () {
		super(global.storage);
	}
	// eslint-disable-next-line class-method-use-this
	render () {
		this.btn = Button({onclick: () =>{
			this.storage.dispatch({type: 'INCREMENT'});
		}}, 'Increase')
		this.text = Div({}, this.storage.getState().Main.value);
		const content = Div({}, [ this.btn, this.text ]);
		return content;
	}

	/**
	 * Handle Events in a organized way.
	 */
	handleStoreEvents () {
		return {
			'INCREMENT': () => {
				this.text.textContent = this.storage.getState().Main.value;
			}
		};
	}
}

window.customElements.define('simple-counter', Counter);
