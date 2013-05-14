define(function () {

	return [{
		id: 1,
		parent_selector: 'form',
		selector: '.btn',
		action: 'click',
		type: 'track',
		props: {
			category: 'btn',
			action: function () {
				return 'click_logo_' + $(this).val();
			},
			opt_label: 'non_non',
			opt_value: 1,
			opt_noninteraction: false
		}

	}];
});