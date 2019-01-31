import { MetaComponent } from '@rebelstack-io/metaflux';

class PeruMap extends MetaComponent {
	constructor () {
		super(global.storage);
	}
	// eslint-disable-next-line class-method-use-this
	render () {
		this.circles = [];
		this.content = document.createElement('div');
		return this.content;
	}
	addListeners () {
		const { lines, y } = this.storage.getState().Main;
		this.drawMap(lines);
		this.content.innerHTML = `
		<svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 527 695">
			<g opacity=".8">
				${this.circles.map(circle => circle).join('')}
			</g>
			<linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="6684.232" y1="-3076.5" x2="7013.398" y2="-3076.5" gradientTransform="rotate(-90 4767.5 1908)">
				<stop offset=".092" stop-color="#ededed" stop-opacity="0"/>
				<stop offset=".329" stop-color="#ededed"/>
			</linearGradient>
			<path fill="url(#SVGID_2_)" d="M474-316.6V12.6H-908v-329.2z"/>
		</svg>
		`;
	}
	handleStoreEvents () {
		return {
			'': action => {
				// .
			}
		};
	}
	drawDots ({dots, start}, y) {
		for (let i = 0; i < dots; i++) {
			const circleHTML = `<circle id="circle-${i}" class="st9 circle" cx="${start}" cy="${y}" r="3"></circle>`;
			start = start + 12;
			this.circles.push(circleHTML);
		}
	}
	drawRow (rows, start) {
		rows.forEach(row => {
			this.drawDots(row, start);
		});
	}
	drawMap (lines, start = 5) {
		lines.forEach(rows => {
			this.drawRow(rows, start);
			start = start + 12;
		});
	}
}

window.customElements.define('peru-map', PeruMap);
/*
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
const circles = [];
document.querySelectorAll('g > *').forEach((item, index) => {
  circles.push(item);
});
function randomizeAnimation (previous = false) {
  if (previous) {
    previous.classList.remove('selected-circle');
  }
  const current = circles[getRandomInt(0, circles.length)];
  current.classList.add('selected-circle');
  console.log(current);
  console.log(getCoordinates(current));
  setTimeout(() => {
    randomizeAnimation(current);
  }, 10000);
}
function getCoordinates (element) {
  return {
    x: element.getAttribute('cx'),
    y: element.getAttribute('cy')
  };
}
randomizeAnimation();
*/
