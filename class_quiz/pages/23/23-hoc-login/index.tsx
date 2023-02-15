import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../src/commons/library/recoil";
import type {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../src/commons/types/generated/types";

const LOGIN_USER = gql`
  mutation ($password: String!, $email: String!) {
    loginUser(password: $password, email: $email) {
      accessToken
    }
  }
`;
export default function HocLoginPage() {
  const router = useRouter();

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onClickLogin = async () => {
    const result = await loginUser({
      variables: {
        password,
        email,
      },
    });

    const accessToken = result.data?.loginUser.accessToken;
    if (accessToken !== undefined) {
      setAccessToken(accessToken);
      localStorage.setItem("accessToken", accessToken);
      router.push("/23/23-hoc-main");
    }
  };

  return (
    <>
      <div>
        이메일 : <input onChange={onChangeEmail} />
        비밀번호 : <input onChange={onChangePassword} />
      </div>
      <button onClick={onClickLogin}> 로그인 </button>
    </>
  );
}
