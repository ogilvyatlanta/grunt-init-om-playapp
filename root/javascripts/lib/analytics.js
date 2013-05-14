define(['Capture', 'lib/analytics-config'], function (Capture, eventsConfig) {

	//console.log('here');

	var initialize = function () {
		var capture = new Capture({
			events: eventsConfig,
			providers: [{
				name: 'gaq',
				options: {
					account: 'UA-XXXXX-X'
				}
			}]
		});
	};

	return {
		initialize: initialize
	};
});