/*
 * grunt-init-om-template
 * https://gruntjs.com/
 * https://github.com/ogilvyatlanta/grunt-init-om-website
 *
 * Copyright (c) 2013 Ogilvy Atlanta, contributors
 * Licensed under the MIT license.
 */

'use strict';

// Basic template description.
exports.description = 'Create a play app scaffold with grunt-init';

// Template-specific notes to be displayed before question prompts.
exports.notes = '<insert project notes on setup>';

// Template-specific notes to be displayed after question prompts.
exports.after = 'You should now install project dependencies with \n' +
	'_bundle install_ &&  _npm install_ && _bower install_.';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function (grunt, init, done) {

	init.process({}, [

        //init.prompt('name')

    ], function (err, props) {

		// Files to copy (and process).
		var files = init.filesToCopy(props);

		// Actually copy (and process) files.
		init.copyAndProcess(files, props);

		// Generate package.json file, used by npm and grunt.
		init.writePackageJSON('package.json', {
			name: 'public',
			version: '0.0.0-ignored',
			node_version: '>= 0.8.0',
			devDependencies: {
				'grunt': '~0.4.1',
				'grunt-contrib-compass': '~0.1.2',
				'grunt-contrib-requirejs': '0.4.0',
				'grunt-regarde': '~0.1.1',
				"matchdep": "~0.1.1"
			}
		});

		done();

	});

};
