import { useQuery } from "@apollo/client";

const FETCH_BOARD = gql`
  query {
    fetchBoard(number=1) {
      number
      writer
      title
      contents
    }
  }
`;

export default function movedPage() {
  const { data } = useQuery(QueryImp);

  return (
    <div>
      <div>1번 게시글입니다.</div>
      <div> 작성자 : {data.fetchBoard.writer} </div>
      <div> 제목 : {} </div>
      <div> 내용 : {} </div>
    </div>
  );
}
