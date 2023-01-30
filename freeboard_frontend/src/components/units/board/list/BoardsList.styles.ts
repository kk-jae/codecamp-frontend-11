import styled from "@emotion/styled";

export const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 1200px;
  /* background-color: red; */
`;
export const Wrapper = styled.div`
  width: 100%;
`;
export const Wrapper_list = styled.div`
  display: flex;
  border-bottom: 1px solid #bdbdbd;
  font-size: 16px;
  font-weight: 400;
`;
export const Wrapper_title = styled.div`
  display: flex;
  flex-direction: row;
  border-top: 1px solid black;
  border-bottom: 1px solid #bdbdbd;
  font-size: 18px;
  font-weight: 500;
`;
export const List_number = styled.div`
  margin: 10px 0px 10px 0px;
  width: 10%;
  text-align: center;
`;
export const Title_number = styled.div`
  margin: 10px 0px 10px 0px;
  width: 10%;
  text-align: center;
`;
export const List_title = styled.div`
  margin: 10px 0px 10px 0px;
  width: 60%;
  text-align: center;
  cursor: pointer;
`;
export const Title_title = styled.div`
  margin: 10px 0px 10px 0px;
  width: 60%;
  text-align: center;
`;
export const List_writer = styled.div`
  margin: 10px 0px 10px 0px;
  width: 10%;
  text-align: center;
`;
export const Title_writer = styled.div`
  margin: 10px 0px 10px 0px;
  width: 10%;
  text-align: center;
`;
export const List_createdAt = styled.div`
  margin: 10px 0px 10px 0px;
  width: 20%;
  text-align: center;
`;
export const Title_createdAt = styled.div`
  margin: 10px 0px 10px 0px;
  width: 20%;
  text-align: center;
`;

export const Wrapper_footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  height: 80px;
  border-top: 1px solid black;
  /* background-color: red; */
`;
export const PageNation = styled.div``;

export const CreateNewBoard = styled.button`
  width: 171px;
  height: 52px;
  background-color: white;
  border: 1px solid #f2f2f2;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
`;
