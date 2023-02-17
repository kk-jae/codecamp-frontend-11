import { useRouter } from "next/router";
import { useEffect } from "react";

// 실제로 만들때는 로그인체크 -> withAuth 로 많이 사용합니다.
export const withAuth = (컴포넌트: any) => (프롭스: any) => {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      alert("로그인 후 이용 가능합니다!!");
      void router.push("/section23/23-05-login-check-hoc");
    }
  }, []);

  return <컴포넌트 {...프롭스} />;
};

// next.js 하이드레이션 원리
// section 23 학습자료 이론 정독
// class기반의 로그인 체크입니다.
