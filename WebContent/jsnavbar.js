const openIcon = document.querySelector('.icon');
const linkswrapper = document.querySelector('.links-wrapper');
const backdrop = document.querySelector('.backdrop');
const closeIcon = document.querySelector('.close-btn');


openIcon.addEventListener('click', () => {
	linkswrapper.classList.add('open');
});
closeIcon.addEventListener('click', () => {
	linkswrapper.classList.remove('open');
});
backdrop.addEventListener('click', () => {
	linkswrapper.classList.remove('open');
});
