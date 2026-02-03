// 01. Readonly 만들기

type MyReadonly<T> = {readonly [K in keyof T]: T[K]}

// 사용
// type ReadonlyUser = MyReadonly<{ name: string; age: number }>;
// { readonly name: string; readonly age: number }


// 02. Partial 만들기

type MyPartial<T> = {[K in keyof T]?: T[K]}

// 사용
// type PartialUser = MyPartial<{ name: string; age: number }>;
// { name?: string; age?: number }


// 03. Required 만들기

type MyRequired<T> = {[K in keyof T]-?: T[K]}


// 사용
// type RequiredUser = MyRequired<{ name?: string; age?: number }>;
// { name: string; age: number }


// 04. Pick 만들기

type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
}

// 사용
// type NameOnly = MyPick<{ name: string; age: number }, 'name'>;
// { name: string }


// 05. Omit 만들기

type MyOmit<T, K extends keyof T> = {
    [P in Exclude<keyof T, K>]: T[P]
}

// 사용
// type WithoutAge = MyOmit<{ name: string; age: number }, 'age'>;
// { name: string }


// 정리
// 문법                  의미
// keyof T              T의 키 목록
// extends keyof T      T의 키 범위 안에서
// in                   하나씩 순회
// in keyof T           T의 키를 하나씩

// 추가 문제 
type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  age: number;
};

// 01. 로그인 폼 (email, password만!)
type LoginForm = Pick<User, "email" | "password">

// 02. 수정 API (전부 선택적!)
type UpdateUser = Partial<User>

// 03. 생성 API (id 빼고!)
type CreateUser = Omit<User, "id">

// 04. 읽기 전용
type ReadonlyUser = Readonly<User>

// 05. 프로필 수정 (name, age만 + 선택적)
type EditProfile = Partial<Pick<User, "name" | "age">>