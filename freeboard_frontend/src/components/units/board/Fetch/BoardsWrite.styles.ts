import styled from "@emotion/styled";
//과제
export const PAGE = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 2%;
`;

export const Container = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Head = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  padding-left: 100px;
  padding-right: 100px;
`;

export const Head_header = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 15px;
`;

export const Header_right = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
export const GpsImp = styled.div`
  background-color: gray;
  font-size: 16px;
  font-weight: 400;
  color: white;
  padding: 8px;
`;

export const Header_left = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const Writer_Name_Date = styled.div``;
export const WriterImp = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Writer_Img = styled.img`
  margin: 0px 15px 0px 0px;
`;

export const WriterImp_left = styled.div`
  display: flex;

  flex-direction: row;
  align-items: center;
`;
export const Writer_Name = styled.div`
  font-size: 24px;
  font-weight: 500;
`;
export const Writer_Date = styled.div`
  font-size: 16px;
  font-weight: 400;
  padding-top: 5px;
  color: #828282;
`;

export const WriterImp_right = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Right_file = styled.img`
  margin-right: 30px;
`;

export const Right_Gps = styled.img``;

export const Head_body = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Head_body_left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Body_Title = styled.div`
  font-size: 36px;
  font-weight: 700;
  padding: 85px 0px 50px 0px;
`;

export const Head_body_center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Body_img = styled.img`
  width: 100%;
  height: 480px;
  background-color: gray;
  margin: 0px 0px 30px 0px;
  object-fit: cover;
`;

export const Body_detail = styled.div`
/* background-color:red; */
width:100%;
word-wrap: break-word;
`;

export const Body_youtube = styled.iframe`
  width: 40%;
  height: 240px;
  text-align: center;
  margin: 100px 0px 100px 0px;
`;

export const Body_Like = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 60px;
  width: 15%;
`;

export const Like_left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Like_left_img = styled.img``;
export const Like_left_count = styled.div`
  color: #ffd600;
`;

export const Like_right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Like_right_img = styled.img``;
export const Like_right_count = styled.div`
  color: #828282;
`;

export const Body = styled.div`
  width: calc(100% + 200px);
  border-bottom: 1px solid #bdbdbd;
`;
export const Body_Btn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 100px 0px 100px 0px;
`;

export const Body_Btn_List = styled.button`
  width: 179px;
  height: 45px;
  background-color: white;
  border: 1px solid #bdbdbd;
  cursor: pointer;
`;
export const Body_Btn_update = styled.button`
  width: 179px;
  height: 45px;
  background-color: white;
  border: 1px solid #bdbdbd;
  cursor: pointer;

  margin: 0px 1% 0px 1%;
`;
export const Body_Btn_delete = styled.button`
  width: 179px;
  height: 45px;
  background-color: white;

  border: 1px solid #bdbdbd;
  cursor: pointer;
`;

export const Footer = styled.div`
  width: calc(100% + 200px);
  display: flex;
  flex-direction: column;
`;

export const Footer_Head = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 50px 0px 50px 0px;
`;

export const Footer_Head_Img = styled.img`
  margin-right: 13px;
`;
export const Footer_Head_text = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

export const Footer_Body = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Footer_Body_Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
`;

export const Review_Writer = styled.input`
  padding: 13px 0px 13px 10px;
  margin-right: 20px;
  border: 1px solid #bdbdbd;
`;
export const Review_Password = styled.input`
  padding: 13px 0px 13px 10px;
  margin-right: 20px;
  border: 1px solid #bdbdbd;
`;
export const Review_Rating = styled.div`
  color: #bdbdbd;
`;

export const Footer_Contents = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  border: 1px solid #bdbdbd;
  margin-bottom: 50px;
`;

export const Footer_Body_Contents = styled.textarea`
  height: 140px;
  padding: 10px 0px 0px 10px;
  border: none;
`;

export const Footer_Body_Contents_number_click = styled.div`
  position: absolute;
  width: 100%;
  height: 30%;
  left: 0;
  bottom: 0;
  display: flex;
`;

export const Footer_Body_Contents_number = styled.input`
  width: 92%;
  padding-left: 10px;
  border: none;
  border-top: 1px solid #f2f2f2;
`;

export const Footer_Body_Contents_click = styled.button`
  width: 8%;
  background-color: black;
  color: white;
  font-size: 16px;
  cursor: pointer;
`;

export const Footer_Footer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const Footer_Review = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  position: relative;
  margin-bottom: 30px;

  border-bottom: 1px solid #bdbdbd;
`;
export const Footer_Review_Profile_img = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  margin: 8px 0px 0px 0px;
`;

export const Footer_Review_Board_Writer_Rating = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Footer_Review_Board = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;

export const Footer_Review_Writer = styled.div`
  font-size: 16px;
  font-weight: 500;
`;
export const Footer_Review_Rating = styled.div`
  color: #ffd600;
  font-size: 20px;
  margin-left: 20px;
`;
export const Footer_Review_contents = styled.div`
  font-size: 16px;
  font-weight: 400;
`;
export const Footer_Review_date = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #bdbdbd;
  padding-top: 18px;
  padding-bottom: 25px;
`;

export const Footer_Review_update_delete = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

export const Footer_Review_update = styled.img``;
export const Footer_Review_delete = styled.img`
  margin-left: 13px;
`;
