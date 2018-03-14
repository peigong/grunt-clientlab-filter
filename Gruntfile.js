/*
 * grunt-peigong-filter
 * https://github.com/peigong/grunt-peigong-filter
 *
 * Copyright (c) 2013 peigong
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },

    // Configuration to be run (and then tested).
    filter: {
      options: { 
         "name": [ { "token": "@NAME@", "value": "周培公" } ]
      },
      default_options: {
        options: {
        },
        files: [
          {
            src: ['test/fixtures/testing'],
            dest: 'tmp/default_options',
            filters: ["name"]
          }
        ]
      },
      custom_options: {
        options: {
          "email": [ { "token": "@EMAIL@", "value": "peigong@foxmail.com" } ]
        },
        files: [
          {
            src: ['test/fixtures/testing'],
            dest: 'tmp/custom_options',
            filters: ["name", "email"]
          }
        ]
      },
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'filter', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
