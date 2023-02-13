import styled from "@emotion/styled";
//과제
export const PAGE = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  width: 100%;
`;

export const Footer = styled.div`
  width: 100%;
`;

export const Footer_Head = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
`;

export const Footer_Head_Img = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 8px;
`;
export const Footer_Head_text = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin-right: 8px;
`;

export const Review_Rating = styled.div``;

export const Footer_Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Footer_Body_Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const Review_Writer = styled.input`
  margin-right: 30px;
  padding-left: 7px;
  font-size: 10px;
  width: 40%;
  border: 0.5px solid gray;
  border-radius: 8px;
  height: 20px;
`;
export const Review_Password = styled.input`
  height: 20px;
  margin-right: 30px;
  padding-left: 7px;
  font-size: 10px;
  width: 40%;
  border: 0.5px solid gray;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const Footer_Contents = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
`;

export const Footer_Body_Contents = styled.textarea`
  width: 100%;
  font-size: 10px;
  border: 0.5px solid gray;
  border-radius: 8px;
  padding: 5px;
`;

export const Footer_Body_Contents_number_click = styled.div`
  width: 20%;
  height: 100%;
`;

// export const Footer_Body_Contents_number = styled.div`
//   font-size: 10px;
// `;

export const Footer_Body_Contents_click = styled.button`
  width: 100%;
  height: 100%;
  background-color: white;
  border: none;
  font-size: 30px;
  color: gray;

  :hover {
    color: red;
  }
`;

export const Footer_Footer = styled.div``;
export const Footer_Review = styled.div``;
export const Footer_Review_Profile_img = styled.img``;

export const Footer_Review_Board_Writer_Rating = styled.div``;
export const Footer_Review_Board = styled.div``;

export const Footer_Review_Writer = styled.div``;
export const Footer_Review_Rating = styled.div``;

export const Footer_Review_contents = styled.div``;
export const Footer_Review_date = styled.div``;

export const Footer_Review_update_delete = styled.div``;

export const Footer_Review_update = styled.img``;
export const Footer_Review_delete = styled.img``;
