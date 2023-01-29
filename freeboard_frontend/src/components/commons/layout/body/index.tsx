import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 70%;
  width: 50%;
`;

export default function LayoutBody(props): JSX.Element {
  return (
    <Wrapper>
      <div>{props.children}</div>
    </Wrapper>
  );
}
