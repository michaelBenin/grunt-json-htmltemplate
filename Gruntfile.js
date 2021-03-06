/*
 * grunt-json-htmltemplate
 * http://gruntjs.com/
 *
 * Copyright (c) 2013 Michael Benin, contributors
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                '<%= nodeunit.tests %>'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        clean: {
            test: ['tmp']
        },

        json_template_html: {
            src: {
                src: 'src/js/template/src/templates.json',
                templates: 'src/templates/compress/*',
                dest: 'src/js/template/built/templates.json'
            }
        },

        nodeunit: {
            tasks: ['test/*_test.js']
        }
    });

    grunt.loadTasks('tasks');

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-contrib-internal');

    grunt.registerTask('mkdir', grunt.file.mkdir);

    grunt.registerTask('test', [
        'clean',
        'mkdir:tmp',
        'html',
        'json',
        'nodeunit',
        'clean'
    ]);

    grunt.registerTask('default', ['test', 'build-contrib']);
};
