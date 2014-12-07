'use strict';

var grunt = require('grunt');

exports.swig_render = {
  setUp: function(done) {
    done();
  },
  production: function(test) {

    var actual = [
      grunt.file.read('tmp/production/index.html'),
      grunt.file.read('tmp/production/second.html')
    ];

    var expected = [
      grunt.file.read('test/expected/production/index.html'),
      grunt.file.read('test/expected/production/second.html')
    ];

    test.expect(actual.length);

    for (var i = 0; i < actual.length; i++) {
      test.equal(actual[i], expected[i], 'equal render');
    }

    test.done();
  },
  development: function(test) {

    test.expect(1);

    var actual = grunt.file.read('tmp/development/index.html');
    var expected = grunt.file.read('test/expected/development/index.html');

    test.equal(actual, expected, 'equal render');

    test.done();

  }
};
