// ====================================1차 실습========================================
// const hi: string = "안녕하세요";

// console.log(hi);
// // 실행 명령어 : yarn qqq index.ts
// // qqq는 package.json에 script에서 직접 만든 명령어 입니다.
// ====================================1차 실습==========================================

// typeorm 보고 작성할 수 있음
import { DataSource } from "typeorm";
import { Board } from "./Board.postgres";

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
  })
  .catch((error) => {
    console.log("DB접속에 실패했습니다.");
    console.log("원인", error);
  });
