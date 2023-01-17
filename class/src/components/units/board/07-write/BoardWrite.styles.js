import styled from "@emotion/styled";

export const RedInput = styled.input`
  border-color: red;
`;
// /* type ="text" onChange{props.bbb}가 props 안에서 넘어오고있음 */
// /* 그러나 함수가 없어서 props 사용이 불가하지만, 아래의 방법으로 사용 가능

export const BlueButton = styled.button`
  background-color: ${(props) => (props.isActive ? "yellow" : "")};
  // 1차 수정${(props) => (props.isActive === true ? "yellow" : "")};
  // ${(props) => (props.myColor === true ? "blue" : "")};
`;
