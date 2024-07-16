function modal() {
	const btns = document.querySelectorAll('.gallery__item');
	const modalOverlay = document.querySelector('.modals__overlay');
	const modalsItem = document.querySelectorAll('.modals__item');
	const body = document.querySelector('.body');

	btns.forEach((el) => {
		el.addEventListener('click', (e) => {
			body.classList.add('menu-active')
			let path = e.currentTarget.getAttribute('data-path');

			modalsItem.forEach((el) => {
				el.classList.remove('modals__item--visible');
			});



			document.querySelector(`[data-target="${path}"]`).classList.add('modals__item--visible');
			modalOverlay.classList.add('modals__overlay--visible');
		});
	});

	modalOverlay.addEventListener('click', (e) => {
		console.log(e.target);

		if (e.target == modalOverlay) {
			modalOverlay.classList.remove('modals__overlay--visible');
			body.classList.remove('menu-active')
			modalsItem.forEach((el) => {
				el.classList.remove('modals__item--visible');
			});
		}
	});
};
modal();
