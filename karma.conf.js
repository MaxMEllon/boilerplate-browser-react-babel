const path = require('path');

const init = {
  plugins: [
    'karma-chrome-launcher',
    'karma-mocha',

    'karma-browserify',
    'karma-sourcemap-loader',

    'karma-mocha-reporter',
    'karma-coverage',
  ],

  browsers: ['Chrome'],
  frameworks: ['browserify', 'mocha'],
  client: {
    mocha: {
      timeout: 5000,
    },
  },
  files: [
    'test/index.js',

    // serve static files to '/base/'
    // { pattern: './test/fixtures/**', included: false },
  ],

  preprocessors: {
    'test/**/*.js': ['browserify', 'sourcemap'],
  },
  browserify: {
    debug: true,
    transform: [
      'babelify',
    ],
  },
  webpackMiddleware: {
    quiet: true,
    noInfo: true,
  },

  reporters: ['mocha'],
};

module.exports = function configure(config) {
  config.set(init);

  if (config.singleRun) {
    config.reporters.push('coverage');
    config.set({
      coverageReporter: {
        reporters: [
          {
            type: 'lcov',
            dir: 'coverage',
            subdir: '.',
          },
          {
            type: 'text',
          },
        ],
      },
    });
    config.browserify.transform.unshift([
      'browserify-istanbul', {
        instrumenter: require('isparta'),
      },
    ]);
  }
};
