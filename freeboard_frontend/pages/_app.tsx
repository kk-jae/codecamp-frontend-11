// import '../styles/globals.css'
import { AppProps } from "next/app";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
// graphql API를 위한 초기 설치
// InMemoryCache는 cache 저장을 위한 코드입니다

export default function App({ Component }: AppProps) {
  const client = new ApolloClient({
    uri: "http://backend-practice.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(), // 컴퓨터의 메모리에 백엔드에서 받아온 데이터 임시로 저장해놓기 => 나중에 더 자세히 알아보기
  });
  // graphql API를 위한 초기 설치

  return (
    <ApolloProvider client={client}>
      <Component />
    </ApolloProvider>
  );
}

//모든 페이지의 공통 설정들을 정리하는 곳 입니다.

// 기본 _app.js 시작
// // import '../styles/globals.css'

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }
// 기본 _app.js 종료
