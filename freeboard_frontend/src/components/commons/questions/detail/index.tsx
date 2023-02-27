import { getDate } from "../../../../commons/libraries/utils";
import QuestionAnswerButton from "../../button/answer";
import { useQueryIdChecker } from "../../hooks/custom/useQueryIdChecker";
import UsedItemQuestion from "../../hooks/custom/useUsedItemQuestion";
import { useQueryFetchUsedItemQuestions } from "../../hooks/query/useQueryFetchUsedItemQuestions";
import QuestionsListAnswer from "../answer";
import * as S from "../detail/index.styled";

export default function QuestionsList() {
  const { id } = useQueryIdChecker("usedItem");
  const { dataQuery } = useQueryFetchUsedItemQuestions(id);
  const { onClickDeleteUsedItemQuestion } = UsedItemQuestion(id);

  return (
    <S.Container>
      {dataQuery?.fetchUseditemQuestions.map((el, index) => (
        <S.Wrapper key={index}>
          <S.Buyer>
            <S.Buyer_left>
              <S.Buyer_img src="/기본이미지.png" />
            </S.Buyer_left>
            <S.Buyer_right>
              <S.Buyer_name>
                {el.user.name}
                <S.Buyer_createdAt>{getDate(el.createdAt)}</S.Buyer_createdAt>
              </S.Buyer_name>{" "}
              <S.Buyer_contents>{el.contents}</S.Buyer_contents>
              <S.Buyer_right_btn>
                <QuestionAnswerButton index={Number(index)} id={el._id} />
                <S.DeleteBtn onClick={onClickDeleteUsedItemQuestion(el._id)}>
                  삭제하기
                </S.DeleteBtn>
              </S.Buyer_right_btn>
            </S.Buyer_right>
          </S.Buyer>
          <QuestionsListAnswer usedItemId={el._id} />
        </S.Wrapper>
      ))}
    </S.Container>
  );
}
