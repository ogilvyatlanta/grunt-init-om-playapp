define(['domlib', 'lib/analytics'], function ($, analytics) {
	'use strict';

	var initialize = function () {
		$(ready);
	},

	// method called when document is ready
	ready = function () {

		console.log('site ready');

	};

	return {
		initialize: initialize
	};
});