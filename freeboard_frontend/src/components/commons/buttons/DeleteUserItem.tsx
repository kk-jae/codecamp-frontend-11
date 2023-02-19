import { useMutationDeleteUserItem } from "../hooks/customs/DeleteUserItem";

export default function DeleteUserItemButton(props) {
  const { onClickDeleteUserItem } = useMutationDeleteUserItem();

  return (
    <button onClick={onClickDeleteUserItem(props.useditemId)}>
      상품 삭제하기
    </button>
  );
}
