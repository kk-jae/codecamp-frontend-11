import { useForm } from "react-hook-form";
import { useQueryIdChecker } from "../../hooks/custom/useQueryIdChecker";
import UsedItemQuestion from "../../hooks/custom/useUsedItemQuestion";
import * as S from "../write/index.styled";

export default function QuestionsWrite() {
  const { id } = useQueryIdChecker("usedItem");
  const { register, handleSubmit } = useForm();
  const { onClickCreateUsedItemQuestion } = UsedItemQuestion(id);

  return (
    <S.Container onSubmit={handleSubmit(onClickCreateUsedItemQuestion)}>
      <h3>댓글</h3>
      <S.Buyer>
        <S.Buyer_left>
          <S.Buyer_img src="/기본이미지.png" />
        </S.Buyer_left>
        <S.Buyer_Text>
          <S.Buyer_contents
            placeholder="새로운 질문을 입력하세요"
            {...register("contents")}
          />
          <S.Btn>댓글 등록</S.Btn>
        </S.Buyer_Text>
      </S.Buyer>
    </S.Container>
  );
}
