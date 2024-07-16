function tab() {
	const tabBtn = document.querySelectorAll('.tab__btn');
	const tabWrapper = document.querySelectorAll('.tab__wrapper');
	tabBtn.forEach(function (element) {
		element.addEventListener('click', open);
	})
	function open(evt) {
		const tabTarget = evt.currentTarget;
		const button = tabTarget.dataset.button;
		tabBtn.forEach(function (item) {
			item.classList.remove('tab__btn--active');
		});
		tabTarget.classList.add('tab__btn--active');
		tabWrapper.forEach(function (item) {
			item.classList.remove('tab__wrapper--active');
		});
		document.querySelector(`#${button}`).classList.add('tab__wrapper--active');
	};
};
tab();

