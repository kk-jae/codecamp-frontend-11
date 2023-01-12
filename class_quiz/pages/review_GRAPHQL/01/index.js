import { useMutation, gql } from "@apollo/client";

const graphqlBoardImp = gql`
  mutation {
    createBoard(
      writer: "권현재"
      title: "권현재 복습"
      contents: "권현재 복습 중 입니다."
    ) {
      _id
      number
      message
    }
  }
`;

export default function graphqlReview() {
  const [graphqlImp] = useMutation(graphqlBoardImp);

  const onClickGraphqlBtn = async () => {
    const result = await graphqlImp();
    console.log(result);
  };

  return <button onClick={onClickGraphqlBtn}>GRAPHQL-API 요청하기</button>;
}
