import styled from "@emotion/styled";

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2.2vh 0 2.2vh 0;
  /* background-color: #ffd600; */
  background-color: #ffffff;
`;

export const WrapperHeader = styled.div`
  width: 100%;
  padding: 0px 50px 0px 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 2.6vh;
  font-weight: 700;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  /* animation: titleText 1s ease-in-out;

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
  } */
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
  /* width: 40%; */
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderRightSearch = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 2vh;
  position: relative;
`;
export const SearchInput = styled.input`
  width: 250px;
  height: 30px;
  border-radius: 20px;
  border: 1px solid #ffd600;
  padding-left: 11px;
`;
export const SearchImg = styled.img`
  position: absolute;
  height: 30px;
  right: 8px;
  scale: 0.5;
`;

export const HeaderRightItem = styled.div`
  cursor: pointer;
  padding: 0px 10px 0px 10px;
`;

export const HeaderRightWeather = styled.div``;
