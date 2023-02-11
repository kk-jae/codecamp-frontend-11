import styled from "@emotion/styled";
import exp from "constants";

export const Container = styled.div`
  width: 100%;
`;
export const Wrapper_1st = styled.div`
  width: 100%;
  height: 90vh;
  background-image: url("/skipjack/skipjackMain.png");
  background-size: cover;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  align-items: center;

  :after {
    content: "";
    background-color: black;
    opacity: 0.6;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 1;
  }
`;

export const TopContainer = styled.div`
  color: white;
  font-size: 100px;
  font-weight: 700;
  margin-top: 10%;
  z-index: 3;
`;

export const Wrapper_2st = styled.div`
  width: 100%;
  height: 150vh;
`;

export const MiddleContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const MiddleBest3 = styled.div`
  font-size: 120px;
  font-weight: 800;
  color: #fbf251;
  position: absolute;
  top: -100px;
  left: 50px;
  z-index: 2;
  transform: rotate(-10deg);
`;

export const MiddleOne = styled.div`
  width: 100%;
  height: 33%;
  background-color: black;
`;
export const One = styled.div`
  padding: 40px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;
export const OneImg = styled.div`
  width: 25%;
  height: 100%;
  background-color: red;
  background-image: url("/skipjack/skipjacksub.jpg");
  background-size: cover;
  border-radius: 50px;
  /* transform: rotate(-7deg); */
  scale: 0.9;
  transition: all 0.3s ease-in-out;

  :hover {
    scale: 0.95;
  }
`;
export const OneText = styled.div`
  width: 65%;
  height: 100%;
  color: white;
  padding: 30px;
`;

export const OneText_Name = styled.div`
  font-size: 55px;
  font-weight: 800;
  padding-bottom: 20px;
`;

export const OneText_Name_kr = styled.span``;

export const OneText_Name_en = styled.span`
  font-size: 35px;
  padding-left: 20px;
`;

export const OneText_Contents = styled.div`
  width: 100%;
  font-size: 28px;
`;

export const OneImp = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-size: 40px;
  color: white;
`;

export const OneImp_Instagram = styled.div`
  transition: all 0.3s ease-in-out;

  :hover {
    scale: 1.2;
  }
`;
export const OneImp_Youtube = styled.div`
  transition: all 0.3s ease-in-out;

  :hover {
    scale: 1.2;
  }
`;
export const OneImp_FaceBook = styled.div`
  transition: all 0.3s ease-in-out;

  :hover {
    scale: 1.2;
  }
`;

export const MiddleTwo = styled.div`
  width: 100%;
  height: 33%;
  background-color: black;
`;
export const MiddleThree = styled.div`
  width: 100%;
  height: 33%;
  background-color: black;
`;
export const Wrapper_3st = styled.div`
  width: 100%;
  height: 100vh;
`;
