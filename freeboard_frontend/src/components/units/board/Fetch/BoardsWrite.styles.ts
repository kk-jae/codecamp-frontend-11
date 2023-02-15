import styled from "@emotion/styled";
//과제
export const Container = styled.div`
  padding: 5% 0 5% 0;
  width: 100%;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const Wrapper = styled.div`
  width: 80vw;
  min-height: 80vh;
  display: flex;
  flex-direction: row;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 1px 1px 12px 1px rgb(33, 25, 34);
`;

export const Wrapper_Left = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;
export const ImageItem = styled.img`
  width: 100%;
  margin-top: 10%;
  object-fit: contain;
  border-radius: 20px;
  top: 0;
  left: 0;
`;

export const Wrapper_Center = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 18px;
`;

export const Center_Top = styled.div`
  width: 100%;
  height: 7%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15px;
`;
export const Center_Top_left = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
export const Writer_Img = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

export const Writer_Name = styled.div`
  font-size: 20px;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Center_Top_right = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  position: relative;
`;
export const Writer_Date = styled.div`
  font-size: 13px;
  color: gray;
`;

export const Center_Middle = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Center_Top_right_file_gps = styled.div`
  /* position: absolute; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Right_file = styled.img`
  width: 20px;
  height: 20px;
`;

export const Right_Gps = styled.img`
  width: 25px;
  height: 25px;
  margin-left: 5px;
`;

export const Center_Middle_title_detail_comment = styled.div`
  width: 100%;
  height: 100%;
`;
export const Center_Middle_title_detail = styled.div`
  width: 100%;
  /* height: 50%; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 50px;
`;

export const Center_Middle_comment = styled.div`
  width: 100%;

  /* height: 50%; */
`;
export const Center_Middle_comment_text = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const Body_Title = styled.div`
  width: 100%;
  overflow: hidden;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 10px;
`;
export const Body_detail = styled.div`
  font-size: 20px;
  font-weight: 500;
`;
export const Body_Like = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const Like_left = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
`;
export const Like_left_img = styled.img`
  width: 20px;
  height: 20px;
`;

export const Like_left_count = styled.div`
  color: #ffd600;
`;

export const Like_right = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
`;

export const Body_youtube = styled.div`
  width: 100px;
  height: 100px;
`;

export const Like_right_img = styled.img`
  width: 20px;
  height: 20px;
`;
export const Like_right_count = styled.div`
  color: gray;
`;

export const Body_Btn = styled.div``;

export const Body_Btn_List = styled.button`
  cursor: pointer;
`;
export const Body_Btn_update = styled.button`
  cursor: pointer;
`;
export const Body_Btn_delete = styled.button`
  cursor: pointer;
`;

export const Footer = styled.div``;

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
