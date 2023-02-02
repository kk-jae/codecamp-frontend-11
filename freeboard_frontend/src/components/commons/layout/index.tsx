import LayoutHeader from "./header";
import LayoutBanner from "./banner";
import LayoutNavigation from "./navigation";
import LayoutFooter from "./footer";
import LayoutBody from "./body";
import styled from "@emotion/styled";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LayoutNavigationBody = styled.div`
  /* background-color: red; */
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export default function Layout(props) {
  return (
    <LayoutContainer>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigationBody>
        <LayoutNavigation />
        <LayoutBody>
          <div>{props.children}</div>
        </LayoutBody>
      </LayoutNavigationBody>
      <LayoutFooter />
    </LayoutContainer>
  );
}
