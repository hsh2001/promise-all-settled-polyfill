import promiseAllSettled from '../index';

describe('Test Promise.allSettled', () => {
  it('should solve Promise list correvtly', async () => {
    const result = await promiseAllSettled([
      Promise.resolve(1),
      Promise.reject(1),
    ]);

    expect(result).toHaveLength(2);
  });
});
