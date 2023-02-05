import styled from "@emotion/styled";
import BodyContainer from "./container";

export default function LayoutBody(props): JSX.Element {
  return (
    <BodyContainer>
      <div>{props.children}</div>
    </BodyContainer>
  );
}
