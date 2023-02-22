import { gql, useQuery } from "@apollo/client";

const FETCH_USED_ITEM_QUESTION_ANSWERS = gql`
  query fetchUseditemQuestionAnswers($useditemQuestionId: ID!) {
    fetchUseditemQuestionAnswers(useditemQuestionId: $useditemQuestionId) {
      _id
      contents
      user {
        name
      }
    }
  }
`;

export const useQueryFetchUseditemQuestionAnswers = () => {
  const query = useQuery(FETCH_USED_ITEM_QUESTION_ANSWERS, {
    variables: { useditemQuestionId: "질문 아이디" },
  });
};
