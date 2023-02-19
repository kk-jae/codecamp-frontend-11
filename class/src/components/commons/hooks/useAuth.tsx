import { useRouter } from "next/router";
import { useEffect } from "react";

// hooks를 만들때 use 기능을 포함한 함수면,
// 함수명에 use를 붙여 주는 것이 관례 및 권고 사항입니다. (함수명 변경 가능)

// 함수 와 customHook은 똑같은 함수입니다.
// 그러나 customHook은 use~~가 들어있다는 차이만 있습니다.
// useEffect처럼 리렌더 기능이 있는 함수가 있을 수 있으니 구분하면 유지보수에 용이합니다.

export const useAuth = (): void => {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      alert("로그인 후 이용 가능합니다!!");
      void router.push("/section23/23-05-login-check-hoc");
    }
  }, []);
};
