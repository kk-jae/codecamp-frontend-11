// API 테스트 코드 작성
// 1. 렌더링
// 2. 작성자, 제목, 내용 input 창에 값 입력 ( 테스트 코드가 알아서 input 값 넣어줌)
// 3. 등록하기 버튼 클릭
// 4. 뮤테이션 날리기 ( 가짜 API 만들기 필요합니다. ) - msw(mock-service-worker) 설치
// yarn add cross-fetch --dev
// yarn add msw --dev
// ( API를 사용하기 위한 아폴로 셋팅 진행 필요 )
// ☆★ 5. 등록된 페이지로 이동 ★☆

import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import StaticRoutingMovedPage from "../../pages/section33/33-05-jest-unit-test-mocking";
import fetch from "cross-fetch";
import mockRouter from "next-router-mock";

jest.mock("next/router", () => require("next-router-mock"));
// 테스트하는 코드의 next/router를 next-router-mock( 가짜 )으로 바꿔치기합니다.
// yarn add next-router-mock --dev

it("게시글이 잘 등록되는지 테스트 하자!", async () => {
  const client = new ApolloClient({
    // uri: "http://mock.com/graphql", // 가짜 API 주소를 작성해야합니다. ( 근데 라이브러리에서 지원을 막아놓음)
    link: new HttpLink({
      uri: "http://mock.com/graphql",
      fetch,
    }),
    cache: new InMemoryCache(),
  });

  render(
    <ApolloProvider client={client}>
      <StaticRoutingMovedPage />
    </ApolloProvider>
  );

  fireEvent.change(screen.getByRole("input-writer"), {
    target: { value: "맹구" },
  });

  fireEvent.change(screen.getByRole("input-title"), {
    target: { value: "안녕하세요" },
  });

  fireEvent.change(screen.getByRole("input-contents"), {
    target: { value: "반갑습니다." },
  });

  fireEvent.click(screen.getByRole("submit-button"));

  await waitFor(() => {
    // mutation 결과는 기다려야함
    expect(mockRouter.asPath).toEqual("/boards/qqq");
    // 라우터 푸쉬의 결과
  });
});
