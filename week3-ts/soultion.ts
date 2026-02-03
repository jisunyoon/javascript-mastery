// 받은 값 그대로 반환
function identity<T>(value: T): T {
  return value;
}

// 사용
identity<number>(123);  // 123
identity<string>('hi'); // 'hi'

// 배열 첫 번째 요소 반환
function getFirst<T>(arr: T[]): T | undefined {
  return arr[0];
}

// 사용
getFirst([1, 2, 3]);     // 1
getFirst(['a', 'b']);    // 'a'
getFirst([]);            // undefined

// 두 객체 합치기
function merge<T, U>(obj1: T, obj2: U): T & U {
  return {...obj1, ...obj2}
}

// 사용
merge({ name: '철수' }, { age: 20 });
// { name: '철수', age: 20 }

// null 가능한 타입
type Nullable<T> = T | null;

// 사용
type MaybeString = Nullable<string>;  // string | null
type MaybeNumber = Nullable<number>;  // number | null

// API 응답 타입
// 성공: { success: true, data: T }
// 실패: { success: false, error: string }
type ApiResponse<T> = { success: true, data: T } | { success: false, error: string }

// 사용
type UserResponse = ApiResponse<User>;

// 스택 구현 (LIFO: 나중에 넣은 게 먼저 나옴)
class Stack<T> {
  private items = T[] = [];

  push(item:T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop()
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }
  
  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

// 사용
const stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.pop();   // 2
stack.peek();  // 1

