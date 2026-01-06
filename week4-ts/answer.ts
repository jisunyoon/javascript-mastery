// Week 4 TS: 유틸리티 타입 정답

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
}

// 01. Partial
type PartialUser = Partial<User>;

// 02. Required
interface Config {
  host?: string;
  port?: number;
}
type RequiredConfig = Required<Config>;

// 03. Pick
type UserBasic = Pick<User, "id" | "name">;

// 04. Omit
type PublicUser = Omit<User, "password">;

// 05. Record
type UserRoles = Record<string, "admin" | "user" | "guest">;

// 06. ReturnType
function getUser() {
  return { id: 1, name: "철수" };
}
type UserResult = ReturnType<typeof getUser>;

// 07. 실전
type ApiResult<T> = 
  | { success: true; data: T }
  | { success: false; error: string };

function handleResult(result: ApiResult<User>) {
  if (result.success) {
    console.log(result.data.name);
  } else {
    console.log(result.error);
  }
}

// 테스트
const partial: PartialUser = { name: "철수" };
const basic: UserBasic = { id: 1, name: "철수" };
const publicUser: PublicUser = { id: 1, name: "철수", email: "a@b.com", createdAt: new Date() };

console.log(partial, basic, publicUser);
