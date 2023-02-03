// ====================================1차 실습========================================
// const hi: string = "안녕하세요";

// console.log(hi);
// // 실행 명령어 : yarn qqq index.ts
// // qqq는 package.json에 script에서 직접 만든 명령어 입니다.
// ====================================1차 실습==========================================

// typeorm 보고 작성할 수 있음
import { DataSource } from "typeorm";
import { Board } from "./Board.postgres";

// =======================================apolloServer 서버 프로그램 추가 (2일차)===============24시간 사용을 위한 서버프로그램=========================================
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// API-DOCS 만들기
const typeDefs = `#graphql

  type MyBoard {
    number: Int
    writer: String
    title: String
    contents: String
  }
  # 조회하는 것의 타입은 type

  input CreateBoardInput {
    writer:String
    title:String
    contents:String
  }
  # 새로 변경되어야 것의 타입은 input

  type Query {
    fetchBoards:[MyBoard]  #리턴타입 ( fetchBoards의 타입은 객체이므로 MyBoard로 타입을 만들어줘야합니다.)
  }

    # 아래의 Mutation 을 불러오기 위해 타입 조정 
  type Mutation {
    # 연습용(backend-example 발식)
    # createBoard(writer:String, title:String, contents:String) : String


    # 실무용 (backend-practice 방식)
    createBoard(createBoardInput:CreateBoardInput):String
  }
`;

// API 만들기
// 실행시키려면 typeDefs도 만들어줘야합니다.
const resolvers = {
  Query: {
    // hello: () => "world",
    fetchBoards: async () => {
      //fetchBoards의 이름은 임의로 변경 가능합니다.

      // 1. 모두 꺼내기
      const result = await Board.find();
      console.log(result);
      // // 2. 한개만 꺼내기
      // const result = await Board.findOne({ where: { number: 3 } });
      // console.log(result);
      return result; //프론트엔드 서버로 보내주는 방법 (return)
    },
  },

  Mutation: {
    createBoard: async (parent: any, args: any, context: any, info: any) => {
      // 프론트에서 던진 값(인자) 는 args로 들어오게 됩니다.
      await Board.insert({
        //typeORM으로 축약된 식입니다.(Board 링크에 typeORM을 사용하고있음)
        ...args.createBoardInput,

        // 하나하나 모두 입력하는 비효율적인방식
        // writer: args.createBoardInput.writer, // "철수"
        // title: args.createBoardInput.title,
        // contents: args.createBoardInput.contents,
      });
      // fetchBoards("철수") // 상단의 fetchBoards:async(parent)=> ~~~~의 parent로 들어가게 됩니다.(API에서 API로 요청하는 경우)
      return "게시글 등록에 성공했어요!!";
    },

    // updateBoard: async () => {
    //   // 3번게시글을 영희로 바꿔줘
    //   await Board.update({ number: 3 }, { writer: "영희" });
    // },

    // // 일반적으로 삭제 기능은 다시 복원이 가능하도록 isDeleted를 적용합니다.(소프트삭제)
    // // fetchBoard에서 isDeleted가 false인 것만 보여지도록 합니다.
    // deleteBoard: async () => {
    //   await Board.delete({ number: 3 }); // 3번 게시글 삭제해줘!
    //   await Board.update({ number: 3 }, { isDeleted: true }); // 3번 게시글 삭제했다 치자! (소프트삭제) => isDeleted가 초기값인 false이면? 삭제 안된거, true이면? 삭제된거
    //   await Board.update({ number: 3 }, { deletedAt: new Date() }); // 3번 게시글 삭제했다 치자! (소프트삭제) => deletedAt이 초기값이 NULL이면? 삭제 안된거, new Date() 들어가 있으면? 삭제 된거
    // },
  },
};

// @ts-ignore
const server = new ApolloServer({
  typeDefs,
  resolvers,
  // cors: true, 문법이 바껴 사용법이 변경됨

  // 선택한 사이트만 풀어주고 싶을때
  // cors: {
  //   origin:["http://naver.com", "http://coupang.com"]
  // }
});

// const { url } = await startStandaloneServer(server);
// console.log(`🚀 Server ready at ${url}`);

// =======================================apolloServer 서버 프로그램 추가 (2일차)=======================24시간 사용을 위한 서버프로그램=================================

const AppDataSource = new DataSource({
  type: "postgres",
  host: "34.64.244.122", // 데이터베이스깔린 컴퓨터의 IP주소, 코드캠프에서 만들어 놓음
  port: 5010, //데이터베이스 깔린 컴퓨터 port, 코드캠프에서 만들어 놓음
  username: "postgres",
  password: "postgres2022",
  database: "postgres", // 연결할 데이터베이스 이름
  entities: [Board], // BOard.postgres에 있는 class 함수
  synchronize: true,
  logging: true, // 성공한 내역을 보여줌
});

AppDataSource.initialize()
  .then(() => {
    console.log("DB접속에 성공했습니다!!!");
    // =================서버프로그램 실행=================
    startStandaloneServer(server).then(() => {
      console.log("그래프큐엘 서버가 실행되었습니다!!!!!!");
    });
    // =================서버프로그램 실행=================
  })

  .catch((error) => {
    console.log("DB접속에 실패했습니다.");
    console.log("원인", error);
  });
