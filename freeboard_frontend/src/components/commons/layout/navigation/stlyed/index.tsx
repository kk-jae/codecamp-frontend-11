import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 70px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 10% 0px 10%; // subHeader 패딩과 동일
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  font-weight: 600;
`;

export const Board = styled.div``;

export const Board_Menu = styled.div`
  cursor: pointer;
`;

export const UsedItem = styled.div``;
export const UsedItem_Menu = styled.div`
  cursor: pointer;
`;
