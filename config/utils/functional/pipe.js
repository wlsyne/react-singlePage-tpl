const pipe = (...fns) => {
  if (fns.length === 0) {
    throw new Error('pipe requires at least one argument');
  }
  return fns.reduce((acc, fn) => {
    return function (...args) {
      return fn.call(this, acc.apply(this, args));
    };
  });
};

module.exports = { pipe };
