import styled from "@emotion/styled";

export const Container = styled.span``;

export const Btn = styled.button`
  color: gray;
  font-size: 12px;
  border: 1px solid #eaeaea;
  background-color: white;
  cursor: pointer;
`;

export const Answer = styled.form`
  /* background-color: #f5f5f5; */
  width: 1000px;
  height: 80px;
  position: relative;
`;

export const Answer_input = styled.textarea`
  background-color: #f5f5f5;
  border: none;
  padding: 10px;
  width: 100%;
  height: 100%;
  font-size: 13px;
`;
export const Answer_Btn = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const Answer_Btn_detail = styled.button`
  cursor: pointer;
  background-color: #353d4a;
  color: white;
  margin: 0px 8px 8px 0px;
  font-weight: 600;
  font-size: 12px;
`;
