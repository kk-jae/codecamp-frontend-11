import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/stores";

const GLOBAL_STATE = new InMemoryCache();

interface IApolloSettingProps {
  children: JSX.Element;
}
export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

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
    const result = localStorage.getItem("accessToken");
    // getItem : localStorage에 저장된 accessToken을 사용하겠다.
    setAccessToken(result ?? ""); // 없으면 빈문자열
  }, []);

  // 이미지 업로드를 위한 셋팅
  const uploadLink = createUploadLink({
    uri: "http://backend-practice.codebootcamp.co.kr/graphql",

    // 로그인 글로벌 스테이트 사용 셋팅 시작
    headers: { Authorization: `Bearer ${accessToken}` },
    // 로그인 글로벌 스테이트 사용 셋팅 종료
  });

  const client = new ApolloClient({
    // uri: "http://backend-practice.codebootcamp.co.kr/graphql", // 15부터 적용
    link: ApolloLink.from([uploadLink]), // 이미지 업로드를 위한 셋팅 (위의 업로드를 배열로 가져옴, 차후 로그인 방식도 동일하게 진행 가능)
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
