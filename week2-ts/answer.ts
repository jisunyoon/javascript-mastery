// Week 2 TS: 정답

// 01
interface User {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
}

// 02
interface Post {
  readonly id: number;
  title: string;
  content: string;
  tags?: string[];
  publishedAt?: Date;
}

// 03
type Status = "idle" | "loading" | "success" | "error";

type Result<T> = 
  | { ok: true; data: T }
  | { ok: false; error: string };

// 04
type Admin = User & {
  role: string;
  permissions: string[];
};

// 05
interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  breed: string;
  bark(): void;
}

// 06
type Callback = (data: string) => void;
type AsyncCallback = (data: string) => Promise<void>;
type Comparator<T> = (a: T, b: T) => number;

// 07
interface Dictionary {
  [key: string]: string;
}

// 테스트
const user: User = { id: 1, name: "철수", email: "a@b.com", createdAt: new Date() };
const status: Status = "loading";
const admin: Admin = { id: 1, name: "관리자", email: "admin@b.com", createdAt: new Date(), role: "admin", permissions: ["read", "write"] };

console.log(user, status, admin);
