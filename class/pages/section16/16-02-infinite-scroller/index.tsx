// 무한 스크롤
// yarn add react-infinite-scroller
// yarn add --dev @types/react-infinite-scroller

import { useQuery, gql } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import InfiniteScroll from "react-infinite-scroller";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function InfiniteScrollPage(): JSX.Element {
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  // console.log(data);
  // const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
  //   void refetch({ page: Number(event.currentTarget.id) });
  // };

  // refetch : 다시 refetch 하는것
  // fetchMore : 기존 fetch를 놔두고 더 fetch 하는거

  const onLoadMore = (): void => {
    if (data === undefined) return;
    void fetchMore({
      variables: {
        page:
          // 다음페이지
          Math.ceil((data?.fetchBoards.length ?? 10) / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchBoards === undefined) {
          return {
            fetchBoards: [...prev.fetchBoards],
          };
        }

        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };

  return (
    <div style={{ height: "100%", overflow: "auto" }}>
      <InfiniteScroll
        pageStart={0}
        loadMore={onLoadMore}
        hasMore={true}
        useWindow={false}
        // style을 적용하려면 useWindow값이 false로 되어야합니다.
      >
        {data?.fetchBoards.map((el) => (
          // fetchBoards에 타입을 주면 el은 자동으로 추론됩니다.
          <div key={el._id}>
            <span style={{ margin: "10px" }}>{el.title}</span>
            <span style={{ margin: "10px" }}>{el.writer}</span>
          </div>
        )) ?? <div></div>}
        {/* 마지막에 ?? div태그는 콘솔 에러 방지용입니다. (없을때 자식요소가 없어서 에러가 나오는 것 같음) */}
      </InfiniteScroll>
    </div>
  );
}
