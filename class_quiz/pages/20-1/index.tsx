import { gql, useMutation, useQuery } from "@apollo/client";
import { ChangeEvent, MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
      _id
      writer
      title
    }
  }
`;

export default function SearchPage() {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const [search, setSearch] = useState("");
  const [keyword, setKeyword] = useState("");

  const onClickNum = (event: MouseEvent<HTMLSpanElement>) => {
    refetch({ page: Number(event.currentTarget.id) });
  };

  const getDebounce = _.debounce((value) => {
    refetch({ search: value, page: 1 });
    setKeyword(value);
  }, 500);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    // setSearch(event.currentTarget.value);
    getDebounce(event.currentTarget.value);
  };

  return (
    <div>
      <div>
        <input type="text" onChange={onChangeSearch} /> <button>검색</button>
      </div>
      {data?.fetchBoards.map((el) => (
        // fetchBoards에 타입을 주면 el은 자동으로 추론됩니다.
        <div key={el._id}>
          <span style={{ margin: "10px" }}>
            {el.title
              .replaceAll(keyword, `@#$${keyword}@#$`)
              .split("@#$")
              .map((el) => (
                <span
                  key={uuidv4()}
                  style={{ color: el === keyword ? "red" : "black" }}
                >
                  {el}
                </span>
              ))}
          </span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
      {new Array(10).fill(1).map((el, index) => (
        <span
          style={{ paddingLeft: "10px" }}
          onClick={onClickNum}
          id={String(index + 1)}
        >
          {index + 1}
        </span>
      ))}
    </div>
  );
}
