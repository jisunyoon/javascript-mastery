// Week 2 TS: solution.ts

interface User {
  id: number;
  name: string;
  email: string;
  createAt: Date;
}

interface Post {
  readonly id: number;
  title:string;
  content:string;
  tag?: string[];
  publishedAt?: Date;
}

type Status = "idle" | "loading" | "success" | "error"

type Admin = User & {
  role: string;
  permissions: string[]
}

interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal{
  breed: string;
  bark(): void;
}


type Callback = (data: string) => void;


interface Dictionary {
  [key: string]: string
}
