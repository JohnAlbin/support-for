'use strict';

describe('$support-for', function() {
  before(function(done) {
    sassyTest.configurePaths({
      // Path to Sass library.
      fixtures: path.join(__dirname, 'fixtures')
    });
    done();
  });

  describe('default values', function() {
    it('should support last 4 versions of all browsers except IE 8', function(done) {
      sassyTest.renderFixture('defaults', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });
  });

  describe('negative values', function() {
    it('should support last X versions when given a negative version', function(done) {
      sassyTest.renderFixture('negative-values', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });
  });
});
