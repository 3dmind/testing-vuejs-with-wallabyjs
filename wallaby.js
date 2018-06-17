module.exports = function (wallaby) {
  return {
    files: [
      'package.json',
      'jest.config.js',
      'src/**/*',
      '!src/**/__tests__/*.js',
    ],

    tests: [
      'src/**/__tests__/*.js',
    ],

    env: {
      type: 'node',
      runner: 'node'
    },

    compilers: {
      '**/*.js': wallaby.compilers.babel(),
      '**/*.vue': require('wallaby-vue-compiler')(wallaby.compilers.babel({}))
    },

    preprocessors: {
      '**/*.vue': file => require('vue-jest').process(file.content, file.path)
    },

    setup: function (wallaby) {
      const jestConfig = require('./package').jest || require('./jest.config')
      jestConfig.transform = {}
      wallaby.testFramework.configure(jestConfig)
    },

    testFramework: 'jest',

    debug: true,
  }
}
