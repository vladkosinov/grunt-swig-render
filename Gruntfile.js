/*
 * grunt-swig-render
 * https://github.com/vlkosinov/grunt-swig-render
 *
 * Copyright (c) 2014 Vlad Kosinov
 * Licensed under the MIT license.
 */

"use strict";

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        "Gruntfile.js",
        "tasks/*.js",
        "<%= nodeunit.tests %>"
      ],
      options: {
        jshintrc: ".jshintrc"
      }
    },

    clean: {
      tests: ["tmp"]
    },

    swig_render: {
      production: {
        options: {
          vars: {
            "env" : "production"
          }
        },
        expand: true,
        cwd: "test/views/static",
        ext: ".html",
        src: ["**/*.swig"],
        dest: "tmp/production/"
      },
      development: {
        files: {
          "tmp/development/index.html" : "test/views/static/index.swig"
        }
      }
    },

    nodeunit: {
      tests: ["test/*_test.js"]
    }

  });

  grunt.loadTasks("tasks");


  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-nodeunit");

  grunt.registerTask("test", ["clean", "swig_render", "nodeunit"]);

  grunt.registerTask("default", ["jshint", "test"]);

};
