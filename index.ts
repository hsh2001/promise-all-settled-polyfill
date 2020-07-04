function promiseAllSettled(promises: Promise<any>[]): Promise<any> {
  return Promise.reject('This is for test.');
}

Promise.allSettled = promiseAllSettled;

export default promiseAllSettled;
