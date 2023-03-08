// jest가 index.test.ts 또는 index.spec.ts 파일을 찾음

import { add } from "../../pages/section33/33-01-test/index";

it("더하기 잘 되는지 테스트 해보기", () => {
  const result = add(3, 5); // 8
  expect(result).toBe(8); // result가 8이 맞니?
});

// describe("나만의 테스트 그룹 만들기", ()=>{
//   it("더하기 테스트", ()=>{

//   })

//   it("빼기 테스트", ()=>{

//   })

//   it ("곱하기 테스트", ()=>{

//   })
// })
