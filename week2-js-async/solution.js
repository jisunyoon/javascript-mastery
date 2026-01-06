/**
 * Week 2 (월): JS 비동기 - solution.js
 */

const fetchSequentially = async (urls) => {
  // 여기에 코드 작성
};

const fetchParallel = async (urls) => {
  // 여기에 코드 작성
};

const fetchWithRetry = async (url, retries = 3) => {
  // 여기에 코드 작성
};

const fetchWithTimeout = (url, timeout = 5000) => {
  // 여기에 코드 작성
};

const promiseAll = (promises) => {
  // 여기에 코드 작성
};

const asyncMap = async (arr, asyncFn) => {
  // 여기에 코드 작성
};

const sleep = (ms) => {
  // 여기에 코드 작성
};

// 테스트
const test = async () => {
  console.log('sleep 테스트...');
  await sleep(1000);
  console.log('1초 후!');
  
  console.log('promiseAll 테스트:', await promiseAll([
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
  ]));
};

test();
