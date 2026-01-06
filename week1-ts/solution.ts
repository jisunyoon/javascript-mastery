/**
 * Week 1 (화): TypeScript 기본 타입
 * 실행: npx ts-node solution.ts
 */

// ========================================
// 01. 기본 타입 붙이기
// ========================================
// 아래 변수들에 타입을 붙이세요

let userName = "철수";
let userAge = 25;
let isStudent = true;
let hobbies = ["독서", "운동", "영화"];
let score = null;


// ========================================
// 02. 객체 타입 정의
// ========================================
// User 타입을 정의하고 user에 적용하세요

const user = {
  id: 1,
  name: "철수",
  email: "chulsoo@email.com",
  age: 25
};


// ========================================
// 03. 함수 타입 정의
// ========================================
// 함수들에 타입을 붙이세요

function add(a, b) {
  return a + b;
}

function greet(name) {
  console.log(`안녕하세요, ${name}님!`);
}

const multiply = (a, b) => a * b;


// ========================================
// 04. 배열과 튜플
// ========================================
// 타입을 붙이세요

let numbers = [1, 2, 3, 4, 5];
let names = ["철수", "영희", "민수"];
let mixed = [1, "hello", true];
let point = [10, 20];  // x, y 좌표


// ========================================
// 05. 선택적 속성 & 읽기 전용
// ========================================
// Product 타입을 정의하세요
// - id: 숫자, 읽기 전용
// - name: 문자열
// - price: 숫자
// - description: 문자열, 선택적

type Product = {
  // 여기에 작성
};


// ========================================
// 06. Union 타입
// ========================================
// status는 "loading" | "success" | "error" 중 하나
// id는 string 또는 number

let status = "loading";
let id = 123;


// ========================================
// 07. 타입 가드
// ========================================
// value가 string이면 대문자로, number면 2배로

function process(value: unknown) {
  // 여기에 코드 작성
}


// ========================================
// 테스트
// ========================================
console.log("01. userName:", userName);
console.log("02. user:", user);
console.log("03. add:", add(1, 2));
console.log("04. numbers:", numbers);
console.log("07. process('hello'):", process("hello"));
console.log("07. process(10):", process(10));
