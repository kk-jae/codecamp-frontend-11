import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import type { IQuery } from "../../../src/commons/types/generated/types";

const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;
//  헤더에 토큰이 있어야 조회 할 수 있는 query입니다.

export default function LoginPage(): JSX.Element {
  const router = useRouter();

  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      alert("로그인 후 이용 가능합니다!!");
      void router.push("/section23/23-03-login-check");
    }
  }, []);

  return (
    <>
      <div>{data?.fetchUserLoggedIn.name}님 환영합니다!</div>
    </>
  );
}
