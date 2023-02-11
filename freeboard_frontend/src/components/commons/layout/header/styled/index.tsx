import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 100px;
  position: fixed;
  z-index: 9999;
  color: white;
  background-color: #000000;
  /* opacity: 0.8; */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 8% 0px 8%;
  opacity: 0.8;
`;

export const Wrapper = styled.div`
  font-size: 23px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Left_Container = styled.div`
  /* width: 100%; */
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Left_Container_Logo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  font-weight: 700;
  height: 80%;
  cursor: pointer;

  :hover {
    animation: logo 1.5s ease-in-out;

    @keyframes logo {
      0% {
        transform: rotate(0deg);
      }
      25% {
        transform: rotate(-5deg);
      }
      50% {
        transform: rotate(5deg);
      }
      75% {
        transform: rotate(-5deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
  }
`;

export const Right_Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Right_Container_Button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Button_Item = styled.span`
  font-weight: 600;
  padding-left: 20px;
  cursor: pointer;

  :hover {
    animation: logo 1.5s ease-in-out;

    @keyframes logo {
      0% {
        transform: rotate(0deg);
      }
      25% {
        transform: rotate(-5deg);
      }
      50% {
        transform: rotate(5deg);
      }
      75% {
        transform: rotate(-5deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
  }
`;
