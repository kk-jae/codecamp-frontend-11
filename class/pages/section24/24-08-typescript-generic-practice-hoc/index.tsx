import { useRouter } from "next/router";
import type { ReactElement } from "react";
import { useEffect } from "react";

// 실제로 만들때는 로그인체크 -> withAuth 로 많이 사용합니다.
// prettier-ignore
export const withAuth = (컴포넌트: () => JSX.Element) => <P extends Record<string, unknown> >(프롭스: P ):ReactElement<P> => {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      alert("로그인 후 이용 가능합니다!!");
      void router.push("/section23/23-05-login-check-hoc");
    }
  }, []);

  return <컴포넌트 {...프롭스} />;
};
