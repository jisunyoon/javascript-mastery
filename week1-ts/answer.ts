/**
 * Week 1 (화): TypeScript 기본 타입 - 정답
 */

// 01. 기본 타입
let userName: string = "철수";
let userAge: number = 25;
let isStudent: boolean = true;
let hobbies: string[] = ["독서", "운동", "영화"];
let score: number | null = null;


// 02. 객체 타입
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


// 03. 함수 타입
function add(a: number, b: number): number {
  return a + b;
}

function greet(name: string): void {
  console.log(`안녕하세요, ${name}님!`);
}

const multiply = (a: number, b: number): number => a * b;


// 04. 배열과 튜플
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["철수", "영희", "민수"];
let mixed: (number | string | boolean)[] = [1, "hello", true];
let point: [number, number] = [10, 20];


// 05. 선택적 & 읽기전용
type Product = {
  readonly id: number;
  name: string;
  price: number;
  description?: string;
};

const product: Product = {
  id: 1,
  name: "아이폰",
  price: 1000000
};


// 06. Union
type Status = "loading" | "success" | "error";
let status: Status = "loading";

type ID = string | number;
let id: ID = 123;


// 07. 타입 가드
function process(value: unknown): string | number | undefined {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  if (typeof value === "number") {
    return value * 2;
  }
  return undefined;
}


// 테스트
console.log("01. userName:", userName);
console.log("02. user:", user);
console.log("03. add:", add(1, 2));
console.log("04. numbers:", numbers);
console.log("05. product:", product);
console.log("06. status:", status);
console.log("07. process('hello'):", process("hello"));
console.log("07. process(10):", process(10));
