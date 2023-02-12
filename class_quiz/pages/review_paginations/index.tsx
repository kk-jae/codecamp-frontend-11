import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
      _id
      writer
      title
      contents
    }
  }
`;

const FETCH_BOARDS_COUNT = gql`
  query {
    fetchBoardsCount
  }
`;
export default function PageNations() {
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: dataBoardCount } = useQuery(FETCH_BOARDS_COUNT);

  const lastPage = Math.ceil(dataBoardCount?.fetchBoardsCount / 10);
  console.log(lastPage);

  const onClickPageNationNumber = (event) => {
    console.log(event.target.id);
    const PageNumber = Number(event.target.id);
    setActivePage(PageNumber);
    refetch({ page: PageNumber });

    console.log(event.target.style.color);
  };

  const [startPage, setStartPage] = useState(1);
  const [activePage, setActivePage] = useState(1);

  const onClickNextPage = () => {
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10);
      setActivePage(startPage + 10);
      refetch({ page: startPage });
    }
  };

  const onClickBackPage = () => {
    if (startPage === 1) return;
    setStartPage(startPage - 10);
    setActivePage(startPage - 10);
    refetch({ page: startPage });
  };

  const onChangeSearch = (event) => {
    refetch({
      search: event?.currentTarget.value,
      page: activePage,
    });
  };

  return (
    <>
      <div>==================검색 연습==================</div>
      <div>
        <input type="text" onChange={onChangeSearch} />
        <button>검색하기</button>
      </div>
      {data?.fetchBoards.map((el) => (
        <div>
          {/* <span style={{ marginRight: "50px" }}>{el.writer}</span> */}
          <span>{el.title}</span>
        </div>
      ))}
      <div style={{ width: "500px" }}>
        <span onClick={onClickBackPage}> 이전 페이지</span>
        {new Array(10).fill(1).map(
          (el, index) =>
            index + startPage <= lastPage && (
              <span
                id={String(index + startPage)}
                style={{ color: "blue", margin: "10px" }}
                onClick={onClickPageNationNumber}
              >
                {index + startPage}
              </span>
            )
        )}
        <span onClick={onClickNextPage}> 다음 페이지</span>
      </div>
    </>
  );
}
