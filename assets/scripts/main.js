import { textRotate } from './slider';
import { drawSkills } from './skills';
import { initCanvas, createDots } from './canvas';
import { skills } from './skills-list';
import { texts } from './hero-texts';
import { animateTopOffset } from '@three11/animate-top-offset';

const doc = document;
const win = window;
const header = doc.querySelector('.c-header');
const toggleHeaderState = winO => {
	header.classList.toggle('c-header--with-background', winO > 0);
};
const internalLinks = [...doc.querySelectorAll('.js-internal-link')];
const navToggler = doc.getElementById('nav_toggle');

const canvas = initCanvas('canvas');

drawSkills(skills);
createDots(canvas);
textRotate('text', texts);

internalLinks.forEach(link => {
	link.addEventListener('click', event => {
		event.preventDefault();

		const href = link.getAttribute('href');
		const offset = doc.querySelector(href).offsetTop;

		animateTopOffset(offset - header.clientHeight);
		navToggler.checked = false;
	});
});

win.addEventListener('load', event => {
	toggleHeaderState(win.pageYOffset);
});

win.addEventListener('scroll', event => {
	toggleHeaderState(win.pageYOffset);
});