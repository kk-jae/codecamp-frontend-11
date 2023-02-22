import { useForm } from "react-hook-form";
import { useQueryIdChecker } from "../../hooks/custom/useQueryIdChecker";
import UsedItemQuestion from "../../hooks/custom/useUsedItemQuestion";

export default function QuestionsWrite() {
  const { id } = useQueryIdChecker("usedItem");
  const { register, handleSubmit } = useForm();
  const { onClickCreateUsedItemQuestion } = UsedItemQuestion(id);

  return (
    <form onSubmit={handleSubmit(onClickCreateUsedItemQuestion)}>
      <h3>댓글 작성하기</h3>
      <span>
        내용 : <input {...register("contents")} />
      </span>
      <button>댓글 작성하기 버튼</button>
    </form>
  );
}
