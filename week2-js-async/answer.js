/**
 * Week 2 (월): JS 비동기 - 정답
 */

const fetchSequentially = async (urls) => {
  const results = [];
  for (const url of urls) {
    const res = await fetch(url);
    results.push(await res.json());
  }
  return results;
};

const fetchParallel = async (urls) => {
  return Promise.all(urls.map(url => fetch(url).then(r => r.json())));
};

const fetchWithRetry = async (url, retries = 3) => {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url);
      return await res.json();
    } catch (e) {
      if (i === retries - 1) throw e;
    }
  }
};

const fetchWithTimeout = (url, timeout = 5000) => {
  return Promise.race([
    fetch(url).then(r => r.json()),
    new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Timeout')), timeout)
    )
  ]);
};

const promiseAll = (promises) => {
  return new Promise((resolve, reject) => {
    const results = [];
    let completed = 0;
    if (promises.length === 0) return resolve([]);
    promises.forEach((p, i) => {
      Promise.resolve(p)
        .then(r => {
          results[i] = r;
          if (++completed === promises.length) resolve(results);
        })
        .catch(reject);
    });
  });
};

const asyncMap = (arr, asyncFn) => Promise.all(arr.map(asyncFn));

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// 테스트
const test = async () => {
  console.log('sleep 테스트...');
  await sleep(1000);
  console.log('1초 후!');
  
  console.log('promiseAll:', await promiseAll([
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
  ]));
};

test();
