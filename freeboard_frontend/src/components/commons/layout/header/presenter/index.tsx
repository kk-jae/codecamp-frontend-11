import * as S from "../styled/index";
import { Avatar, Space } from "antd";

export default function HeaderUI(props) {
  const HeaderRight = [
    { name: "소개" },
    { name: "로그인" },
    { name: "회원가입" },
  ];

  return (
    <S.HeaderWrapper>
      <S.WrapperHeader>
        <S.HeaderLeft>
          <S.HeaderImg>
            <Space size={10} wrap>
              <Avatar src={<img src="/favicon.ico" alt="avatar" />} />
            </Space>
          </S.HeaderImg>
          <S.HeaderName>권현재</S.HeaderName>
        </S.HeaderLeft>
        <S.HeaderRight>
          <S.HeaderRightSearch>
            <S.SearchInput placeholder="게시물을 검색하세요" />
            <S.SearchImg src="/BoardPage/List_newBoard.png" alt="돋보기" />
          </S.HeaderRightSearch>
          {HeaderRight.map((el, index) => (
            <S.HeaderRightItem key={index}>{el.name}</S.HeaderRightItem>
          ))}
          {/* <S.HeaderRightItem>소개</S.HeaderRightItem>
          <S.HeaderRightItem>포트폴리오</S.HeaderRightItem>
          <S.HeaderRightItem>마무리</S.HeaderRightItem> */}
          <S.HeaderRightWeather>{props.weather}</S.HeaderRightWeather>
        </S.HeaderRight>
      </S.WrapperHeader>
    </S.HeaderWrapper>
  );
}
