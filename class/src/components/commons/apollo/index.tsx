import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
  fromPromise,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import {
  accessTokenState,
  restoreAccessTokenLoadable,
} from "../../../commons/stores";
import { onError } from "@apollo/client/link/error";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";

const GLOBAL_STATE = new InMemoryCache();

interface IApolloSettingProps {
  children: JSX.Element;
}
export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const aaa = useRecoilValueLoadable(restoreAccessTokenLoadable);

  // LocalStorage에 저장하는 방법
  // 1. 조건문
  // 2. useEffect

  // 1. 프리렌더링 예제 - process.borwer, windnw 방법
  // if (process.browser) {
  //   // 또는 if(typeof window !== "undefined")
  //   // 브라우저다, 윈도우가 있다는 동일한 말 입니다.
  //   console.log("나는 지금 브라우저다!!");
  //   const result = localStorage.getItem("accessToken");
  //   setAccessToken(result ?? ""); // 없으면 빈문자열
  // } else {
  //   console.log(
  //     "지금은 프론트엔드 서버다!! (즉, yarn dev로 실행시킨 프로그램 내부다)"
  //   );
  // }

  // 2. 프리렌더링 무시 - useEffect 방법
  useEffect(() => {
    // 1. 기존방식 (refreshToken 학습 이전)
    // const result = localStorage.getItem("accessToken");  // getItem : localStorage에 저장된 accessToken을 사용하겠다.

    // 2. 새로운방식 (refreshToken 학습 이후)
    void aaa.toPromise().then((newAccessToken) => {
      setAccessToken(newAccessToken ?? "");
    });
  }, []);

  // graphQLErrors : 에러들을 캐치해줍니다.
  // operation : 방금전에 실패했던 쿼리가 뭐였는지 알아둡니다.
  // forward : 실패했던 쿼리들을 재전송 합니다

  // 리프레쉬토큰
  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1. 에러를 캐치
    if (typeof graphQLErrors !== "undefined") {
      for (const err of graphQLErrors) {
        // 1-2 해당 에러가 토큰만료 에러인지 체크(UNAUTHENTICATED)
        if (err.extensions.code === "UNAUTHENTICATED") {
          return fromPromise(
            // 2. refreshToken으로 accessToken을 재발급 받기
            getAccessToken().then((newAccessToken) => {
              setAccessToken(newAccessToken ?? "");
              // 3. 재발급 받은 accessToken으로 방금 실패한 쿼리 재시도하기
              operation.setContext({
                headers: {
                  ...operation.getContext().headers, // Authorization : Bearer 토큰 => 만료된 토큰이 추가되어 있는 상태
                  Authorization: `Bearer ${newAccessToken}`, // 3-2. 토큰만 새걸로 바꿔치기
                },
              });
            })
          ).flatMap(() => forward(operation)); // 3-3. 방금 수정한 쿼리 재요청하기
        }
      }
    }
  });

  // 이미지 업로드를 위한 셋팅
  const uploadLink = createUploadLink({
    uri: "https://backend-practice.codebootcamp.co.kr/graphql",

    // 로그인 글로벌 스테이트 사용 셋팅 시작
    headers: { Authorization: `Bearer ${accessToken}` },
    // 로그인 글로벌 스테이트 사용 셋팅 종료
    credentials: "include",
  });

  const client = new ApolloClient({
    // uri: "http://backend-practice.codebootcamp.co.kr/graphql", // 15부터 적용
    link: ApolloLink.from([errorLink, uploadLink]), // 이미지 업로드를 위한 셋팅 (위의 업로드를 배열로 가져옴, 차후 로그인 방식도 동일하게 진행 가능)
    // package.json에서 "@apollo/client": "^3.7.1", 로 변경 ( 타입 에러 )
    // cache: new InMemoryCache(), // 컴퓨터의 메모리에 백엔드에서 받아온 데이터 임시로 저장해놓기 => 나중에 더 자세히 알아보기
    cache: GLOBAL_STATE,
  });
  // graphql API를 위한 초기 설치

  // prettier-ignore
  return (
    <ApolloProvider client={client}>    
      {props.children}
    </ApolloProvider>
  )
}

// yarn add graphql-request
