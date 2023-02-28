import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/libraries/stores";
import useQueryfetchUserLoggeIn from "../../commons/hooks/query/useQueryFetchUserLoggeIn";
import * as S from "../myPage/index.styled";

export default function MyPageUI(): JSX.Element {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const { data } = useQueryfetchUserLoggeIn();

  const [TodayUsedItem, setTodayUsedItem] = useState();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const getDataLocalS = (basket: string) => {
        let localData = localStorage.getItem(basket);
        if (localData === null || localData === undefined) {
          return []; // or some other default value
        }
        return JSON.parse(localData);
      };
      let localData = getDataLocalS("baskets");
      setTodayUsedItem(localData);
    }
  }, []);

  return (
    <S.Container>
      <S.Wrapper>
        <h2>나의 프로필</h2>
        <S.Profile_Wrapper>
          <S.Profile_left>
            <S.Profile_left_img src="/기본이미지.png" />
          </S.Profile_left>
          <S.Profile_right>
            <S.Profile_right_text>
              <S.Right_selet>이름</S.Right_selet>{" "}
              {data?.fetchUserLoggedIn?.name}
            </S.Profile_right_text>
            <S.Profile_right_text>
              <S.Right_selet>이메일</S.Right_selet>{" "}
              {data?.fetchUserLoggedIn?.email}
            </S.Profile_right_text>
            <S.Profile_right_text>
              <S.Right_selet>포인트</S.Right_selet>{" "}
              {data?.fetchUserLoggedIn?.userPoint}
            </S.Profile_right_text>
          </S.Profile_right>
        </S.Profile_Wrapper>
        <S.Baskets>
          <S.Baskets_left>오늘 본 상품</S.Baskets_left>
          <S.Baskets_right>
            {TodayUsedItem ? (
              TodayUsedItem.map((el) => (
                <S.Baskets_item>
                  {el.images[0] ? (
                    <S.Baskets_image
                      src={`https://storage.googleapis.com/${el.images[0]}`}
                    />
                  ) : (
                    <S.Baskets_image src={"/상품 기본이미지.png"} />
                  )}
                  <S.Baskets_seller_price>
                    <S.Baskets_seller>상품명 : {el.name}</S.Baskets_seller>
                    <S.Baskets_price>가격 : {el.price} 원</S.Baskets_price>
                  </S.Baskets_seller_price>
                </S.Baskets_item>
              ))
            ) : (
              <div>오늘 본 상품이 없습니다.</div>
            )}
          </S.Baskets_right>
        </S.Baskets>
      </S.Wrapper>
    </S.Container>
  );
}

// picture
// userPoint
