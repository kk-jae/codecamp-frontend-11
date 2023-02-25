import * as S from "../styled/index";
import { Avatar, Space } from "antd";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../../commons/libraries/stores/index";
import { useQuery } from "@apollo/client";
import { FETCH_USER_LOGGEDIN } from "../query";
import { IProps } from "../types";
// import { v4 as uuidv4 } from "uuid";

const HeaderRight = [
  { name: "111", url: "" },
  { name: "222", url: "" },
  { name: "333", url: "" },
  // { name: "충전하기", url: "/homepage/payment" },
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
          </S.Right_Container_Button>
        </S.Right_Container>
      </S.Wrapper>
    </S.Container>
  );
}
