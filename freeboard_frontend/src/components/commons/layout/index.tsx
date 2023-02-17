import LayoutHeader from "./header";
import LayoutBanner from "./banner";
import LayoutNavigation from "./navigation";
import LayoutFooter from "./footer";
import LayoutBody from "./body";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

interface IProps {
  children: JSX.Element;
}

export default function Layout(props: IProps) {
  const router = useRouter();

  const HIDDEN_BANNER = [
    "/homepage",
    // "/homepage/list",
    // "/homepage/new",
    // "/homepage/logIn",
    // "/homepage/sighUp",
    // `/homepage/${router.query.boardId}`,
    // "/homepage/myPage",
  ];

  // // console.log(router.query);
  const isHiddenBanner = HIDDEN_BANNER.includes(router.asPath);

  return (
    // <LayoutContainer>
    <>
      <LayoutHeader />
      <LayoutNavigation />
      {isHiddenBanner && <LayoutBanner />}
      <LayoutBody>
        <div>{props.children}</div>
      </LayoutBody>
      {/* <LayoutFooter /> */}
    </>
    // </LayoutContainer>
  );
}
