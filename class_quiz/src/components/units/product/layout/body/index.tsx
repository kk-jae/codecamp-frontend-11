import styled from "@emotion/styled";

const Wrapper = styled.div`
  height: 40%;
  width: 70%;
`;

interface IPropsLayoutBody {
  children: JSX.Element;
}

export default function LayoutBody(props: IPropsLayoutBody) {
  return <Wrapper>{props.children}</Wrapper>;
}
