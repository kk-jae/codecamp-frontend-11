import { useMutation, gql } from "@apollo/client";
import {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../../src/commons/types/generated/types";

const 나의그래프큐엘셋팅 = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  // const [counter, setCounter] = useState<number>(0) // 함수타입 지정방법 (중간에 <> 사용)

  // 타입을 추가해주게 된다면 무엇이 들어올지 확인할 수 있게 됩니다. + 값이 잘못들어오면 에러
  const [나의함수] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(나의그래프큐엘셋팅);
  // IMutation : result의 타입 => 이미 만들어진거 가져옴
  // IMutationCreateBoardArgs : variables의 타입 => 이미 만들어진거 가져옴
  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        // variables가 $ 역할을 합니다.
        writer: "훈이",
        title: "안녕하세요!!",
        contents: "반갑습니다",
      },
    });
    console.log(result.data?.createBoard?.number);
  };

  //한 줄일때는 괄호 () 필요 없음
  return <button onClick={onClickSubmit}> GRAPHQL-API 요청하기</button>;
}
