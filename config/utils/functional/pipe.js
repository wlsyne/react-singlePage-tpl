const pipe = (...fns) => {
  return fns.reduce((acc, fn) => {
    return (...args) => fn(acc(...args));
  });
};

module.exports = { pipe };
