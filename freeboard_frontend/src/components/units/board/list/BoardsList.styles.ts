import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: black;
  color: white;
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
  width: 60%;
`;

export const List_Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  /* display: grid;
  grid-template-columns: repeat(
    3,
    1fr
  ); // 1fr 1fr 1fr 1fr; colum 을 3줄, 1fr 크기로 나눈다 */
`;

export const List_Item = styled.div`
  width: 300px;
  height: 350px;
  overflow: hidden;
  border-radius: 30px;
  margin: 20px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  :hover {
    transform: scale(1.02);
  }

  box-shadow: 1px 1px 3px white;
`;

export const Item_Top = styled.div`
  width: 100%;
  height: 220px;
`;

export const Top_img = styled.img`
  width: 100%;
  height: 100%;
`;

export const Item_Bottom = styled.div`
  width: 100%;
`;

export const Right_Bottom = styled.div`
  color: white;
`;

export const Bottom_writer = styled.div`
  font-size: 25px;
  font-weight: 700;
`;

export const Bottom_title = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

export const Right_right = styled.div``;

// 페이지네이션
export const Wrapper_footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  /* position: relative; */
  border: 1px solid gray;
`;

export const CreateNewBoard = styled.button`
  cursor: pointer;
`;
