const promiseA = new Promise((res, rej) => setTimeout(() => res('A'), 2000));
const promiseB = new Promise((res, rej) => setTimeout(() => res('B'), 4000));

Promise.all([promiseA, promiseB])
  .then(([resolvedPromiseA, resolvedPromiseB]) => {
    console.log('Resolution of Promise A:', resolvedPromiseA);
    console.log('Resolution of Promise B:', resolvedPromiseB);
  });
