import { useQueryIdChecker } from "../../hooks/custom/useQueryIdChecker";
import { useQueryFetchUsedItemQuestions } from "../../hooks/query/useQueryFetchUsedItemQuestions";

export default function QuestionsList() {
  const { id } = useQueryIdChecker("usedItem");
  const { data } = useQueryFetchUsedItemQuestions(id);

  return (
    <>
      <h3>댓글리스트</h3>
      {data?.fetchUseditemQuestions.map((el, index) => (
        <div key={index}>
          <span style={{ margin: "15px" }}>구매자 : {el.user.name}</span>
          <span>문의내용 : {el.contents}</span>
          <button>답글하기</button>
        </div>
      ))}
    </>
  );
}
