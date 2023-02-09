import styled from "@emotion/styled";
import { IProps } from "./BoardsWrite.type";

export const Container = styled.div`
  /* box-sizing: board-box;
  margin: 0;
  padding: 0; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1200px;
  background-color: white;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;

export const Head = styled.div`
  font-weight: 700;
  font-size: 36px;
  padding: 40px 0px 40px 0px;
`;

export const TextError = styled.div`
  margin-left: 12px;
  font-size: 14px;
  color: red;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  width: 996px;
`;

export const FirstContent = styled.div`
  width: 100%;
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const FirstContentItem1 = styled.div`
  /* width: 100%; */
`;

export const FirstContentHead1 = styled.div`
  width: 486px;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
  display: flex;
`;

export const FirstContentInput1 = styled.input`
  width: 476px;
  padding-left: 10px;
  height: 52px;
  margin-top: 10px;
  border: 1px solid #bdbdbd;
`;

export const Content = styled.div`
  margin-bottom: 30px;
`;

export const ContentHead = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 13px;
  display: flex;
`;

export const ContentInput = styled.input`
  width: 986px;
  padding-left: 10px;
  height: 52px;
  margin-top: 10px;
  border: 1px solid #bdbdbd;
  font-size: 16px;
  font-weight: 400;

  ::placeholder {
    color: ${(props) => (props.readOnly ? "black" : "gray")};
  }
`;

export const ContentInputN = styled.textarea`
  //textarea 사용시 placeholder 위치가 위로 배치됩니다.(기본값)
  width: 986px;
  padding-left: 10px;
  height: 480px;
  margin-top: 10px;
  padding-top: 10px;
  border: 1px solid #bdbdbd;
  vertical-align: top;
`;

export const AdrTop = styled.div``;

export const AdrTopInput = styled.input`
  width: 77px;
  height: 52px;
  text-align: center;
  margin-right: 10px;
  border: 1px solid #bdbdbd;
  font-size: 16px;
  font-weight: 400;

  ::placeholder {
    color: ${(props) => (props.readOnly ? "black" : "gray")};
    /* background-color: ${(props: IProps) =>
      props.isActive ? "#FFD600" : ""}; */
  }
`;
export const AdrTopBtn = styled.button`
  background-color: black;
  color: white;
  width: 124px;
  height: 52px;
  border: 1px solid black;
  cursor: pointer;
`;
export const AdrBot = styled.div``;

export const ContentPhoto = styled.div`
  margin-bottom: 30px;
`;

export const PhotoHead = styled.div`
  display: flex;
`;

export const ContentPhotoPic1 = styled.div`
  width: 78px;
  height: 78px;
  margin-right: 20px;
  /* background-color: #bdbdbd; */
  background-color: ${(props) => (props.imageSuccess1 ? "yellow" : "#bdbdbd")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const ContentPhotoPic2 = styled.div`
  width: 78px;
  height: 78px;
  margin-right: 20px;
  background-color: ${(props) => (props.imageSuccess2 ? "yellow" : "#bdbdbd")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const ContentPhotoPic3 = styled.div`
  width: 78px;
  height: 78px;
  margin-right: 20px;
  background-color: ${(props) => (props.imageSuccess3 ? "yellow" : "#bdbdbd")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Pic = styled.div`
  font-size: 16px;
`;

export const ContentInp = styled.input`
  font-weight: 500;
  font-size: 16px;
  margin: 10px;
  accent-color: #ffd600;
`;

export const LastBtn = styled.button`
  width: 179px;
  height: 52px;
  /* background: #ffd600; */
  border: none;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 80px;
  cursor: pointer;
  background-color: ${(props: IProps) =>
    props.isActive || props.isEdit ? "#FFD600" : ""};
`;
