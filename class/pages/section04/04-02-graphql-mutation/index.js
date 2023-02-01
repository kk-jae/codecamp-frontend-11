import { useMutation, gql } from "@apollo/client";

const 나의크래프큐엘셋팅 = gql`
  mutation {
    createBoard(
      writer: "처처처처철수"
      title: "안녕하세요 반갑습니다."
      contents: "철수가 수업을 듣고 있습니다."
    ) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [나의함수] = useMutation(나의크래프큐엘셋팅); // useMutation은 그냥 사용 할 수 없으므로 import 해야합니다.

  const onClickSubmit = async () => {
    const result = await 나의함수();
    console.log(result);
  };

  // 한 줄일때는 괄호 () 필요 없음
  return <button onClick={onClickSubmit}> GRAPHQL-API 요청하기</button>;
}
