import HeaderUI from "../presenter";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import type { MouseEvent } from "react";
import { accessTokenState } from "../../../../../commons/stores";

export default function HeaderContainer() {
  const router = useRouter();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const onClickMovePage = (event: MouseEvent<HTMLSpanElement>) => {
    router.push(event.currentTarget.id);
  };

  const onClickLogo = () => {
    router.push("/");
  };

  const onClickLogin = () => {
    if (!accessToken) {
      router.push("/homepage/logIn");
    }

    if (accessToken) {
      router.push("/homepage/list");
    }
    // 로그아웃
  };

  const onClickSighUp = () => {
    if (!accessToken) {
      router.push("/homepage/sighUp");
    }

    if (accessToken) {
      router.push("/homepage/list");
    }
  };

  // //  (accessToken);

  return (
    <>
      <HeaderUI
        onClickLogin={onClickLogin}
        onClickMovePage={onClickMovePage}
        onClickLogo={onClickLogo}
        onClickSighUp={onClickSighUp}
      />
    </>
  );
}
