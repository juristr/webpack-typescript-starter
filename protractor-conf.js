'use-strict';

exports.config = {
    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': [
                '--window-size=1200,650'
            ]
        }
    },
    onPrepare: function () {
        var SpecReporter = require('jasmine-spec-reporter');
        jasmine.getEnv().addReporter(new SpecReporter({ displayStacktrace: true }));
    },
    specs: ['./e2e/**/*e2e-spec.ts']
};
