import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import SighUpUI from "../presenter";
import { CREATE_USER, UPLOAD_FILE } from "../query";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./validation";

interface IData {
  email: string;
  name: string;
  pw1: string;
  pw2: string;
}

export default function SighUpContainer(): JSX.Element {
  const router = useRouter();

  const [createUser] = useMutation(CREATE_USER);

  const { register, handleSubmit, formState } = useForm<IData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSighUp = async (data: IData) => {
    console.log(data);
    const result = await createUser({
      variables: {
        createUserInput: {
          email: data.email,
          password: data.pw1,
          name: data.name,
        },
      },
    });
    router.push("/homepage/list");
  };

  return (
    <SighUpUI
      register={register}
      handleSubmit={handleSubmit}
      onClickSighUp={onClickSighUp}
      formState={formState}
    />
  );
}
