import { useState } from "react";
import LogInPageUI from "../presenter";
import type { ChangeEvent } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../query/index";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/libraries/stores";
import { useRouter } from "next/router";

export default function LogInPageContainer() {
  const router = useRouter();

  const [loginUser] = useMutation(LOGIN_USER);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setEmailError("");
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setPasswordError("");
  };

  const onClickLogIn = async () => {
    if (!email) {
      setEmailError("이메일은 필수입니다.");
    }

    if (!password) {
      setPasswordError("비밀번호는 필수입니다.");
    }

    if (email && password) {
      const result = await loginUser({
        variables: {
          password,
          email,
        },
      });
      const accessToken = result.data?.loginUser.accessToken;
      setAccessToken(accessToken);
      localStorage.setItem("accessToken", accessToken);

      router.push("/homepage/list");
    }
  };

  return (
    <LogInPageUI
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      emailError={emailError}
      passwordError={passwordError}
      onClickLogIn={onClickLogIn}
    />
  );
}
