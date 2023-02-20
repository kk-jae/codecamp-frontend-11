import { useMoveToPage } from "../../../commons/hooks/custom/useMoveToPage";
import { useQueryFetchUseditems } from "../../../commons/hooks/query/useQueryFetchUsedItems";

export default function UsedItemsUI() {
  const { data } = useQueryFetchUseditems();
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <div>
      <h1>중고상품 리스트입니다.</h1>
      {data?.fetchUseditems.map((el, index) => (
        <div key={index}>
          <span
            style={{ border: "2px solid black" }}
            onClick={onClickMoveToPage(el._id)}
          >
            상품명 : {el.name}
          </span>
          <span>한줄 요약 : {el.remarks}</span>
          <span>상품설명 : {el.contents}</span>
          <span>판매 가격 : {el.price}</span>
          <span>태그입력:{el.tags}</span>
        </div>
      ))}
    </div>
  );
}
