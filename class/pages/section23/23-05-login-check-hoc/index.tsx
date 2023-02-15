import { useMutation, gql } from "@apollo/client";
import type { ChangeEvent } from "react";
import { useState } from "react";
import { useRecoilState } from "recoil";
import type {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../src/commons/types/generated/types";
import { accessTokenState } from "../../../src/commons/stores";
import { useRouter } from "next/router";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage(): JSX.Element {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [, setAccessToken] = useRecoilState(accessTokenState);

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  };
  const onClickLogin = async (): Promise<void> => {
    try {
      // 1. 로그인 mutation 날려서 accessToken 받아오기
      const result = await loginUser({
        variables: { email, password },
      });

      const accessToken = result.data?.loginUser.accessToken;
      console.log(accessToken);

      // 2) 초기값 보내주는 store에 추가
      if (accessToken === undefined) {
        alert("로그인에 실패했습니다! 다시 시도해 주세요!");
        return;
      }
      setAccessToken(accessToken);
      localStorage.setItem("accessToken", accessToken); // 보안 문제로 임시 사용 ( 나중에 지울 예정!! )
      // localStorage 안에 accessToken 이라는 이름을 만들고 accessToken을 저장합니다.

      // 3. 로그인 성공 페이지로 이동하기
      void router.push("/section23/23-05-login-check-hoc-success");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <>
      이메일 : <input type="email" onChange={onChangeEmail} />
      비밀번호 : <input type="password" onChange={onChangePassword} />
      <button onClick={onClickLogin}>로그인</button>
    </>
  );
}
