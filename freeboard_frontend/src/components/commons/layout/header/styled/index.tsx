import styled from "@emotion/styled";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const WrapperHeader = styled.div`
  width: 100%;
  height: 10%;
  padding: 0px 50px 0px 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 2.6vh;
  font-weight: 700;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);
  animation: titleText 1s ease-in-out;
  z-index: 9999;
  position: fixed;

  @keyframes titleText {
    0% {
      transform: translateY(30px);
      opacity: 0;
    }
    92% {
      transform: translateY(-5px);
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const HeaderLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
export const HeaderImg = styled.div`
  margin-right: 10px;
`;
export const HeaderName = styled.div``;
export const HeaderRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 40%;
  height: 100%;
`;

export const HeaderRightItem = styled.div`
  cursor: pointer;
  padding: 0px 10px 0px 10px;
`;

export const WrapperBody = styled.div`
  width: 100%;
  height: 83%;
  background-color: lightblue;
  position: relative;
`;

export const BodyContent = styled.div`
  position: absolute;
  left: 10%;
  top: 50%;
  font-size: 9.2vh;
`;
export const BodyContentItem1 = styled.div`
  animation: Text1 1s ease-in-out;
  text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  font-weight: 600; /* transform: translate(-30px, 0px); */
  @keyframes Text1 {
    0% {
      transform: translate(-100px, -100px);
      opacity: 0;
    }

    100% {
      transform: translate(0px, 0px);
      opacity: 1;
    }
  }
`;
export const BodyContentItem2 = styled.div`
  animation: Text2 1s ease-in-out;
  text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  font-weight: 600;

  @keyframes Text2 {
    0% {
      transform: translate(-100px, -100px);
      opacity: 0;
    }

    100% {
      transform: translate(0);
      opacity: 1;
    }
  }
`;

export const WrapperFooter = styled.div`
  width: 100%;
  height: 17%;
`;

export const FooterItemList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const ItemListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 80%;
  cursor: pointer;
`;

export const FooterItem1 = styled.div`
  font-weight: 600;
  font-size: 3vh;
`;
export const FooterItem2 = styled.div`
  font-weight: 500;
  font-size: 2.3vh;
`;
export const FooterItemImg = styled.img``;
