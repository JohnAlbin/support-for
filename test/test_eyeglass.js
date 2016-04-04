'use strict';

var eyeglass = require('eyeglass');
var sassyTest = new SassyTest({
  fixtures: path.join(__dirname, 'fixtures/eyeglass')
});
var nodeSassOptions = {
  eyeglass: {
    // Eyeglass will look in the root for a package.json.
    root: sassyTest.fixture()
  }
};

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
    return sassyTest.renderFixture('import-support-for', eyeglass(nodeSassOptions));
  });
});
