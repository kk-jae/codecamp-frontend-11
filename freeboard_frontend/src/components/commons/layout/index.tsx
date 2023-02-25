import LayoutSubHeader from "./subHeader";
import LayoutBanner from "./banner";
import LayoutNavigation from "./navigation";
import LayoutFooter from "./footer";
import LayoutBody from "./body";
import { useRouter } from "next/router";
import LayoutMainHeader from "./mainHeader";

interface IProps {
  children: JSX.Element;
}

export default function Layout(props: IProps) {
  const router = useRouter();

  const OPEN_BANNER = ["/homepage", "/"];
  const HIDDEN_NAVIGATION = ["/homepage", "/"];
  const OPEN_MAIN_HEADER = ["/homepage", "/"]; // 포트폴리오페이지 헤더
  const HIDDEN_SUB_HEADER = ["/homepage", "/"]; // 게시글, 중고마켓 헤더

  // //  (router.query);
  const isOpenBanner = OPEN_BANNER.includes(router.asPath);
  const isOpenMainHeader = OPEN_MAIN_HEADER.includes(router.asPath);
  const isHiddenNavigation = HIDDEN_NAVIGATION.includes(router.asPath);
  const isHiddenSubHeader = HIDDEN_SUB_HEADER.includes(router.asPath);

  return (
    <>
      {isOpenMainHeader && <LayoutMainHeader />}
      {!isHiddenSubHeader && <LayoutSubHeader />}
      {isOpenBanner && <LayoutBanner />}
      {!isHiddenNavigation && <LayoutNavigation />}
      {/* <LayoutBanner /> */}
      <LayoutBody>
        <div>{props.children}</div>
      </LayoutBody>
      {/* <LayoutFooter /> */}
    </>
    // </LayoutContainer>
  );
}
