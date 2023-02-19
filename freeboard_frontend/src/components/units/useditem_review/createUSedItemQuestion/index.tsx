import { useForm } from "react-hook-form";
import { onClickCreateUsedItemQuestionFunc } from "../../../commons/buttons/CreateUsedItemQuestion";

export default function UsedItemQuestionUI() {
  const { register, handleSubmit } = useForm();
  // const { onClickCreateUsedItemQuestion } = onClickCreateUsedItemQuestionFunc();

  return (
    <>
      <h1>중고마켓 댓글 작성페이지 입니다.</h1>
      <form>
        <div>
          내용 : <input {...register} />
        </div>
      </form>
    </>
  );
}
