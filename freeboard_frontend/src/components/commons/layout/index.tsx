import LayoutHeader from "./header";
import LayoutBanner from "./banner";
import LayoutNavigation from "./navigation";
import LayoutFooter from "./footer";
import LayoutBody from "./body";

export default function Layout(props) {
  return (
    // <LayoutContainer>
    <>
      {/* <LayoutHeader /> */}
      {/* {!isHiddenHeader && <LayoutHeader />} */}
      {/* <LayoutNavigation /> */}
      {/* <LayoutBanner /> */}
      <LayoutBody>
        <div>{props.children}</div>
      </LayoutBody>
      {/* <LayoutFooter /> */}
    </>
    // </LayoutContainer>
  );
}
