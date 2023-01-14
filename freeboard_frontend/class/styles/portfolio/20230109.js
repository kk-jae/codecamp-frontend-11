//설치한 emotion을 사용하기 위해 import로 불러와야합니다.
import styled from "@emotion/styled";
//과제
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 1200px;
  background-color: white;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;

export const Head = styled.div`
  font-weight: 700;
  font-size: 36px;
  padding: 40px;
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
  width: 105%;
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const FirstContentItem1 = styled.div`
  width: 100%;
`;

export const FirstContentHead1 = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
  display: flex;
`;

export const FirstContentInput1 = styled.input`
  width: 90%;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #bdbdbd;
  height: 52px;
`;
export const FirstContentItem2 = styled.div`
  width: 100%;
`;

export const FirstContentHead2 = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
  display: flex;
`;

export const FirstContentInput2 = styled.input`
  width: 90%;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #bdbdbd;
  height: 52px;
`;

export const Content = styled.div`
  margin-bottom: 30px;
`;

export const ContentHead = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
  display: flex;
`;

export const ContentInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #bdbdbd;
  height: 52px;
`;

export const ContentInputN = styled.textarea`
  //textarea 사용시 placeholder 위치가 위로 배치됩니다.(기본값)
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #bdbdbd;
  height: 480px;
`;

export const AdrTop = styled.div``;

export const AdrTopInput = styled.input`
  width: 50px;
  padding: 10px;
  margin-right: 10px;
`;
export const AdrTopBtn = styled.button`
  background-color: black;
  color: white;
  // width: 124px;
  padding: 8px;
`;
export const AdrBot = styled.div``;

export const ContentPhoto = styled.div`
  margin-bottom: 30px;
`;

export const PhotoHead = styled.div`
  display: flex;
`;

export const ContentPhotoPic = styled.div`
  width: 78px;
  height: 78px;
  margin-right: 20px;
  background-color: #bdbdbd;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  background: #ffd600;
  border: none;
  font-size: 16px;
  font-weight: 500;
`;
