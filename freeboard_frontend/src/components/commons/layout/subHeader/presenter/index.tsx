import * as S from "../styled/index";
import { Avatar, Space } from "antd";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../../commons/libraries/stores/index";
import { useQuery } from "@apollo/client";
import { FETCH_USER_LOGGEDIN } from "../query";
import { IProps } from "../types";
// import { v4 as uuidv4 } from "uuid";

const HeaderRight = [
  { name: "마이페이지", url: "/homepage/myPage" },
  { name: "게시글", url: "/homepage/list" },
  { name: "중고상품", url: "/homepage/UsedItem/list" },
  { name: "충전하기", url: "/homepage/payment" },
];

export default function HeaderUI(props: IProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const { data } = useQuery(FETCH_USER_LOGGEDIN);

  return (
    <S.Container>
      <S.Wrapper>
        <S.Left_Container>
          <S.Left_Container_Logo onClick={props.onClickLogo}>
            Kwon
          </S.Left_Container_Logo>
        </S.Left_Container>
        <S.Right_Container>
          <S.Right_Container_Button>
            {HeaderRight.map((el, index) => (
              <S.Button_Item
                key={index}
                onClick={props.onClickMovePage}
                id={el.url}
              >
                {el.name}
              </S.Button_Item>
            ))}
            <S.Button_Item onClick={props.onClickSighUp}>
              {accessToken ? `${data?.fetchUserLoggedIn.name}` : "회원가입"}
            </S.Button_Item>
            <S.Button_Item onClick={props.onClickLogin}>
              {accessToken ? "로그아웃" : "로그인"}
            </S.Button_Item>
          </S.Right_Container_Button>
        </S.Right_Container>
      </S.Wrapper>
    </S.Container>
  );
}