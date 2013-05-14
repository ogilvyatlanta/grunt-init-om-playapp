'use strict';
module.exports = function (grunt) {

	// load all grunt tasks
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		// grab all of the Grunt dependencies
		pkg: grunt.file.readJSON('package.json'),
		//  default banner
		banner: '' + '/*! \n' + ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.name %> \n' + ' * Authors: Ogilvy Atlanta, contributors \n' + ' */ \n' + '',
		// Compass config options
        compass: {
			options: {
				sassDir: 'stylesheets/sass',
				cssDir: 'stylesheets',
				imagesDir: 'images',
				javascriptsDir: 'javascripts',
				fontsDir: 'fonts',
				importPath: 'components',
				relativeAssets: true,
                outputStyle: 'compressed',
				// user must have gem installed for this to work
				require: ['bourbon-compass', 'neat-compass'],
                debugInfo: true
			},
            dist: {
                options: {
                    sassDir: 'stylesheets/sass',
                    cssDir: 'stylesheets'
                }
            }
		},
        // compile all RequireJS dependencies into main.min.js
		requirejs: {
			compile: {
				options: {
					name: 'main',
					baseUrl: 'javascripts',
					mainConfigFile: 'javascripts/main.js',
					out: 'javascripts/main.min.js',
					useStrict: true,
					preserveLicenseComments: false,
					wrap: true,
					optimize: 'none'
				}
			}
		},
		// watch any SASS files for changes and re-compile into CSS
		watch: {
			compass: {
				files: ['stylesheets/{,*/}*.{scss,sass}'],
				tasks: ['compass']
			},
            scripts: {
                files: ['javascripts/**/*.js', '!javascripts/main.min.js'],
                tasks: ['requirejs']
            }
		}
	});

	grunt.renameTask('regarde', 'watch');

	grunt.registerTask('build', [
        'compass',
        'requirejs'
    ]);
	grunt.registerTask('default', [
        'watch'
    ]);
 };