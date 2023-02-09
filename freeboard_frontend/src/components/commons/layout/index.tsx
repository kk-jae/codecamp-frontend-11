import LayoutHeader from "./header";
import LayoutBanner from "./banner";
import LayoutNavigation from "./navigation";
import LayoutFooter from "./footer";
import LayoutBody from "./body";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

const HIDDEN_BANNER = ["/homepage/list", "/homepage/new"];

export default function Layout(props) {
  const router = useRouter();

  const isHiddenBanner = HIDDEN_BANNER.includes(router.asPath);

  return (
    // <LayoutContainer>
    <>
      {/* <LayoutHeader /> */}
      {/* {!isHiddenHeader && <LayoutHeader />} */}
      {/* <LayoutNavigation /> */}
      {/* {!isHiddenBanner && <LayoutBanner />} */}
      <LayoutBody>
        <div>{props.children}</div>
      </LayoutBody>
      {/* <LayoutFooter /> */}
    </>
    // </LayoutContainer>
  );
}
