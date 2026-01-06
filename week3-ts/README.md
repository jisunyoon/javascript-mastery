# Week 3 (화): TypeScript 제네릭 📘

---

## 01. 제네릭 함수

```typescript
// 문제: 배열의 첫 번째 요소 반환
function first<T>(arr: T[]): T | undefined {
  // 작성
}

first([1, 2, 3]);     // number | undefined
first(["a", "b"]);    // string | undefined
```

<details>
<summary>✅ 정답</summary>

```typescript
function first<T>(arr: T[]): T | undefined {
  return arr[0];
}
```
</details>

---

## 02. 제네릭 인터페이스

```typescript
// 문제: API 응답 타입
interface ApiResponse<T> {
  // data: T
  // status: number
  // message: string
}

const userResponse: ApiResponse<User> = // ...
```

<details>
<summary>✅ 정답</summary>

```typescript
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}
```
</details>

---

## 03. 여러 제네릭

```typescript
// 문제: 키-값 쌍 타입
interface Pair<K, V> {
  // 작성
}

const pair: Pair<string, number> = { key: "age", value: 25 };
```

<details>
<summary>✅ 정답</summary>

```typescript
interface Pair<K, V> {
  key: K;
  value: V;
}
```
</details>

---

## 04. 제네릭 제약

```typescript
// 문제: length 속성이 있는 것만 받기
function getLength<T extends { length: number }>(arg: T): number {
  // 작성
}

getLength("hello");   // 5
getLength([1, 2, 3]); // 3
// getLength(123);    // 에러!
```

<details>
<summary>✅ 정답</summary>

```typescript
function getLength<T extends { length: number }>(arg: T): number {
  return arg.length;
}
```
</details>

---

## 05. keyof 사용

```typescript
// 문제: 객체의 특정 키 값 가져오기
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  // 작성
}

const user = { name: "철수", age: 25 };
getProperty(user, "name"); // string
getProperty(user, "age");  // number
```

<details>
<summary>✅ 정답</summary>

```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
```
</details>

---

## 06. 기본값 있는 제네릭

```typescript
// 문제: 기본값이 string인 제네릭
interface Container<T = string> {
  value: T;
}

const strContainer: Container = { value: "hello" };
const numContainer: Container<number> = { value: 123 };
```

<details>
<summary>✅ 정답</summary>

```typescript
interface Container<T = string> {
  value: T;
}
```
</details>

---

## 07. 조건부 타입

```typescript
// 문제: T가 string이면 string[], 아니면 T
type ToArray<T> = T extends string ? string[] : T;

type A = ToArray<string>;  // string[]
type B = ToArray<number>;  // number
```

<details>
<summary>✅ 정답</summary>

```typescript
type ToArray<T> = T extends string ? string[] : T;
```
</details>
