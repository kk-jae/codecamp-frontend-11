import useMutationUseditemQuestion from "../mutations/useMutationUseditemQuestion";

// 여기서 상품 댓글에 관한 mutation을 모두 작성하여 뿌려줄 수 있습니다.
// 작성하기, 업데이트, 삭제

// IdChecker 컴포넌트로 itemId를 받아온 후 해당 args에 넣어줍니다.
export const useUsedItemQuestion = (args) => {
  const [createUsedItemQuestion] = useMutationUseditemQuestion();

  const onClickUsedItemQuestion = (data) => {
    console.log(args);
    const result = createUsedItemQuestion({
      variables: {
        createUseditemQuestionInput: {
          contents: data.contents,
        },
        useditemId: args.useditemId,
      },
    });
  };

  return { onClickUsedItemQuestion };
};
