import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";

interface IApolloSettingProps {
  children: JSX.Element;
}
export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
  // 이미지 업로드를 위한 셋팅
  const uploadLink = createUploadLink({
    uri: "http://backend-practice.codebootcamp.co.kr/graphql", // 15부터 적용
  });
  // 이미지 업로드를 위한 셋팅

  const client = new ApolloClient({
    // uri: "http://backend-practice.codebootcamp.co.kr/graphql", // 15부터 적용
    link: ApolloLink.from([uploadLink]), // 이미지 업로드를 위한 셋팅 (위의 업로드를 배열로 가져옴, 차후 로그인 방식도 동일하게 진행 가능)
    // package.json에서 "@apollo/client": "^3.7.1", 로 변경 ( 타입 에러 )
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