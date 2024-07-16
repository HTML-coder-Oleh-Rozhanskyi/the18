const select = () => {
	const elements = document.querySelectorAll('.top__item-form');
	elements.forEach(el => {
		const choices = new Choices(el, {
			searchEnabled: false,
			itemSelectText: '',
			placeholder: false,
		});
	});
};

select();

