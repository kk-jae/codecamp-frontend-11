// 파일명 ts, tsx 정확히 명시

import JestUnitTestSnapShotPage from "../../pages/section33/33-04-jest-unit-test-event";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

it("버튼을 눌렀을 때, 제대로 작동하는지 테스트하자!", () => {
  render(<JestUnitTestSnapShotPage />);

  fireEvent.click(screen.getByRole("count-button"));
  // role이 count-button인 태그를 클릭해줘

  expect(screen.getByRole("count")).toHaveTextContent("1");
  // count라는 값을 가져오면 걔의 값은 1일거야
});
