/* global describe it beforeEach browser element by */
const chai = require('chai');
chai.use(require('chai-as-promised'));
const assert = chai.assert;

describe('Protractor Demo App', () => {
    beforeEach(() => {
        browser.get('http://localhost:8080');
    });

    it('default to home', () => {
        // Find by model.
        const wrapper = element.all(by.css('.home'));
        return assert.eventually.equal(wrapper.count(), 1);
    });

    it('navigate to dashboard', () => {
        // Find by model.
        const dashboardEl = element.all(by.partialLinkText('dashboard'));
        dashboardEl.click();
        const wrapper = element.all(by.css('.dashboard'));
        return assert.eventually.equal(wrapper.count(), 1);
    });

    it('navigate to profile', () => {
        // Find by model.
        const dashboardEl = element.all(by.partialLinkText('profile'));
        dashboardEl.click();
        const wrapper = element.all(by.css('.profile'));
        return assert.eventually.equal(wrapper.count(), 1);
    });
});
