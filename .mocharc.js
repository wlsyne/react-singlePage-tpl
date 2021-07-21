module.exports = {
  require: ['@babel/register', 'ignore-styles', 'source-map-support/register', 'browser-env/register'],
  exclude: 'node_modules/**',
  recursive: true,
};
