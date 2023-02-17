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
import { Modal } from "antd";

export interface IData {
  email: string;
  password: string;
}

export default function LogInPageContainer() {
  const router = useRouter();

  const [loginUser] = useMutation(LOGIN_USER);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const { register, handleSubmit, formState } = useForm<IData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickLogIn = async (data: IData): Promise<void> => {
    try {
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
      Modal.success({
        content: "로그인에 성공하였습니다.",
      });
    } catch (error) {
      if (error instanceof Error)
        Modal.error({
          content: error.message,
        });
    }
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
