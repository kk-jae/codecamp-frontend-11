import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 140px;
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
  font-size: 25px;
  font-weight: 500;
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

export const Left_Container_Logo = styled.img`
  width: 100px;
  height: 80%;
  cursor: pointer;

  object-fit: cover;
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
  padding-left: 20px;
  cursor: pointer;
`;
