import styled from "@emotion/styled";

export const Container = styled.div`
  width: 1200px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  margin: auto;
  padding: 20px;
`;

export const UsedItemDetail_Top = styled.div`
  /* background-color: red; */
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #f5f5f5;
  border: none;
  padding: 10px;
  line-height: 35px;
  position: relative;
`;

export const Top_Seller = styled.div``;
export const Top_Name = styled.div``;
export const Top_Date = styled.div``;
export const Top_Remarks = styled.div``;
export const Top_Price = styled.div``;
export const Top_Basket = styled.button`
  position: absolute;
  top: 0;
  right: 10px;
`;

export const Top_Btn = styled.div`
  width: 120px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  bottom: 3%;
  right: 4%;
`;

export const Top_Btn_Detail = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: black;
  text-align: center;
  border-radius: 50%;
  width: 55px;
  height: 55px;
  font-weight: 700;
  cursor: pointer;
  color: white;
  font-size: 14px;
  line-height: 20px;
`;

export const UsedItemDetail_Middle = styled.div`
  padding: 10px;
`;

export const UsedItemDetail_Image = styled.img`
  width: 80%;
  height: 400px;
  object-fit: contain;
`;

// 주소
export const Bottom_left_bottom = styled.div`
  padding-left: 40px;
  font-weight: 500;
  font-size: 24px;
`;
export const Bottom_left_bottom_text = styled.div``;
export const Bottom_left_bottom_map = styled.div`
  width: 860px;
  height: 448px;
  background-color: gray;
  margin-top: 19px;
  margin-bottom: 100px;
`;
