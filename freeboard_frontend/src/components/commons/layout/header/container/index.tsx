import HeaderUI from "../presenter";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../../commons/libraries/stores";

export default function HeaderContainer() {
  const router = useRouter();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const onClickMovePage = (event) => {
    router.push(event.currentTarget.id);
  };

  const onClickLogo = () => {
    router.push("/homepage");
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
