import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 100px;
  background-color: #e0e3da;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Header = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10% 0px 10%;
  font-weight: 600;
`;
export const Header_left = styled.div`
  font-size: 23px;
`;
export const Header_right = styled.div`
  width: 500px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: 23px;
`;

export const right_item = styled.div`
  cursor: pointer;
`;
