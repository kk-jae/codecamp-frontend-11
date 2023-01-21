export interface IProfile {
  name: string;
  age: number;
  school: string;
  hobby?: string; //있어도되고 없어도되는 => ? 추가
}

// 1. Partial 타입 : IProfile 요소의 타입에 모두 ?를 추가해주는 타입 aaa 를 만들어줍니다 (모두 필수요건이 아니게 변경해줌)
type aaa = Partial<IProfile>;

// 2. Required 타입 : IProfile 요소의 타입에 모두 ?를 삭제해주는 타입 bbb를 만들어줍니다. (모두 필수요건으로 변경해줌)
type bbb = Required<IProfile>;

// 3. Pick 타입 : IProfile 요소에서 가져오고싶은 요소만 가져옵니다.
type ccc = Pick<IProfile, "name" | "age">;

// 4. Omit 타입 : IProfile 요소에서 제외하고싶은 요소만 제외합니다.
type ddd = Omit<IProfile, "school">;

// 5. Record 타입 : 철수, 영희, 훈이의 타입을 IProfile로 지정할 수 있습니다.
type eee = "철수" | "영희" | "훈이"; // Union(합집합) 타입
let child1: eee = "철수"; // 타입을 eee로 설정하면 철수, 영희, 훈이 중에서만 할당할 수 있습니다.
let child2: string = "짱구"; // 철수,영희,훈이를 포함한 다른 문자열 모두 할당할 수 있습니다.

type fff = Record<eee, IProfile>; //Record 타입

// 6. 객체의 key들로 Union타입 만들기
type ggg = keyof IProfile; // "name" | "age" | "school" | "hobby"
let myProfile: ggg = "hobby"; // myProfile에 IProfile 타입만 할당할 수 있습니다.

// 7. type 와 interface의 차이 : 선언병합 (type 불가능 / interface 가능)
export interface IProfile {
  candy: number; // interface로 만든 타입은 선언병합으로 IProfile에 candy가 추가됩니다. (type으로 만든 타입은 선언병합이 불가능합니다.)
}

// 8. 배운것 응용
let profile: Partial<IProfile> = {
  // Partial 이 없으면 name,age,school이 필수로 들어와야합니다.
  candy: 10,
};
