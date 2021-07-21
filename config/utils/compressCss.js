const { readFileSync } = require('fs');
const { pipe } = require('./functional');

const removeComment = (str) => {
  return str.replace(/\/\*[\s\S]*?\*\//g, '');
};

const removeSpace = (str) => {
  return str.replace(/\s/g, '');
};

const compressCss = (path) => {
  const css = readFileSync(path) + '';
  return pipe(removeComment, removeSpace)(css);
};

module.exports = { compressCss };
