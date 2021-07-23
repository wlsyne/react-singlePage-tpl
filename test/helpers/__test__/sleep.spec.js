import { sleep } from '../sleep';
const { expect } = require('chai');

describe('sleep', () => {
  it('sleep correct time', (done) => {
    const startTime = performance.now();
    sleep(1000).then(() => {
      const endTime = performance.now();
      expect(endTime - startTime).to.be.closeTo(1000, 10);
      done();
    });
  });
});
