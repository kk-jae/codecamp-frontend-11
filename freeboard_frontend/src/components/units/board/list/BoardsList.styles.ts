import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative; // List Item hover시 전체 화면의 가운데로?
`;

export const Container_top = styled.div`
  width: 80%;
  height: 10vh;
  padding: 0px 20px 0px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SearchContents = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;
export const SearchContents_input = styled.input`
  width: 100%;
  height: 40px;
  background-color: #f2f2f2;
  border-radius: 10px;
  padding-left: 10px;
  border: none;
`;
export const CreateNewBoard = styled.button`
  cursor: pointer;
  height: 40px;
  background: #000000;
  border-radius: 10px;
  color: white;
  font-weight: 700;
`;

export const SearchContents_button = styled.div`
  position: absolute;
  font-size: 20px;
  right: 10px;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Contents = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

export const BestItemMainTitle = styled.div`
  font-size: 38px;
  font-weight: 700;
  padding: 15px;
`;

export const BestItem = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 0px 20px 0px;
`;

export const ItemWrapper = styled.div`
  width: 20%;
  height: 250px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
`;
export const BestItemImg = styled.img`
  border-radius: 30px 30px 0px 0px;
  width: 100%;
  height: 60%;
`;

export const BestItemText = styled.div`
  height: 35%;
  padding: 3px 13px 0px 13px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const TextTop = styled.div``;

export const TextBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5px;
`;

export const Bottom_Left = styled.div``;
export const Bottom_Right = styled.div``;

export const BestItemTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
`;

export const BestItemWriter = styled.div``;
export const BestItemCreatedAt = styled.div`
  color: #828282;
  font-size: 12px;
`;
export const BestItemLikeCount = styled.div`
  display: flex;
  flex-direction: column;
`;

export const List_Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

// export const Item_Top = styled.div`
//   width: 100%;
//   height: 220px;
// `;

export const List_Item = styled.div`
  width: 100%;
  /* height: 350px; */
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border-bottom: 1px solid black;
  padding: 5px;

  :hover {
    transform: scale(1.01);
  }

  box-shadow: 1px 1px 3px white;
`;

export const Item_Bottom = styled.div`
  width: 100%;
`;

export const Bottom = styled.div`
  width: 100%;
  color: black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Bottom_Num = styled.div`
  width: 10%;
  text-align: center;
`;

export const Bottom_title = styled.div`
  width: 35%;
  text-align: center;
`;
export const Bottom_writer = styled.div`
  width: 10%;
  text-align: center;
`;

export const Bottom_Time = styled.div`
  width: 20%;
  text-align: center;
`;

// 페이지네이션
export const Wrapper_footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;
