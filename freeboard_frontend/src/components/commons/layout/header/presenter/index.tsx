import * as S from "../styled/index";
import { UserOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Avatar, Space } from "antd";
import { ifError } from "assert";

// const onClickScroll = () => {
//   window.scroll(0, 5000);
// };

const HeaderFooterList = [
  { name: "프로필", english: "PROFILE" },
  { name: "경력", english: "CAREER" },
  { name: "기술", english: "SKILLS" },
];

export default function HeaderUI() {
  return (
    <S.HeaderWrapper>
      <S.WrapperHeader>
        <S.HeaderLeft>
          <S.HeaderImg>
            <Space size={10} wrap>
              <Avatar src={<img src="./favicon.ico" alt="avatar" />} />
            </Space>
          </S.HeaderImg>
          <S.HeaderName>kwon</S.HeaderName>
        </S.HeaderLeft>
        <S.HeaderRight>
          <S.HeaderRightItem>소개</S.HeaderRightItem>
          <S.HeaderRightItem>포트폴리오</S.HeaderRightItem>
          <S.HeaderRightItem>마무리</S.HeaderRightItem>
        </S.HeaderRight>
      </S.WrapperHeader>
      <S.WrapperBody>
        <S.BodyContent>
          <S.BodyContentItem1>안녕하세요</S.BodyContentItem1>
          <S.BodyContentItem2>만나서 반갑습니다.</S.BodyContentItem2>
        </S.BodyContent>
      </S.WrapperBody>
      <S.WrapperFooter>
        <S.FooterItemList>
          {HeaderFooterList.map((el) => (
            <>
              <S.ItemListWrapper>
                <S.FooterItem1>{el.english}</S.FooterItem1>
                <S.FooterItem2>{el.name}</S.FooterItem2>
              </S.ItemListWrapper>
            </>
          ))}
        </S.FooterItemList>

        {/* <S.FooterItem1>프로필</S.FooterItem1>
          <S.FooterItem2>경력</S.FooterItem2>
          <S.FooterItem3>기술</S.FooterItem3> */}
      </S.WrapperFooter>
    </S.HeaderWrapper>
  );
}
