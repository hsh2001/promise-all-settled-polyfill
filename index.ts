interface PomiseAllSettledResult<T> {
  status: 'fulfilled' | 'rejected';
  value?: T;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  reason?: Error | any;
}

function promiseAllSettled<T>(
  promises: Promise<T>[],
): Promise<PomiseAllSettledResult<T>[]> {
  return Promise.all(
    promises.map((promise) => {
      return Promise.resolve()
        .then(() => promise)
        .then(
          (value): PomiseAllSettledResult<T> => ({
            value,
            status: 'fulfilled',
          }),
        )
        .catch(
          (reason): PomiseAllSettledResult<T> => ({
            reason,
            status: 'rejected',
          }),
        );
    }),
  );
}

declare global {
  interface PromiseConstructor {
    allSettled: typeof promiseAllSettled;
  }
}

Promise.allSettled = promiseAllSettled;

export default promiseAllSettled;
