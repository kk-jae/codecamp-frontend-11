import BoardWrite from "../../../../src/components/units/board/10-write/BoardWrite.container";

export default function GraphqlMutationPage() {
  return (
    <div>
      <div>############ 여기는 페이지입니다.##########</div>
      <BoardWrite isEdit={false} />
      <div>############ 여기는 페이지입니다.##########</div>
    </div>
  );
}

//수정하기 업로드시 기존 데이터가 삭제되는 현상 보완
