const curry = (fn, received = []) => {
  const arityLength = fn.length;
  return (...args) => {
    const currentArgs = received.concat(args);
    return currentArgs.length >= arityLength ? fn.apply(this, currentArgs) : curry(fn, currentArgs);
  };
};

module.exports = { curry };
