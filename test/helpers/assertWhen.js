const assertWhen = (assert, done, time = 1000) => {
  const start = Date.now();

  const timer = setInterval(() => {
    try {
      assert();
      clearInterval(timer);
      done();
    } catch (e) {
      if (Date.now() - start >= time) {
        clearInterval(timer);
        done(e);
      }
    }
  }, 20);
};

module.exports = { assertWhen };
