import { useForm } from "react-hook-form";
import { useQueryIdChecker } from "../../hooks/customs/useQueryIdCheaker";
import { useUsedItemQuestion } from "../../hooks/customs/useUsedItemQuestion";

export default function QuestionWrite() {
  const { id } = useQueryIdChecker("itemId");
  const { register, handleSubmit } = useForm();
  const { onClickUsedItemQuestion } = useUsedItemQuestion({
    useditemId: id, // args에 useditemId: id (아이템id)가 들어감
  });

  return (
    <>
      <div>댓글 작성하기 디테일 페이지</div>
      <form onSubmit={handleSubmit(onClickUsedItemQuestion)}>
        <span>
          내용 : <input {...register("contents")} />
        </span>
        <button>댓글 등록하기</button>
      </form>
    </>
  );
}
