import { useQueryFetchUseditemQuestionAnswers } from "../../hooks/query/useQueryFetchUseditemQuestionAnswers";

interface IProps {
  usedItemId: string;
}

export default function QuestionsListAnswer(props: IProps) {
  const { data } = useQueryFetchUseditemQuestionAnswers(props.usedItemId);

  //  (props.usedItemId);
  //  (data?.fetchUseditemQuestionAnswers);
  return (
    <>
      <div>=========대댓글 시작===========</div>
      {data?.fetchUseditemQuestionAnswers.map((el, index) => (
        <div>
          <div>제작 : {el.user.name}</div>
          <div>내용 : {el.contents}</div>
        </div>
      ))}
      <div>=========대댓글 끝===========</div>
    </>
  );
}
