import {
  Container,
  HeaderWrapper,
  HeaderTitle,
  HeaderContent,
  BodyWrapper,
  BodyHeader,
  BodyContent,
  FooterWrapper,
  FooterContent,
  HeaderTitlePhoto,
  HeaderTitleName,
  HeaderTitleMy,
  HeaderTop,
  HeaderTitleImp,
  HeaderImg,
  HeaderContentItem,
  NameSpan,
  BodyItem,
  BodyScroll,
  BodyContainer,
  Body,
} from "../../styles/01";

export default function EmotionPage() {
  //자바 쓰는 곳
  //퀴즈
  return (
    <Container>
      <HeaderWrapper>
        <HeaderTop>
          <HeaderImg src="/quiz_1/top.png" />
        </HeaderTop>
        <HeaderTitle>
          <HeaderTitleMy>마이</HeaderTitleMy>
          <HeaderTitleImp>
            <HeaderTitlePhoto src="/quiz_1/profile.png" alt="프로필" />
            <HeaderTitleName>
              임정아 <NameSpan src="/quiz_1/arrow.png" alt=">" />
            </HeaderTitleName>
          </HeaderTitleImp>
        </HeaderTitle>
        <HeaderContent>
          <HeaderContentItem>공지사항</HeaderContentItem>
          <HeaderContentItem>이벤트</HeaderContentItem>
          <HeaderContentItem>FAQ</HeaderContentItem>
          <HeaderContentItem>Q&A</HeaderContentItem>
        </HeaderContent>
      </HeaderWrapper>

      <Body>
        <BodyContainer>
          <BodyWrapper>
            <BodyItem>
              <BodyHeader>Q. 01</BodyHeader>
              <BodyContent>리뷰 작성은 어떻게 하나요?</BodyContent>
            </BodyItem>
            <BodyScroll src="/quiz_1/arrow_right.png"></BodyScroll>
          </BodyWrapper>
        </BodyContainer>
        <BodyContainer>
          <BodyWrapper>
            <BodyItem>
              <BodyHeader>Q. 02</BodyHeader>
              <BodyContent>리뷰 수정/삭제는 어떻게 하나요?</BodyContent>
            </BodyItem>
            <BodyScroll src="/quiz_1/arrow_right.png"></BodyScroll>
          </BodyWrapper>
        </BodyContainer>
        <BodyContainer>
          <BodyWrapper>
            <BodyItem>
              <BodyHeader>Q. 03</BodyHeader>
              <BodyContent>아이디/비밀번호를 잊어버렸어요</BodyContent>
            </BodyItem>
            <BodyScroll src="/quiz_1/arrow_right.png"></BodyScroll>
          </BodyWrapper>
        </BodyContainer>
        <BodyContainer>
          <BodyWrapper>
            <BodyItem>
              <BodyHeader>Q. 04</BodyHeader>
              <BodyContent>회원탈퇴를 하고싶어요.</BodyContent>
            </BodyItem>
            <BodyScroll src="/quiz_1/arrow_right.png"></BodyScroll>
          </BodyWrapper>
        </BodyContainer>
        <BodyContainer>
          <BodyWrapper>
            <BodyItem>
              <BodyHeader>Q. 05</BodyHeader>
              <BodyContent>출발지 설정은 어떻게 하나요?</BodyContent>
            </BodyItem>
            <BodyScroll src="/quiz_1/arrow_right.png"></BodyScroll>
          </BodyWrapper>
        </BodyContainer>
        <BodyContainer>
          <BodyWrapper>
            <BodyItem>
              <BodyHeader>Q. 06</BodyHeader>
              <BodyContent>비밀번호를 변경하고 싶어요.</BodyContent>
            </BodyItem>
            <BodyScroll src="/quiz_1/arrow_right.png"></BodyScroll>
          </BodyWrapper>
        </BodyContainer>
      </Body>

      <FooterWrapper>
        <FooterContent></FooterContent>
      </FooterWrapper>
    </Container>
  );
}
