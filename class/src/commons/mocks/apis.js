// 데이터베이스 없이 만든 미니 백엔드 서버입니다. ( 테스트를 위함 )

import { graphql } from "msw";
// import { rest } from "msw";

const gql = graphql.link("http://mock.com/graphql");

export const apis = [
  gql.mutation("createBoard", (req, res, ctx) => {
    const { writer, title, contents } = req.variables.createBoardInput;

    return res(
      ctx.data({
        createBoard: {
          _id: "qqq",
          writer,
          title,
          contents,
          __typepname: "Board",
        },
      })
    );
  }),

  // gql.query("fetchBoards", () => {})
];
