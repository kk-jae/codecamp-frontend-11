import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

interface IApolloSettingProps {
  children: JSX.Element;
}
export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
  const client = new ApolloClient({
    // uri: "http://backend-example.codebootcamp.co.kr/graphql", //1~14까지 적용
    uri: "http://http://backend-practice.codebootcamp.co.kr/graphql", // 15부터 적용
    cache: new InMemoryCache(), // 컴퓨터의 메모리에 백엔드에서 받아온 데이터 임시로 저장해놓기 => 나중에 더 자세히 알아보기
  });
  // graphql API를 위한 초기 설치

  // prettier-ignore
  return (
    <ApolloProvider client={client}>    
      {props.children}
    </ApolloProvider>
  )
}
