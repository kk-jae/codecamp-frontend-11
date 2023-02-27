import { useQueryFetchUseditemQuestionAnswers } from "../../hooks/query/useQueryFetchUseditemQuestionAnswers";
import * as S from "../answer/index.styled";

interface IProps {
  usedItemId: string;
}

export default function QuestionsListAnswer(props: IProps) {
  const { data } = useQueryFetchUseditemQuestionAnswers(props.usedItemId);

  return (
    <>
      {data?.fetchUseditemQuestionAnswers.length !== 0 ? (
        <S.Container>
          <div style={{ display: "flex" }}>
            <S.Img src="/down-right-arrow.png" />
            {data?.fetchUseditemQuestionAnswers.map((el, index) => (
              <S.Wrapper key={index}>
                <S.Buyer_name>{el.user.name}</S.Buyer_name>
                <S.Buyer_contents>{el.contents}</S.Buyer_contents>
              </S.Wrapper>
            ))}
          </div>
        </S.Container>
      ) : (
        <span style={{ display: "none" }}></span>
      )}
    </>
  );
}
