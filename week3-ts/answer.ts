// Week 3 TS: 제네릭 정답

// 01
function first<T>(arr: T[]): T | undefined {
  return arr[0];
}

// 02
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

// 03
interface Pair<K, V> {
  key: K;
  value: V;
}

// 04
function getLength<T extends { length: number }>(arg: T): number {
  return arg.length;
}

// 05
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// 06
interface Container<T = string> {
  value: T;
}

// 07
type ToArray<T> = T extends string ? string[] : T;

// 테스트
console.log(first([1, 2, 3]));
console.log(getLength("hello"));

const user = { name: "철수", age: 25 };
console.log(getProperty(user, "name"));
