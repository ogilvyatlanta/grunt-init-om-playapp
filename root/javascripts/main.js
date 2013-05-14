'use strict';

require.config({
	paths: {
		"domlib": ('__proto__' in {}) ? "//cdnjs.cloudflare.com/ajax/libs/zepto/1.0/zepto.min" : "//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min",
		"Capture": 'vendor/capture'
	},
	shim: {
		"domlib": {
			"exports": "$"
		},
		"Capture": {
			"deps": ['domlib'],
			"exports": "Capture"
		}
	}
});

require(['site'], function (site) {
	site.initialize();
});