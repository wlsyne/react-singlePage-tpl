import { sleep } from '@test-helpers/sleep';

describe('sleep', () => {
  it('sleep correct time', async () => {
    const startTime = performance.now();
    await sleep(1000);
    const endTime = performance.now();
    expect(endTime - startTime).toBeLessThan(1010);
  });
});
