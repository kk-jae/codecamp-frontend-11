import QuestionAnswerButton from "../../button/answer";
import { useQueryIdChecker } from "../../hooks/custom/useQueryIdChecker";
import UsedItemQuestion from "../../hooks/custom/useUsedItemQuestion";
import { useQueryFetchUsedItemQuestions } from "../../hooks/query/useQueryFetchUsedItemQuestions";
import QuestionsListAnswer from "../answer";

export default function QuestionsList() {
  const { id } = useQueryIdChecker("usedItem");
  const { dataQuery } = useQueryFetchUsedItemQuestions(id);
  const { onClickDeleteUsedItemQuestion } = UsedItemQuestion(id);

  return (
    <>
      <h3>댓글리스트</h3>
      {dataQuery?.fetchUseditemQuestions.map((el, index) => (
        <div key={index}>
          <span style={{ margin: "15px" }}>구매자 : {el.user.name}</span>
          <span>문의내용 : {el.contents}</span>
          <QuestionAnswerButton index={Number(index)} id={el._id} />
          <button onClick={onClickDeleteUsedItemQuestion(el._id)}>
            삭제하기
          </button>
          <QuestionsListAnswer usedItemId={el._id} />
        </div>
      ))}
    </>
  );
}
