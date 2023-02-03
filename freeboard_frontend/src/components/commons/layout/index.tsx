import LayoutHeader from "./header";
import LayoutBanner from "./banner";
import LayoutNavigation from "./navigation";
import LayoutFooter from "./footer";
import LayoutBody from "./body";
import styled from "@emotion/styled";
import { Anchor, Row, Col } from "antd";

const LayoutContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// const HIDDEN_HEADERS = [
//   "/section13/13-01-library-icon",
//   "/section13/13-02-library-star",
//   // ...
//   // ...
//   // ...
// ]
// const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);

export default function Layout(props) {
  return (
    <LayoutContainer>
      {/* <LayoutHeader /> */}
      {/* { !isHiddenHeader && <LayoutHeader/>}  */}

      <LayoutBanner />
      <LayoutNavigation />
      <LayoutBody>
        <div>{props.children}</div>
      </LayoutBody>
      <LayoutFooter />
    </LayoutContainer>
  );
}
