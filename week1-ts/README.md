# Week 1 (화): TypeScript 기본 타입 📘

**실행 방법**: `npx ts-node solution.ts`

---

## 01. 기본 타입 붙이기

아래 변수들에 타입을 붙여보세요:

```typescript
// 문제
let userName = "철수";
let userAge = 25;
let isStudent = true;
let hobbies = ["독서", "운동", "영화"];
let score = null;
```

<details>
<summary>✅ 정답</summary>

```typescript
let userName: string = "철수";
let userAge: number = 25;
let isStudent: boolean = true;
let hobbies: string[] = ["독서", "운동", "영화"];
let score: number | null = null;
```
</details>

---

## 02. 객체 타입 정의

User 객체의 타입을 정의하세요:

```typescript
// 문제: user 객체에 타입을 붙이세요
const user = {
  id: 1,
  name: "철수",
  email: "chulsoo@email.com",
  age: 25
};
```

<details>
<summary>✅ 정답</summary>

```typescript
// 방법 1: 인라인
const user: { id: number; name: string; email: string; age: number } = {
  id: 1,
  name: "철수",
  email: "chulsoo@email.com",
  age: 25
};

// 방법 2: 타입 별칭 (권장)
type User = {
  id: number;
  name: string;
  email: string;
  age: number;
};

const user: User = {
  id: 1,
  name: "철수",
  email: "chulsoo@email.com",
  age: 25
};
```
</details>

---

## 03. 함수 타입 정의

함수에 타입을 붙이세요:

```typescript
// 문제: 타입을 붙이세요
function add(a, b) {
  return a + b;
}

function greet(name) {
  console.log(`안녕하세요, ${name}님!`);
}

const multiply = (a, b) => a * b;
```

<details>
<summary>✅ 정답</summary>

```typescript
function add(a: number, b: number): number {
  return a + b;
}

function greet(name: string): void {
  console.log(`안녕하세요, ${name}님!`);
}

const multiply = (a: number, b: number): number => a * b;
```
</details>

---

## 04. 배열과 튜플

배열과 튜플에 타입을 붙이세요:

```typescript
// 문제
let numbers = [1, 2, 3, 4, 5];
let names = ["철수", "영희", "민수"];
let mixed = [1, "hello", true];
let point = [10, 20];  // x, y 좌표 (항상 2개)
```

<details>
<summary>✅ 정답</summary>

```typescript
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["철수", "영희", "민수"];
let mixed: (number | string | boolean)[] = [1, "hello", true];
let point: [number, number] = [10, 20];  // 튜플
```
</details>

---

## 05. 선택적 속성 & 읽기 전용

Product 타입을 만드세요:
- id: 숫자, 읽기 전용
- name: 문자열
- price: 숫자
- description: 문자열, 선택적

```typescript
// 문제: Product 타입을 정의하세요
type Product = {
  // 여기에 작성
};

const product: Product = {
  id: 1,
  name: "아이폰",
  price: 1000000
};
```

<details>
<summary>✅ 정답</summary>

```typescript
type Product = {
  readonly id: number;
  name: string;
  price: number;
  description?: string;  // 선택적
};

const product: Product = {
  id: 1,
  name: "아이폰",
  price: 1000000
  // description 없어도 OK
};

// product.id = 2;  // 에러! readonly
```
</details>

---

## 06. Union 타입

상태값에 타입을 붙이세요:

```typescript
// 문제: status는 "loading", "success", "error" 중 하나만 가능
let status = "loading";

// 문제: id는 문자열 또는 숫자
let id = 123;
```

<details>
<summary>✅ 정답</summary>

```typescript
type Status = "loading" | "success" | "error";
let status: Status = "loading";

type ID = string | number;
let id: ID = 123;
id = "abc";  // 이것도 OK
```
</details>

---

## 07. 타입 가드

unknown 타입을 안전하게 사용하세요:

```typescript
// 문제: value가 string이면 대문자로, number면 2배로
function process(value: unknown) {
  // 여기에 코드 작성
}

console.log(process("hello"));  // "HELLO"
console.log(process(10));       // 20
```

<details>
<summary>✅ 정답</summary>

```typescript
function process(value: unknown): string | number | undefined {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  if (typeof value === "number") {
    return value * 2;
  }
  return undefined;
}
```
</details>

---

## 💡 핵심 정리

```typescript
// 기본 타입
let str: string = "hello";
let num: number = 123;
let bool: boolean = true;

// 배열
let arr: number[] = [1, 2, 3];
let arr2: Array<string> = ["a", "b"];

// 튜플 (고정 길이)
let tuple: [string, number] = ["hello", 123];

// 객체
type User = { name: string; age: number };

// 함수
function fn(a: number, b: number): number { return a + b; }

// Union
type ID = string | number;

// 선택적 & 읽기전용
type Product = {
  readonly id: number;
  name: string;
  description?: string;
};
```
