import LayoutHeader from "./header";
import LayoutBanner from "./banner";
import LayoutBody from "./body";
import LayoutNavigation from "./navigation";
import LayoutSidebar from "./sidebar";
import LayoutFooter from "./footer";

interface IPropsLayout {
  children: JSX.Element;
}
export default function Layout(props: IPropsLayout) {
  // console.log(props.children);
  return (
    <>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />
      <div style={{ display: "flex", height: "200px" }}>
        <LayoutSidebar />
        <LayoutBody>
          <div>{props.children}</div>
        </LayoutBody>
      </div>
      <LayoutFooter />
    </>
  );
}
