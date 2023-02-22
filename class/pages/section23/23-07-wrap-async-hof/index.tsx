// 04-gql-mutation

import { useMutation, gql } from "@apollo/client";
import { wrapAsync } from "../../../src/commons/libraries/asyncFunc";

const 나의그래프큐엘셋팅 = gql`
  mutation {
    createBoard(
      writer: "처처처처철수"
      title: "안녕하세요 반갑습니다."
      contents: "철수가 수업을 듣고 있습니다."
    ) {
      _id
    }
  }
`;

export default function GraphqlMutationPage(): JSX.Element {
  const [나의함수] = useMutation(나의그래프큐엘셋팅); // useMutation은 그냥 사용 할 수 없으므로 import 해야합니다.

  const onClickSubmit = async (): Promise<void> => {
    const result = await 나의함수();
    console.log(result);
  };

  // 비동기 (async, await의 eslint를 적용하면 eslint 에러가 발생합니다.)
  // 해결 과정 ↓ (commons / libraries 에 컴포넌트로 보관)

  // 함수타입 : () => void
  // 비동기함수 :  () => Promise<void>
  // const wrapAsync = (asyncFunc: () => Promise<void>) => () => {
  //   void asyncFunc();
  // };

  // 한 줄일때는 괄호 () 필요 없음
  return (
    <button onClick={wrapAsync(onClickSubmit)}> GRAPHQL-API 요청하기</button>
  );
}

// "@typescript-eslint/no-misused-promises": "off",
