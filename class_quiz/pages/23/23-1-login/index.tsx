import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../src/commons/library/recoil";

const LOGIN_USER = gql`
  mutation loginUser($password: String!, $email: String!) {
    loginUser(password: $password, email: $email) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const [loginUser] = useMutation(LOGIN_USER);

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const onClickLogin = async () => {
    try {
      const result = await loginUser({
        variables: {
          password,
          email,
        },
      });
      const accessToken = result.data?.loginUser.accessToken;
      setAccessToken(accessToken);
      // console.log(result.data?.loginUser.accessToken);

      router.push("/23-1/23-1-login-success");
    } catch (error) {
      alert("회원가입을 먼저 해주세요");
    }
  };

  return (
    <>
      <div>로그인 페이지</div>
      <div>
        이메일 : <input type="email" onChange={onChangeEmail} />
      </div>
      <div>
        비밀번호 : <input type="password" onChange={onChangePassword} />
      </div>
      <button onClick={onClickLogin}>로그인</button>
    </>
  );
}
