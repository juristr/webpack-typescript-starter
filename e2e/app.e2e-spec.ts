'use strict';

describe('Demo', function () {
    beforeAll(function () {
        browser.ignoreSynchronization = true;
        browser.get('http://localhost:9000');
    });

    describe('Select Dashboard', function () {
        it('should go to /', function () {
            expect(element(by.css('h1')).getText()).toEqual('Test');
        });
    });
});
