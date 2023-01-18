import { useQuery, gql, useMutation } from "@apollo/client";

const FETCH_BOARDS = gql`
  query {
    # fetchBoard(number: 1)
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;

//삭제를 위한 플레이그라운드 자료
const DELETE_BOARD = gql`
  mutation deleteBoard($number: Int) {
    deleteBoard(number: $number) {
      message
    }
  }
`;

export default function StaticRoutingMovedPage() {
  const { data } = useQuery(FETCH_BOARDS);

  const [deleteBoard] = useMutation(DELETE_BOARD);

  // console.log(data)
  // console.log(data?.fetchBoards);
  //받아오는 숫자(length)는 백엔드에서 조정할 수 있습니다.

  // CSS 적용방법 시작
  // const myStyles = {
  //   margin : "10px",
  // }
  // CSS 적용방법 종료

  const onClickDelete = (event) => {
    // console.log(event);
    deleteBoard({
      variables: { number: Number(event.target.id) }, //삭제 버튼 클릭시 삭제 (새로고침해야 적용됨)
      refetchQueries: [{ query: FETCH_BOARDS }], //삭제 버튼 클릭시 화면에 바로 적용해줄 수 있습니다.
    });
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        // 특별한 이유가 없으면 Fragment로 감싸자! <div />는 1개 더 그려야되서 조금 느려짐
        //1. 프레그먼트란?<></>, <Fragment></Fragment>
        //2. 프레그먼트에 key입력하는 방법? <Fragment key={1}></<Fragment>
        <div key={el.number}>
          {/* 각 게시글이 number 별로 구분된 것이다. (Map 사용시 반드시 필요)
          index는 게시글을 삭제할 때, 다음 게시글이 올라오면서 기존 index와 동일한 값을 갖게 됩니다. 즉, 유일하지 않음*/}
          <span>
            <input type="checkbox"></input>
          </span>
          <span style={{ margin: "10px" }}>{el.number}</span>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
          <span>
            <button id={el.number} onClick={onClickDelete}>
              삭제
            </button>
          </span>
        </div>
      ))}
    </div>
  );
}
