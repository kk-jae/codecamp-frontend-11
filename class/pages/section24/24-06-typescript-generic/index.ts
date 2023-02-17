import { useState } from "react";
// 1. 문자/숫자/불린(primitive) 타입
export const getPrimitive = (arg1: string, arg2: number, arg3: boolean): [boolean, number, string] => {
  return [arg3, arg2, arg1];
};

const result = getPrimitive("철수", 123, true); // 문자, 숫자, 불린 순서가 아니면 에러 발생

//
//

// 2. any 타입 => 그냥 자바스크립트랑 같음
export const getAny = (arg1: any, arg2: any, arg3: any): [any, any, any] => {
  console.log(arg1 * 1000); // arg1에 문자나 불린이 들어가면 에러인데 표시되지 않음
  return [arg3, arg2, arg1];
};

const result = getAny(123, false, "철수"); // 무엇을 넣든 상관 없으나 권장하지 않음 (예측되지 않음)

//
//

// 3.unknown 타입
export const getUnknown = (arg1: unknown, arg2: unknown, arg3: unknown): [unknown, unknown, unknown] => {
  if (typeof arg1 === "number") console.log(arg1 * 1000); // arg1이 number가 아니라고 미리 알려줌
  return [arg3, arg2, arg1];
};

const result = getUnknown(false, 123, "철수");

//
//

// 4.generic 타입                < 사용할 타입 >
export function getGeneric<MyType1, MyType2, MyType3>(arg1: MyType1, arg2: MyType2, arg3: MyType3): [MyType3, MyType2, MyType1] {
  return [arg3, arg2, arg1];
}
//         <myType1,myType2는 무조건 string, myType3은 무조건 number > // 작성하지 않아도 되지만 작성하면 미리 명시할 수 있습니다.
const result = getGeneric<string, string, number>("철수", 123, true); // result 에 커서를 올리면 입력한 값의 타입이 추론됩니다.
// (any 처럼 뭐든 다 되지만 타입을 알려주어 안전하게 사용 가능합니다)

// const [count, setCount] = useState<number>(0);

//
//

// 4.generic2 타입
export function getGeneric2<T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): [T3, T2, T1] {
  return [arg3, arg2, arg1];
}

const result = getGeneric2<string, string, number>("철수", 123, true); // result 에 커서를 올리면 입력한 값의 타입이 추론됩니다.

//
//

// 4.generic3 타입
export function getGeneric3<T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] {
  return [arg3, arg2, arg1];
}

const result = getGeneric3("철수", 123, true); // result 에 커서를 올리면 입력한 값의 타입이 추론됩니다.
//
//

// 4.generic4 화살표
const getGeneric4 = <T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] => {
  return [arg3, arg2, arg1];
};

const result = getGeneric4("철수", 123, true); // result 에 커서를 올리면 입력한 값의 타입이 추론됩니다.
