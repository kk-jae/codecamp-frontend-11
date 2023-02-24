import Link from "next/link";
import InfiniteScroll from "react-infinite-scroller";
import { useMoveToPage } from "../../../commons/hooks/custom/useMoveToPage";
import { useQueryFetchUseditems } from "../../../commons/hooks/query/useQueryFetchUsedItems";
import * as S from "../list/index.styled";

export default function UsedItemsUI() {
  const { data, fetchMore } = useQueryFetchUseditems();
  const { onClickMoveToPage } = useMoveToPage();

  const loadFunc = (): void => {
    if (data === undefined) return;
    void fetchMore({
      variables: {
        page: Math.ceil((data?.fetchUseditems.length ?? 10) / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchUseditems === undefined) {
          return {
            fetchUseditems: [...prev.fetchUseditems],
          };
        }
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  return (
    <S.Container>
      <S.Container2>
        <InfiniteScroll pageStart={0} loadMore={loadFunc} hasMore={true}>
          <S.Wrapper>
            {data?.fetchUseditems.map((el, index) => (
              <S.Item key={index} onClick={onClickMoveToPage(el._id)}>
                <S.Item_Img
                  src={
                    el.images?.[0]
                      ? `https://storage.googleapis.com/${el.images[0]}`
                      : "/상품 기본이미지.png"
                  }
                />
                <S.Item_Text>
                  {/* <S.Seller>{el.seller?.name}</S.Seller> */}
                  <S.Name>{el.name}</S.Name>
                  <S.Remark>{el.remarks}</S.Remark>
                  {/* <span>상품설명 : {el.contents}</span> */}
                  {/* <span>태그입력:{el.tags}</span> */}
                </S.Item_Text>
                <S.Price>{el.price} 원</S.Price>
              </S.Item>
            ))}
          </S.Wrapper>
        </InfiniteScroll>
        <S.NewUseItem>
          <Link href={`/homepage/UsedItem/new`}>
            <span>중고상품 등록하기</span>
          </Link>
        </S.NewUseItem>
      </S.Container2>
    </S.Container>
  );
}
