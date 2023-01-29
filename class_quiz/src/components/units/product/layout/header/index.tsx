import styled from "@emotion/styled";

const Wrapper = styled.div`
  height: 50px;
  background-color: tomato;
`;

export default function LayoutHeader(): JSX.Element {
  return <Wrapper>헤더 영역</Wrapper>;
}
