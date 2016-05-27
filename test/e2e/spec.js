var chai = require( 'chai' );
chai.use( require( 'chai-as-promised' ) );
var assert = chai.assert;

describe('Protractor Demo App', function() {
    it('should have a title', function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
        return Promise.all([
            assert.eventually.equal(browser.getTitle(), 'Super Calculator')
        ]);
    });
});