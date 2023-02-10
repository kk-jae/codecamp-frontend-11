// import '../styles/globals.css'

import type { AppProps } from "next/app";
import Layout from "../src/components/units/product/layout/index";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import ApolloSetting from "../src/commons/apollo";
import { RecoilRoot } from "recoil";

// graphql API를 위한 초기 설치
// InMemoryCache는 cache 저장을 위한 코드입니다

export default function App({ Component }: AppProps): JSX.Element {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <>
          <Global styles={globalStyles} />
          <Layout>
            <Component />
          </Layout>
        </>
      </ApolloSetting>
    </RecoilRoot>
  );
}
