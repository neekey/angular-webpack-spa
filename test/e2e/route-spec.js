var chai = require( 'chai' );
chai.use( require( 'chai-as-promised' ) );
var assert = chai.assert;

describe('Protractor Demo App', function() {

    beforeEach(function(){
        browser.get( 'http://localhost:8080' );
    });

    it( 'default to home', function(){
        // Find by model.
        var wrapper = element.all( by.css('.home') );
        return assert.eventually.equal( wrapper.count(), 1);
    });

    it( 'navigate to dashboard', function(){
        // Find by model.
        var dashboardEl = element.all( by.partialLinkText('dashboard' ) );
        dashboardEl.click();
        var wrapper = element.all( by.css('.dashboard') );
        return assert.eventually.equal( wrapper.count(), 1);
    });

    it( 'navigate to profile', function(){
        // Find by model.
        var dashboardEl = element.all( by.partialLinkText('profile' ) );
        dashboardEl.click();
        var wrapper = element.all( by.css('.profile') );
        return assert.eventually.equal( wrapper.count(), 1);
    });
});