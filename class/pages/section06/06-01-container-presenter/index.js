//04-04 수업자료 폴더 체계화 실습 ( src 추가 )
//여러번 사용하는 기능은 공통 컴포넌트(commons) / 한번쓰고 안쓰는 기능은 단일 컴포넌트(units)

import BoardWrite from "../../../src/components/units/board/write/BoardWrite.presenter";

export default function GraphqlMutationPage(props) {
  return (
    <div>
      <div>############ 여기는 페이지입니다.##########</div>
      <BoardWrite qqq="철수" />
      <div>############ 여기는 페이지입니다.##########</div>
    </div>
  );
  //presenter.js
}

//container.js의 부모입니다.(props 전달 가능)
