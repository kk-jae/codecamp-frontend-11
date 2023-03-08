import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  margin: auto;
  width: 1200px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  padding: 20px;
`;

export const UsedItemDetail_Top = styled.div`
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #f5f5f5;
  border: none;
  padding: 0px 10px 10px 10px;
  line-height: 35px;
  position: relative;
  margin-bottom: 20px;
`;

export const Top_Text = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 10px 0px 10px 0px;
`;

export const Top_input = styled.input`
  padding-left: 5px;
  width: 90%;
  border: 1px solid #dcdcdc;
  background-color: white;
`;

export const Address_Img = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

export const Address_Img_Wrapper = styled.div`
  width: calc(100% - 500px); // 지도 가로 500px
  display: flex;
  flex-direction: column;
  padding: 0px 13px 0px 13px;
  position: relative;
`;

export const Address_detail = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Address_detail_Text = styled.div`
  font-weight: 700;
  padding-bottom: 10px;
`;
export const Address_detail_Input = styled.input`
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

export const Img_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Img = styled.div`
  padding: 20px 0px 10px 0px;
`;

export const Btn_Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 20px;
`;
export const Cancel_btn = styled.button`
  background-color: white;
  color: black;
  font-weight: 600;
  border: 1px solid gray;
  padding: 5px 18px 5px 18px;
  cursor: pointer;
`;

export const Create_btn = styled.button`
  background-color: #555e6a;
  color: white;
  font-weight: 600;
  padding: 5px 18px 5px 18px;
  border: 1px solid #555e6a;
  cursor: pointer;
`;

// 주소
export const Middle_middle_wrapper_box = styled.div``;

export const Middle_middle_text = styled.div`
  font-weight: 500;
  font-size: 24px;
`;
export const Middle_middle_address_detail = styled.div`
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  margin-bottom: 39px;
`;
export const Address_kakao = styled.div`
  width: 364px;
  height: 252px;
  margin-right: 26px;
`;

export const Address_search_wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  width: 83%;
`;
export const Address_search = styled.div`
  margin-bottom: 26px;
`;
export const AdrTop = styled.div`
  display: flex;
`;

export const AdrTopInput = styled.input`
  width: 77px;
  height: 52px;
  text-align: center;
  margin-right: 10px;
  border: 1px solid #bdbdbd;
  font-size: 16px;
  font-weight: 400;

  /* ::placeholder {
    color: ${(props) => (!props.readOnly ? "black" : "gray")};
  } */
`;

export const AdrTopBtn = styled.button`
  background-color: black;
  color: white;
  width: 124px;
  height: 52px;
  border: 1px solid black;
  cursor: pointer;
`;

export const AdrInput = styled.input`
  width: 100%;
  height: 56px;
  background-color: #e9e9e9;
  border: none;
  margin-bottom: 24px;
  padding-left: 19px;
`;
