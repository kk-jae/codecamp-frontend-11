import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
`;
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px 0px 10px 0px;
`;
export const Buyer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
export const Buyer_left = styled.div`
  width: 5%;
  margin: 0px 15px 0px 15px;
`;

export const Buyer_img = styled.img`
  width: 100%;
  border-radius: 50%;
`;

export const Buyer_right = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Buyer_name = styled.div`
  margin: 8px 0px 8px 0px;
  font-weight: 700;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;
export const Buyer_createdAt = styled.div`
  font-size: 10px;
  color: gray;
  font-weight: 500;
  padding-left: 8px;
`;

export const Buyer_contents = styled.div`
  font-size: 15px;
  color: #3a3a3a;
  padding-bottom: 10px;
`;

export const Buyer_right_btn = styled.div``;

export const DeleteBtn = styled.button`
  color: gray;
  font-size: 12px;
  border: 1px solid #eaeaea;
  background-color: white;
  cursor: pointer;
`;
