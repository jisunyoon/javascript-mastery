/**
 * Week 2 (월): JS 비동기 - solution.js
 */

const fetchSequentially = async (urls) => {
  const result = [];
  for (let url of urls){
    const res = await fetch(url);
    const data = res.json();
    result.push(data);
  }
  return result;
};

const fetchParallel = async (urls) => {
  return Promise.all(urls.map(url => fetch(url).then(res => res.json())))
};

const fetchWithRetry = async (url, retries = 3) => {
  for (let i = 0; i < retries; i++){
    try{
      const res = await fetch(url);
      const data = await res.json();
      return data;
    }catch{
      console.error('실패 했습니다. 다시 시도해주세요')
    }
  }
  throw new Error ('모두 다 실패했습니다. ')
};

const fetchWithTimeout = (url, timeout = 5000) => {
  return Promise.race([
    fetch(url).then(res => res.json()),
    new Promise((_, reject) => {
      setTimeout(() => {
       reject('timeout!') 
      }, timeout)
    })
  ])
};

const promiseAll = (promises) => {
  return new Promise((resolve, reject) => {
    const result = [];
    let completedCount = 0;
    promises.forEach((promise, index) => {
      Promise.then(value => {
        result[index] = value;
        completedCount++

        if(completedCount === promise.length){
          resolve(result);
        }
      })
    })
  })
  

};

const asyncMap = async (arr, asyncFn) => {
  return Promise.all(arr.map(item => asyncFn(item)))
};

const sleep = (ms) => {
  return new Promise(
    resolve => {
      setTimeout(() => {
        resolve();
      }, ms)
    }
  )
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
