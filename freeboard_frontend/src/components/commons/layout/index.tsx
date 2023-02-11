import LayoutHeader from "./header";
import LayoutBanner from "./banner";
import LayoutNavigation from "./navigation";
import LayoutFooter from "./footer";
import LayoutBody from "./body";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

export default function Layout(props) {
  const router = useRouter();

  const HIDDEN_BANNER = [
    "/homepage/list",
    "/homepage/new",
    "/homepage/logIn",
    "/homepage/sighUp",
    `/homepage/${router.query.boardId}`,
  ];

  console.log(router.query);
  const isHiddenBanner = HIDDEN_BANNER.includes(router.asPath);

  return (
    // <LayoutContainer>
    <>
      <LayoutHeader />
      <LayoutNavigation />
      {!isHiddenBanner && <LayoutBanner />}
      <LayoutBody>
        <div>{props.children}</div>
      </LayoutBody>
      {/* <LayoutFooter /> */}
    </>
    // </LayoutContainer>
  );
}
