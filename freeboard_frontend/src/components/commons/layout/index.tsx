import LayoutHeader from "./header";
import LayoutBanner from "./banner";
import LayoutNavigation from "./navigation";
import LayoutFooter from "./footer";
import LayoutBody from "./body";
import styled from "@emotion/styled";

const Body_Navigation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export default function Layout(props) {
  return (
    <div>
      <LayoutHeader />
      <LayoutBanner />
      <Body_Navigation>
        {/* <LayoutNavigation /> */}
        <LayoutBody>
          <div>{props.children}</div>
        </LayoutBody>
      </Body_Navigation>
      <LayoutFooter />
    </div>
  );
}
