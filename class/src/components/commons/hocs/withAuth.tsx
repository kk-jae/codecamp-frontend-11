import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilValueLoadable } from "recoil";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";
import { restoreAccessTokenLoadable } from "../../../commons/stores";

// 실제로 만들때는 로그인체크 -> withAuth 로 많이 사용합니다.
export const withAuth = (컴포넌트: any) => (프롭스: any) => {
  const router = useRouter();
  const aaa = useRecoilValueLoadable(restoreAccessTokenLoadable);

  // 1. 로그인체크 (refreshToken 학습 이전)
  // useEffect(() => {
  //   if (localStorage.getItem("accessToken") === null) {
  //     alert("로그인 후 이용 가능합니다!!");
  //     void router.push("/section23/23-05-login-check-hoc");
  //   }
  // }, []);

  // 2. 로그인 체크 (refreshToken 학습 이후) => 안좋음) _app.tsx에 이어서 총 2번 요청하게됨
  // useEffect(() => {
  //   void getAccessToken().then((newAccessToken) => {
  //     if (newAccessToken === undefined) {
  //       alert("로그인 후 이용 가능합니다!!");
  //       void router.push("/section23/23-05-login-check-hoc");
  //     }
  //   });
  // }, []);

  // 2. 로그인 체크 (refreshToken 학습 이후) => 좋음) 함수를 공유하므로 _app.tsx에 이어서 총 1번만 요청하게 됨
  useEffect(() => {
    void aaa.toPromise().then((newAccessToken) => {
      if (newAccessToken === undefined) {
        alert("로그인 후 이용 가능합니다!!");
        void router.push("/section23/23-05-login-check-hoc");
      }
    });
  }, []);

  return <컴포넌트 {...프롭스} />;
};

// next.js 하이드레이션 원리
// section 23 학습자료 이론 정독
// class기반의 로그인 체크입니다.
