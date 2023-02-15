import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../src/commons/library/recoil";

const FETCH_USER_LOGGEDIN = gql`
  query {
    fetchUserLoggedIn {
      _id
      email
      name
    }
  }
`;

export default function SuccessLogin() {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const { data } = useQuery(FETCH_USER_LOGGEDIN);
  const router = useRouter();

  useEffect(() => {
    if (!accessToken) {
      alert("로그인을 먼저 해주세요");
      router.push("/23-1/23-1-login");
    }
  }, []);

  // if (data === undefined) {
  //   alert("로그인을 먼저 해주세요");
  //   router.push("/23-1/23-1-login");
  // }

  return (
    <>
      <div>{data?.fetchUserLoggedIn.name}님 반가워요</div>
    </>
  );
}
