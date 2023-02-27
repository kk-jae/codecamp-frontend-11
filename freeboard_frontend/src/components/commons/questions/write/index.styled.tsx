import styled from "@emotion/styled";

export const Container = styled.form`
  /* box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2); */
  padding-bottom: 15px;
  margin-bottom: 10px;
  border-bottom: 3px solid rgba(0, 0, 0, 0.1);
`;
export const Buyer = styled.div`
  margin-top: 13px;
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

export const Buyer_Text = styled.div`
  position: relative;
  background-color: red;
  width: 1000px;
  height: 80px;
`;
export const Buyer_contents = styled.textarea`
  padding: 10px;
  width: 100%;
  height: 100%;
  border: none;
  font-size: 13px;
  background-color: #f5f5f5;
`;

export const Btn = styled.button`
  cursor: pointer;
  position: absolute;
  background-color: #353d4a;
  color: white;
  bottom: 0;
  right: 0;
  margin: 0px 8px 8px 0px;
  font-weight: 600;
  font-size: 12px;
`;
