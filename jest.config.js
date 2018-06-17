module.exports = {
  moduleFileExtensions: [
    'js',
    'vue'
  ],

  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
  },

  transform: {
    // process js with babel-jest
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    // process *.vue files with vue-jest
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
  },

  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
}
