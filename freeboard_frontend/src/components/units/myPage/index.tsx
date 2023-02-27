import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/libraries/stores";
import useQueryfetchUserLoggeIn from "../../commons/hooks/query/useQueryFetchUserLoggeIn";
import * as S from "../myPage/index.styled";

export default function MyPageUI(): JSX.Element {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const { data } = useQueryfetchUserLoggeIn();

  useEffect(() => {
    console.log(JSON.parse(localStorage.baskets));
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
          <S.Baskets_left>최근 본 상품</S.Baskets_left>
          <S.Baskets_right>
            {/* {JSON.parse(localStorage.baskets).map((el) => (
              { el.images[0] ?
                <S.Baskets_images src={`https://storage.googleapis.com/${el.images[0]}`}/>

              }

            ))} */}
          </S.Baskets_right>
        </S.Baskets>
      </S.Wrapper>
    </S.Container>
  );
}

// picture
// userPoint
