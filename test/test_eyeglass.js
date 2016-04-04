'use strict';

var Eyeglass = require('eyeglass').Eyeglass;
var sass = require('node-sass');

var sassyTest = new SassyTest({
  fixtures: path.join(__dirname, 'fixtures/eyeglass')
});
var options = {
  // Eyeglass will look in the root for a package.json.
  root: sassyTest.fixture()
};
var eyeglass = new Eyeglass(options, sass);


describe('Eyeglass integration tests', function() {
  it('should fail to import support-for without Eyeglass', function() {
    return sassyTest.renderFixture('import-support-for').then(function() {
      throw new Error('An error should have occurred');
    }).catch(function(error) {
      expect(error).to.exist;
      expect(error.message).to.include('File to import not found or unreadable: support-for');
    });
  });

  it('should import support-for with Eyeglass', function() {
    return sassyTest.renderFixture('import-support-for', eyeglass.sassOptions());
  });
});
