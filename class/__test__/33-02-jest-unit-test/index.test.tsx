// 파일명 ts, tsx 정확히 명시

import JestUnitTestPage from "../../pages/section33/33-02-jest-unit-test";
import { render, screen } from "@testing-library/react"; // 해당 태그의 그림을 그려줌
import "@testing-library/jest-dom"; // 임의의 jest dom을 만들어줌

// 간단한 기능 하나일경우 it, 아닐경우 describe 안에 여러개의 it 사용
it("내가 원하는대로 그려지는지 테스트하기", () => {
  render(<JestUnitTestPage />);

  const myText = screen.getByText("철수는 13살 입니다.");
  expect(myText).toBeInTheDocument(); // myText가 Document에 있는지 없는지 확인

  const myText2 = screen.getByText("철수의 취미 입력하기 :");
  expect(myText2).toBeInTheDocument();

  const myText3 = screen.getByText("철수랑 놀러가기");
  expect(myText3).toBeInTheDocument();
});
