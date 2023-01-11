import {
  Background,
  Container,
  Header,
  Body,
  Footer,
  GpsImg,
  LogoName,
  Email,
  Password,
  SignUp,
  FindImp,
  KaKao,
} from "/home/kwon/바탕화면/codecamp-frontend-kwon/class_quiz/styles/quiz2.js";
import { useState } from "react";
export default function Quiz2UI() {
  return (
    //HTML입력

    <Background>
      <Container>
        <Header>
          <GpsImg src="../quiz_2/Gps.png" alt="gps이미지" />
          <LogoName>잇츠로드</LogoName>
        </Header>
        <Body>
          <Email></Email>
          <Password></Password>
          <SignUp></SignUp>
          <FindImp></FindImp>
        </Body>
        <Footer>
          <KaKao></KaKao>
        </Footer>
      </Container>
    </Background>
  );
}
