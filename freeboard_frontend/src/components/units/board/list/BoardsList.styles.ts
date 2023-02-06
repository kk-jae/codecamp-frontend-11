import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const Wrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;

// export const Wrapper_title = styled.div`
//   display: flex;
//   flex-direction: row;
//   border-top: 1px solid black;
//   border-bottom: 1px solid #bdbdbd;
//   font-size: 18px;
//   font-weight: 500;
// `;
export const List_Container = styled.div`
  width: 100%;
  /* height: 300px; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const WrapperHead = styled.div``;

export const Wrapper_list = styled.div`
  display: flex;
  flex-direction: column;
  width: 18%;
  height: 300px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
  margin: 10px;
`;

export const List_img_Text = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const List_img = styled.img`
  width: 100%;
  height: 55%;
`;
// export const Title_createdAt = styled.div``;

export const List_Title_Writer_likeCount = styled.div`
  width: 90%;
  height: 40%;
  margin: 5% 0px 0px 5%;
  position: relative;
`;
// export const List_number = styled.div``;
// export const Title_number = styled.div``;
// export const Title_title = styled.div``;
// export const Title_writer = styled.div``;

export const List_writer = styled.div`
  font-size: 13px;
  color: rgb(154, 155, 167);
`;

export const List_title = styled.div`
  font-size: 18px;
  color: rgb(48, 52, 65);
  cursor: pointer;
`;

export const List_createdAt = styled.div``;
export const Like_Count = styled.div`
  width: 20%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  right: 8px;
  bottom: 8px;
  font-size: 10px;
`;

export const Count_img = styled.img``;
export const Count_num = styled.div``;

// 페이지네이션
export const Wrapper_footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  position: relative;
`;

export const CreateNewBoard = styled.button`
  position: absolute;
  right: 10px;
  width: 150px;
  height: 45px;
  background-color: white;
  border: 1px solid #ffd600;
  box-shadow: 1px 1px 4px #ffd600;
  /* border: 1px solid #f2f2f2; */
  /* border-radius: 10px; */
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-left: 8%;
  cursor: pointer;
`;
