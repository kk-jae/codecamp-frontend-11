import LayoutHeader from "./header";
import LayoutBanner from "./banner";
import LayoutBody from "./body";
import LayoutNavigation from "./navigation";
import LayoutSidebar from "./sidebar";
import LayoutFooter from "./footer";
import styled from "@emotion/styled";

interface IPropsLayout {
  children: JSX.Element;
}

export default function Layout(props: IPropsLayout) {
  // console.log(props.children);
  return (
    <div>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />
      <div style={{ display: "flex" }}>
        <LayoutSidebar />
        <LayoutBody>
          <div>{props.children}</div>
        </LayoutBody>
      </div>
      <LayoutFooter />
    </div>
  );
}
