'use strict';

var swig = require('swig');

module.exports = function (grunt) {

  grunt.registerMultiTask('swig_render', 'Simple grunt plugin for render Swig templates', function () {

    var options = this.options({
      vars: {
        env : "development"
      },
      swigOptions: {}
    });

    swig.setDefaults(options.swigOptions);

    this.files.forEach(function (element) {

      element.src.forEach(function (file) {
        grunt.file.write(element.dest, swig.renderFile(file, options.vars));
        grunt.log.writeln('✔ ' + file + " -> " + element.dest);
      });

    });

  });

};
