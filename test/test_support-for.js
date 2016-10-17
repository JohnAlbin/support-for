'use strict';

var sassyTest = new SassyTest({
  includePaths: [path.join(__dirname, '../sass')],
  // Path to Sass library.
  fixtures: path.join(__dirname, 'fixtures/support-for')
});

describe('@function support-for()', function() {
  describe('$support-for variable', function() {
    it('should, by default, support last 4 versions of all browsers except IE, Edge and Firefox', function() {
      return sassyTest.renderFixture('defaults');
    });

    it('should support last X versions when given a negative version', function() {
      return sassyTest.renderFixture('negative-version');
    });

    it('should not support a browser when version is null', function() {
      return sassyTest.renderFixture('null-version');
    });

    it('should support a browser by using the wildcard \'*\' browser version', function() {
      return sassyTest.renderFixture('wildcard-browser');
    });

    it('should error when version is not a number', function() {
      return sassyTest.renderFixture('error-browser-number').then(function() {
        throw new Error('An error should have occurred');
      }).catch(function(error) {
        expect(error).to.exist;
        expect(error.message).to.equal('$support-for: (safari: 9) must be set to an integer (or null); 9 is a string.');
      });
    });

    it('should error when version is not an integer', function() {
      return sassyTest.renderFixture('error-browser-integer').then(function() {
        throw new Error('An error should have occurred');
      }).catch(function(error) {
        expect(error).to.exist;
        expect(error.message).to.equal('$support-for: (ie: 5.5) must be set to an integer (or null); 5.5 is not an integer.');
      });
    });
  });

  describe('$browser parameter', function() {
    it('should error when not in $support-for-current-browser-version', function() {
      return sassyTest.renderFixture('error-current-browser').then(function() {
        throw new Error('An error should have occurred');
      }).catch(function(error) {
        expect(error).to.exist;
        expect(error.message).to.equal('mosaic not found in $support-for-current-browser-version map; it must be set to an integer.');
      });
    });
  });

  describe('$version parameter', function() {
    it('should error when not an integer', function() {
      return sassyTest.renderFixture('error-version').then(function() {
        throw new Error('An error should have occurred');
      }).catch(function(error) {
        expect(error).to.exist;
        expect(error.message).to.equal('The $version parameter of support-for() must be an integer; string given.');
      });
    });
  });
});
