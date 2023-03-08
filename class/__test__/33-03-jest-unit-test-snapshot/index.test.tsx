// 파일명 ts, tsx 정확히 명시

import JestUnitTestSnapShot from "../../pages/section33/33-03-jest-unit-test-snapshot";
import { render } from "@testing-library/react"; // 해당 태그의 그림을 그려줌
import "@testing-library/jest-dom"; // 임의의 jest dom을 만들어줌

// 간단한 기능 하나일경우 it, 아닐경우 describe 안에 여러개의 it 사용
it("기존 사진이랑 바뀐게 없는지 비교해보자!! - 스냅샷 테스트", () => {
  const result = render(<JestUnitTestSnapShot />);
  expect(result.container).toMatchSnapshot(); // 사진이 없으면 새로 찍고, 있다면 비교
  // 이미 찍은 사진을 수정하고 싶다면 yarn test -u 진행
});

// 스냅샷과 스토리북을 같이 활용 할 수 있습니다.
