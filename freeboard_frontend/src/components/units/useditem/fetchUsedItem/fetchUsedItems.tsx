import { useDeleteUserItemPage } from "../../../commons/hooks/customs/useDeleteUseritenPage";
import { useMoveToPage } from "../../../commons/hooks/customs/useMoveToPage";
import { useQueryFetchUsedItems } from "../../../commons/hooks/queries/useQueryFetchUsedItems";

export default function FetchBoardUI() {
  const { data } = useQueryFetchUsedItems();
  const { onClickMoveToPage } = useMoveToPage();
  const { onClickDeleteUserItem } = useDeleteUserItemPage();

  return (
    <div>
      <div>
        {data?.fetchUseditems.map((el, index) => (
          <div key={index}>
            <span style={{ margin: "10px" }}>내용 : {el.contents}</span>
            <span>제목 : {el.remarks}</span>
            <button onClick={onClickMoveToPage(`/homepage/UsedItem/${el._id}`)}>
              상품보기
            </button>
            <button onClick={onClickMoveToPage("수정하기 링크")}>
              수정하기
            </button>
            <button onClick={onClickDeleteUserItem(el._id)}>삭제하기</button>
          </div>
        ))}
      </div>
    </div>
  );
}
