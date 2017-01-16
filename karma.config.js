
module.exports = function(config) {
  config.set({
    singleRun: true,
    
    browsers: [
      'PhantomJS'
    ],

    frameworks: [
      'jasmine'
    ],

    files: [
      'spec.bundle.js'
    ],

    // coverage reporter generates the coverage
    reporters: ['progress', 'coverage'],

    preprocessors: {
      'spec.bundle.js': ['coverage', 'webpack']
    },

    webpack: require('./webpack-test.config'),

    webpackMiddleware: {
      stats: 'errors-only'
    },

    coverageReporter: {
      type: 'json',
      subdir: '.',
      dir: 'coverage/'
    },

    plugins: [
      require('karma-jasmine'),
      require('karma-coverage'),
      require('karma-phantomjs-launcher'),
      require('karma-webpack')
    ]
  });
};