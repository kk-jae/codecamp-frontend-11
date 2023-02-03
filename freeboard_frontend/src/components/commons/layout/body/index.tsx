import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export default function LayoutBody(props): JSX.Element {
  return (
    <Wrapper>
      <div>{props.children}바디</div>
    </Wrapper>
  );
}
