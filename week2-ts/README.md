# Week 2 (화): TypeScript 인터페이스 & 타입 📘

---

## 01. 인터페이스 정의

```typescript
// 문제: User 인터페이스 만들기
// - id: 숫자
// - name: 문자열
// - email: 문자열
// - createdAt: Date

interface User {
  // 작성
}
```

<details>
<summary>✅ 정답</summary>

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
}
```
</details>

---

## 02. 선택적 속성 & readonly

```typescript
// 문제: Post 인터페이스
// - id: 숫자, 읽기전용
// - title: 문자열
// - content: 문자열
// - tags: 문자열 배열, 선택적
// - publishedAt: Date, 선택적

interface Post {
  // 작성
}
```

<details>
<summary>✅ 정답</summary>

```typescript
interface Post {
  readonly id: number;
  title: string;
  content: string;
  tags?: string[];
  publishedAt?: Date;
}
```
</details>

---

## 03. Union 타입

```typescript
// 문제: 상태 타입 만들기
type Status = // "idle" | "loading" | "success" | "error"

// 문제: 결과 타입 만들기
type Result = // 성공: { ok: true, data: T } 또는 실패: { ok: false, error: string }
```

<details>
<summary>✅ 정답</summary>

```typescript
type Status = "idle" | "loading" | "success" | "error";

type Result<T> = 
  | { ok: true; data: T }
  | { ok: false; error: string };
```
</details>

---

## 04. Intersection 타입

```typescript
// 문제: Admin = User + { role: string, permissions: string[] }
interface User {
  id: number;
  name: string;
}

type Admin = // 작성
```

<details>
<summary>✅ 정답</summary>

```typescript
type Admin = User & {
  role: string;
  permissions: string[];
};
```
</details>

---

## 05. 인터페이스 확장

```typescript
// 문제: Animal을 확장한 Dog 인터페이스
interface Animal {
  name: string;
  age: number;
}

interface Dog /* 작성 */ {
  breed: string;
  bark(): void;
}
```

<details>
<summary>✅ 정답</summary>

```typescript
interface Dog extends Animal {
  breed: string;
  bark(): void;
}
```
</details>

---

## 06. 함수 타입

```typescript
// 문제: 콜백 타입 정의
type Callback = // (data: string) => void
type AsyncCallback = // (data: string) => Promise<void>
type Comparator<T> = // (a: T, b: T) => number
```

<details>
<summary>✅ 정답</summary>

```typescript
type Callback = (data: string) => void;
type AsyncCallback = (data: string) => Promise<void>;
type Comparator<T> = (a: T, b: T) => number;
```
</details>

---

## 07. 인덱스 시그니처

```typescript
// 문제: 어떤 키든 받을 수 있는 객체
interface Dictionary {
  // 작성
}

const dict: Dictionary = {
  hello: "안녕",
  world: "세계"
};
```

<details>
<summary>✅ 정답</summary>

```typescript
interface Dictionary {
  [key: string]: string;
}
```
</details>
