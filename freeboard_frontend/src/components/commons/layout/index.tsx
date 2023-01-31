import LayoutHeader from "./header";
import LayoutBanner from "./banner";
import LayoutNavigation from "./navigation";
import LayoutFooter from "./footer";
import LayoutBody from "./body";
import styled from "@emotion/styled";

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Layout(props) {
  return (
    <DIV>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />
      <LayoutBody>
        <div>{props.children}</div>
      </LayoutBody>
      <LayoutFooter />
    </DIV>
  );
}
