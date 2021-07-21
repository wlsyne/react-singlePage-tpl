const { root } = require('./utils/utils');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.scss'],
    alias: {
      '@app': root('app'),
      '@test-helpers': root('test/helpers'),
    },
  },
};
