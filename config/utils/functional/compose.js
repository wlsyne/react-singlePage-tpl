const compose = (...fns) => {
  return fns.reduce((acc, fn) => {
    return (...args) => acc(fn(...args));
  });
};

module.exports = { compose };
