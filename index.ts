interface PomiseAllSettledResult<T> {
  status: 'fulfilled' | 'rejected';
  value?: T;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  reason?: Error | any;
}

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
