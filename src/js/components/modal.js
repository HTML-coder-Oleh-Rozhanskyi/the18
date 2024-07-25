export function modal() {
	const btns = document.querySelectorAll('.button-block__button');
	const modalOverlay = document.querySelector('.modals__overlay');
	const modalsItem = document.querySelectorAll('.modals__item');
	const body = document.querySelector('.body');
	const modalButton = document.querySelector('.modals-btn')
	const menuWrap = document.querySelector('.menu');
	const menuBtn = document.querySelector('.burger-btn');

	btns.forEach((el) => {
		el.addEventListener('click', (e) => {
			body.classList.add('menu-active')
			let path = e.currentTarget.getAttribute('data-path');

			modalsItem.forEach((el) => {
				el.classList.remove('modals__item--visible');
			});

			document.querySelector(`[data-target="${path}"]`).classList.add('modals__item--visible');
			modalOverlay.classList.add('modals__overlay--visible');

			menuWrap.classList.remove('menu-active');
			menuBtn.classList.remove('menu-active');
		});
	});

	modalOverlay.addEventListener('click', (e) => {

		if (e.target == modalOverlay) {
			modalOverlay.classList.remove('modals__overlay--visible');
			body.classList.remove('menu-active')
			modalsItem.forEach((el) => {
				el.classList.remove('modals__item--visible');
			});
		}
	});

	modalButton.addEventListener('click', (e) => {
		modalOverlay.classList.remove('modals__overlay--visible');
		body.classList.remove('menu-active')
		modalsItem.forEach((el) => {
			el.classList.remove('modals__item--visible');
		});

	});
};
modal();
