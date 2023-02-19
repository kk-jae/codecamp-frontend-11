import { Modal } from "antd";
import { useDeleteUserItemPage } from "../mutations/useDeleteUseritemPage";

export const useMutationDeleteUserItem = () => {
  const [deleteUseditem] = useDeleteUserItemPage();

  const onClickDeleteUserItem = (useditemId: string) => () => {
    try {
      const result = deleteUseditem({
        variables: {
          useditemId,
        },
      });

      Modal.success({
        content: "상품이 삭제되었습니다.",
      });
    } catch (error) {
      if (error instanceof Error)
        Modal.error({
          content: error.message,
        });
    }
  };

  return {
    onClickDeleteUserItem,
  };
};
