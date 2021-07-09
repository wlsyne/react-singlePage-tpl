const { join, resolve } = require("path");
const _root = resolve(__dirname, "../..");

const root = function (...args) {
  return join(...[_root].concat(args));
};

module.exports = { root };
