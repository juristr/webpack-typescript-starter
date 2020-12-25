const webpackConfig = require('./webpack-test.config.js');

module.exports = function (config) {
    config.set({
        singleRun: true,

        browsers: [
            'ChromeHeadless'
        ],

        frameworks: [
            'jasmine',
            'webpack'
        ],

        files: [
            'spec.bundle.js'
        ],

        preprocessors: {
            'spec.bundle.js': ['webpack']
        },

        webpack: webpackConfig,

        webpackMiddleware: {
            stats: 'errors-only'
        },

        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-webpack')
        ]
    });
};