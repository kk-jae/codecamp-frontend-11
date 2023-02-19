import { Modal } from "antd";
import useMutationCreateUsedItem from "../mutations/useMutationCreateUsedItem";

export default function onClickCreateUsedItemFunc() {
  const [createUsedItem] = useMutationCreateUsedItem();

  const onClickCreateUsedItem = async (data) => {
    try {
      const result = await createUsedItem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            price: Number(data.price),
            contents: data.contents,
          },
        },
      });
      Modal.success({
        content: "상품이 등록되었습니다.",
      });
    } catch (error) {
      if (error instanceof Error)
        Modal.error({
          content: error.message,
        });
    }
  };

  return { onClickCreateUsedItem };
}
