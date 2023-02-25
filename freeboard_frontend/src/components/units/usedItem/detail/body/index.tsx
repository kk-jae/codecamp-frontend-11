import { useMoveToPage } from "../../../../commons/hooks/custom/useMoveToPage";
import { useQueryIdChecker } from "../../../../commons/hooks/custom/useQueryIdChecker";
import { useQueryFetchUsedItem } from "../../../../commons/hooks/query/useQueryFetchUsedItem";
import DOMPurify from "dompurify";
import UsedItem from "../../../../commons/hooks/custom/useUsedItem";
import * as S from "../body/index.styled";
import { getDate } from "../../../../../commons/libraries/utils";

export default function UsedItemDetailBody() {
  const { id } = useQueryIdChecker("usedItem");
  const result = useQueryFetchUsedItem(id);
  const { onClickMoveToPage } = useMoveToPage();
  const { onClickDeleteUsedItem } = UsedItem(id);

  return (
    <S.Container>
      <S.UsedItemDetail_Top>
        <S.Top_Seller>
          <span style={{ fontWeight: "700" }}>판매자</span> :{" "}
          {result.data?.fetchUseditem.seller?.name}
        </S.Top_Seller>
        <S.Top_Name>
          <span style={{ fontWeight: "700" }}>상품명</span> :{" "}
          {result.data?.fetchUseditem.name}
        </S.Top_Name>
        <S.Top_Date>
          <span style={{ fontWeight: "700" }}>작성 날짜</span> :{" "}
          {getDate(result.data?.fetchUseditem.createdAt)}
        </S.Top_Date>
        <S.Top_Remarks>
          <span style={{ fontWeight: "700" }}>한줄요약</span> :{" "}
          {result.data?.fetchUseditem.remarks}
        </S.Top_Remarks>
        <S.Top_Price>
          <span style={{ fontWeight: "700" }}>판매 가격</span> :{" "}
          {result.data?.fetchUseditem.price} 원
        </S.Top_Price>
        {/* <div>거래 위치 : {}</div> */}
      </S.UsedItemDetail_Top>
      <S.UsedItemDetail_Middle>
        <div>
          {typeof window !== "undefined" && (
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(result.data?.fetchUseditem.contents),
              }}
              // 꺽새가 출력되지 않게 문자 그대로를 적용합니다.
            />
          )}
        </div>
        {/* <div>태그 입력 : {result.data?.fetchUseditem.}</div> */}
        {result.data?.fetchUseditem.images?.[0] ? (
          <img
            src={`https://storage.googleapis.com/${result.data?.fetchUseditem.images?.[0]}`}
          />
        ) : (
          <div></div>
        )}
      </S.UsedItemDetail_Middle>
      <div>
        <button onClick={onClickMoveToPage(`/homepage/UsedItem/${id}/edit`)}>
          상품 수정하기
        </button>
        <button onClick={onClickDeleteUsedItem}>상품 삭제하기</button>
      </div>
    </S.Container>
  );
}
