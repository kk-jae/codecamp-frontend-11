// yarn ddd 라는 명령어로 해당 파일을 실행 시킬 수 있습니다.
// 해당 파일 실행시 bbb에 포함된 class Board 가 실행됩니다.
// 출력 : [class Board]

function bbb(qqq: any) {
  console.log("===============");
  console.log(qqq);
  console.log("===============");
}

@bbb // bbb라는 함수에 아래 Board가 들어갑니다.
class Board {
  // number : number
  // writer : string
}
