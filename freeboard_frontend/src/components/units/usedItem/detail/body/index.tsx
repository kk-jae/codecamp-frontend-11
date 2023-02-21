import { useMoveToPage } from "../../../../commons/hooks/custom/useMoveToPage";
import { useQueryIdChecker } from "../../../../commons/hooks/custom/useQueryIdChecker";
import { useQueryFetchUsedItem } from "../../../../commons/hooks/query/useQueryFetchUsedItem";
import DOMPurify from "dompurify";
import UsedItem from "../../../../commons/hooks/custom/useUsedItem";

export default function UsedItemDetailBody() {
  const { id } = useQueryIdChecker("usedItem");
  const result = useQueryFetchUsedItem(id);
  const { onClickMoveToPage } = useMoveToPage();
  const { onClickDeleteUsedItem } = UsedItem(id);

  return (
    <>
      <h1>중고 상품 상세페이지입니다.</h1>
      <div>판매자 : {result.data?.fetchUseditem.seller?.name}</div>
      <div>상품명 : {result.data?.fetchUseditem.name}</div>
      <div>작성 날짜 : {result.data?.fetchUseditem.createdAt}</div>
      <div>한줄요약 : {result.data?.fetchUseditem.remarks}</div>
      <div>
        상품설명 :
        {typeof window !== "undefined" && (
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(result.data?.fetchUseditem.contents),
            }}
            // 꺽새가 출력되지 않게 문자 그대로를 적용합니다.
          />
        )}
      </div>
      <div>판매 가격 : {result.data?.fetchUseditem.price}</div>
      {/* <div>태그 입력 : {result.data?.fetchUseditem.}</div> */}
      {/* <div>거래 위치 : {}</div> */}
      <div>
        {result.data?.fetchUseditem.images?.[0] ? (
          <img
            src={`https://storage.googleapis.com/${result.data?.fetchUseditem.images?.[0]}`}
          />
        ) : (
          <div>이미지가 없습니다</div>
        )}
        <button onClick={onClickMoveToPage(`/homepage/UsedItem/${id}/edit`)}>
          상품 수정하기
        </button>
        <button onClick={onClickDeleteUsedItem}>상품 삭제하기</button>
      </div>
    </>
  );
}
