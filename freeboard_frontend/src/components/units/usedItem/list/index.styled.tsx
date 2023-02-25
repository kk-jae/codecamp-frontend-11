import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const Container2 = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
`;
export const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`;

export const Item = styled.div`
  width: 20%;
  height: 200px;
  margin: 15px;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  cursor: pointer;
`;
export const Item_Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  z-index: -1;
  border-radius: 10px;
`;

export const Item_Text = styled.div`
  width: 100%;
  height: 20%;
  background-color: black;
  color: white;
  font-size: 13px;
  opacity: 0.7;
  overflow: hidden;
  padding: 1% 0px 0px 10px;
  display: flex;
  flex-direction: column;
`;

export const Seller = styled.div``;
export const Name = styled.div`
  font-weight: 700;
`;
export const Remark = styled.div`
  font-weight: 500;
  font-size: 10px;
`;

export const Price = styled.div`
  position: absolute;
  background-color: #151348;
  padding: 3px 5px 3px 5px;
  opacity: 0.5;
  color: white;
  font-weight: 700;
  font-size: 10px;
  top: 8px;
  right: 8px;
`;

export const NewUseItem = styled.button`
  text-align: center;
  position: fixed;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  right: 21%;
  bottom: 5%;
  font-weight: 700;
  color: white;
  background-color: black;
  cursor: pointer;
`;

//   cursor: pointer;
//   height: 40px;
//   background: #000000;
//   border-radius: 10px;
//   color: white;
//   font-weight: 700;
