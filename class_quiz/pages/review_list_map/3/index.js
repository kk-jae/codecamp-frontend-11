import { useQuery, gql } from "@apollo/client";

const FETCH_BOARDS = gql`
  query {
    fetchBoards(page: 1) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function BoardsList() {
  const { data } = useQuery(FETCH_BOARDS);

  console.log(data);

  return (
    <div>
      <div>
        <div>
          <span style={{ margin: "10px" }}>번호</span>
          <span style={{ margin: "10px" }}>제목</span>
          <span style={{ margin: "10px" }}>작성자</span>
          <span style={{ margin: "10px" }}>날짜</span>
        </div>
        <div>
          {data?.fetchBoards.map((el) => (
            <div>
              <span>{"번호"}</span>
              <span>{el.title}</span>
              <span>{el.writer}</span>
              <span>{el.createdAt}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
