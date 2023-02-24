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
  border: 1px solid blue;
`;

export const SearchContents = styled.div``;
export const SearchContents_input = styled.input``;
export const SearchContents_button = styled.button``;

export const Top_PageNations = styled.div``;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Contents = styled.div`
  width: 80%;
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
    transform: scale(1.02);
  }

  box-shadow: 1px 1px 3px white;
`;

// export const Top_img = styled.img``;

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
`;

export const CreateNewBoard = styled.button`
  cursor: pointer;
`;
