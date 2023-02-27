import { useState } from "react";
import { useForm } from "react-hook-form";
import UsedItemQuestionAnswer from "../../hooks/custom/useUsedItemQuestionAnswer";
import * as S from "../answer/index.styled";

export default function QuestionAnswerButton(props: any) {
  // const { id } = useQueryIdChecker("usedItem");
  const { register, handleSubmit } = useForm();

  const { onClickUsedItemQuestionAnswer } = UsedItemQuestionAnswer();

  const [myIndex, setMyIndex] = useState(-1);

  const onClickMyIndex = (event: any) => {
    setMyIndex(Number(event?.currentTarget.id));
  };

  const onClickCancel = () => {
    setMyIndex(-1);
  };

  //  (props.data.fetchUseditemQuestions);
  return (
    <S.Container>
      {myIndex === props.index ? (
        <S.Answer
          onSubmit={handleSubmit(onClickUsedItemQuestionAnswer(props.index))}
        >
          <S.Answer_input
            {...register("contents")}
            placeholder="작성자님에게 전달할 내용을 입력하세요"
          />{" "}
          <S.Answer_Btn>
            <S.Answer_Btn_detail>등록</S.Answer_Btn_detail>
            <S.Answer_Btn_detail onClick={onClickCancel}>
              취소
            </S.Answer_Btn_detail>
          </S.Answer_Btn>
        </S.Answer>
      ) : (
        <S.Btn onClick={onClickMyIndex} id={String(props.index)}>
          답글하기
        </S.Btn>
      )}
    </S.Container>
  );
}
