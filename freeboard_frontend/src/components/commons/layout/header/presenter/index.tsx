import * as S from "../styled/index";
import { Avatar, Space } from "antd";

const HeaderRight = [
  { name: "소개" },
  { name: "목록보기", url: "/homepage/list" },
  { name: "로그인" },
  { name: "회원가입" },
  { name: "마이페이지" },
];

export default function HeaderUI(props) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Left_Container>
          <S.Left_Container_Logo
            src="/skipjack/logo.jpg"
            alt="??"
            onClick={props.onClickLogo}
          />
        </S.Left_Container>
        <S.Right_Container>
          <S.Right_Container_Button>
            {HeaderRight.map((el) => (
              <S.Button_Item onClick={props.onClickMovePage} id={el.url}>
                {el.name}
              </S.Button_Item>
            ))}
          </S.Right_Container_Button>
        </S.Right_Container>
      </S.Wrapper>
    </S.Container>
  );
}
