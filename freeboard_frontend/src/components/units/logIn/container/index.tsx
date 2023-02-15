import LogInPageUI from "../presenter";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../query/index";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/libraries/stores";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { schema } from "./validation";

interface IDate {
  email: string;
  password: string;
}

export default function LogInPageContainer() {
  const router = useRouter();

  const [loginUser] = useMutation(LOGIN_USER);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const { register, handleSubmit, formState } = useForm<IDate>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickLogIn = async (data: IDate) => {
    const result = await loginUser({
      variables: {
        password: data.password,
        email: data.email,
      },
    });
    const accessToken = result.data?.loginUser.accessToken;
    setAccessToken(accessToken);
    localStorage.setItem("accessToken", accessToken);
    router.push("/homepage/list");

    console.log(accessToken);
  };

  return (
    <LogInPageUI
      register={register}
      onClickLogIn={onClickLogIn}
      handleSubmit={handleSubmit}
      formState={formState}
    />
  );
}
