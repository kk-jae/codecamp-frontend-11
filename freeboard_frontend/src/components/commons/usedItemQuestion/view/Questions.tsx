import { useQueryIdChecker } from "../../hooks/customs/useQueryIdCheaker";
import { useQueryFetchUsedItemQuestions } from "../../hooks/queries/useQueryfetchUseditemQuestions";

export const Questions = () => {
  const { id } = useQueryIdChecker("itemId");
  // const { data } = useQueryFetchUsedItemQuestions({ itemId: id });

  return (
    <>
      <div>댓글 목록</div>
    </>
  );
};
