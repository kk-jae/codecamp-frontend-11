import { useState } from "react";
import { useForm } from "react-hook-form";
import { useQueryIdChecker } from "../../hooks/custom/useQueryIdChecker";
import UsedItemQuestionAnswer from "../../hooks/custom/useUsedItemQuestionAnswer";

export default function QuestionAnswerButton(props: any) {
  // const { id } = useQueryIdChecker("usedItem");
  const { onClickUsedItemQuestionAnswer } = UsedItemQuestionAnswer();

  const [myIndex, setMyIndex] = useState(-1);

  const onClickMyIndex = (event: any) => {
    setMyIndex(Number(event?.currentTarget.id));
  };
  const { register, handleSubmit } = useForm();

  // console.log(props.data.fetchUseditemQuestions);
  return (
    <div>
      {myIndex === props.index ? (
        <form
          onSubmit={handleSubmit(onClickUsedItemQuestionAnswer(props.index))}
        >
          내용 :<input {...register("contents")} /> <button>문의하기</button>
        </form>
      ) : (
        <button onClick={onClickMyIndex} id={String(props.index)}>
          답글하기
        </button>
      )}
    </div>
  );
}
