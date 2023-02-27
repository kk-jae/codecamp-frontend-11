import { message, Modal } from "antd";
import { IBoard } from "../../../../commons/types/generated/types";

export default function AddLocalStorage() {
  const onClickAddLocalStorage = (basket: any) => () => {
    try {
      const baskets: IBoard[] = JSON.parse(
        localStorage.getItem("baskets") ?? "[]"
      );

      const temp = baskets.filter((el) => el._id === basket._id);
      if (temp.length >= 1) {
        Modal.error({
          content: "이미 담으신 물품입니다.",
        });
        return;
      }
      baskets.push(basket);

      localStorage.setItem("baskets", JSON.stringify(baskets));
      Modal.success({
        content: "상품을 저장하였습니다.",
      });
    } catch (error) {
      if (error instanceof Error) {
        Modal.error({
          content: message.error,
        });
      }
    }
  };

  return { onClickAddLocalStorage };
}
