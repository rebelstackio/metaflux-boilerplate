
class Counter extends MetaComponent {
	/**
	 * MetaComponent constructor needs storage.
	 */
	constructor () {
		super(window.storage);
	}
	// eslint-disable-next-line class-method-use-this
	render () {
		const content = document.createElement('div');
		this.btn = document.createElement('button');
		this.btn.addEventListener('click', () => {
			this.storage.dispatch({type: 'INCREMENT'});
		});
		this.btn.textContent = 'Increase';
		content.appendChild(this.btn);
		this.text = document.createElement('div');
		this.text.textContent = this.storage.getState().Main.value;
		content.appendChild(this.text);
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
