import { useState } from "react";
import { useForm } from "react-hook-form";
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
  const { onClickDeleteUsedItemQuestion, onClickUpdateUsedItemQuestion } =
    UsedItemQuestion(id);

  const [myId, setMyId] = useState("");
  const { register, handleSubmit } = useForm();

  const onClickChangeInput = (event) => {
    setMyId(event?.currentTarget.id);
  };
  const onClickCancel = (event) => {
    setMyId("");
  };

  return (
    <S.Container>
      {dataQuery?.fetchUseditemQuestions.map((el, index) => (
        <S.Wrapper key={index}>
          <S.Buyer>
            <S.Buyer_left>
              <S.Buyer_img src="/기본이미지.png" />
            </S.Buyer_left>
            {el._id === myId ? (
              <S.Buyer_Text
                onSubmit={handleSubmit(
                  onClickUpdateUsedItemQuestion(el._id, setMyId)
                )}
              >
                <S.Buyer_contentsEdit
                  placeholder="수정 내용을 입력해주세요"
                  {...register("contents")}
                />
                <S.Btn1 onClick={onClickCancel}>취소 하기</S.Btn1>
                <S.Btn2>댓글 수정</S.Btn2>
              </S.Buyer_Text>
            ) : (
              <S.Buyer_right>
                <S.Buyer_name>
                  {el.user.name}
                  <S.Buyer_createdAt>{getDate(el.createdAt)}</S.Buyer_createdAt>
                </S.Buyer_name>{" "}
                <S.Buyer_contents>{el.contents}</S.Buyer_contents>
                <S.Buyer_right_btn>
                  <QuestionAnswerButton index={Number(index)} id={el._id} />
                  <S.QuestionBtn onClick={onClickChangeInput} id={el._id}>
                    수정하기
                  </S.QuestionBtn>
                  <S.QuestionBtn
                    onClick={onClickDeleteUsedItemQuestion(el._id)}
                  >
                    삭제하기
                  </S.QuestionBtn>
                </S.Buyer_right_btn>
              </S.Buyer_right>
            )}
          </S.Buyer>
          <QuestionsListAnswer usedItemId={el._id} />
        </S.Wrapper>
      ))}
    </S.Container>
  );
}
