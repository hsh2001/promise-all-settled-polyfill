import promiseAllSettled from '../index';

describe('Test Promise.allSettled', () => {
  it('should define method correctly', () => {
    expect(promiseAllSettled === Promise.allSettled).toBeTruthy();
  });

  it('should solve Promise list correvtly', async () => {
    const result = await promiseAllSettled([
      Promise.resolve(1),
      Promise.reject(2),
    ]);

    expect(result).toStrictEqual([
      { value: 1, status: 'fulfilled' },
      { reason: 2, status: 'rejected' },
    ]);
  });
});
