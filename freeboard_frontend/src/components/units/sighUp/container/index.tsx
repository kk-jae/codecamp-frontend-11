import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import Router, { useRouter } from "next/router";
import { ChangeEvent, useRef, useState } from "react";
import SighUpUI from "../presenter";
import { CREATE_USER, UPLOAD_FILE } from "../query";

export default function SighUpContainer(): JSX.Element {
  const router = useRouter();

  const [createUser] = useMutation(CREATE_USER);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const imgRef = useRef(null);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordCheckError, setPasswordCheckError] = useState("");

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setEmailError("");
  };
  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    setNameError("");
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setPasswordError("");
  };
  const onChangePasswordCheck = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswordCheck(event.target.value);
    setPasswordCheckError("");
  };

  const onChangeUploadFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const result = await uploadFile({
      variables: {
        file: event.currentTarget.files?.[0],
      },
    });

    setImgUrl(result.data?.uploadFile.url);
  };

  const onClickImgUpload = () => {
    imgRef.current?.click();
  };

  const onClickSighUp = async () => {
    if (!email) {
      setEmailError("이메일은 필수입니다.");
    }
    if (!name) {
      setNameError("이름은 필수입니다.");
    }
    if (!password) {
      setPasswordError("비밀번호는 필수입니다.");
    }
    if (!passwordCheck) {
      setPasswordCheckError("비밀번호를 확인해주세요.");
    }

    if (password !== passwordCheck) {
      setPasswordCheckError("비밀번호가 일치하지 않습니다.");
    }

    if (email && name && password && passwordCheck) {
      try {
        const result = await createUser({
          variables: {
            createUserInput: {
              email,
              password,
              name,
            },
          },
        });

        console.log(result);
        Modal.success({
          content: "회원가입을 성공하였습니다.",
        });
        router.push("/homepage/list");
      } catch (error) {
        if (error instanceof Error)
          Modal.error({
            content: error.message,
          });
      }
    }
  };

  return (
    <SighUpUI
      imgUrl={imgUrl}
      onChangeEmail={onChangeEmail}
      onChangeName={onChangeName}
      onChangePassword={onChangePassword}
      onChangePasswordCheck={onChangePasswordCheck}
      onChangeUploadFile={onChangeUploadFile}
      onClickSighUp={onClickSighUp}
      onClickImgUpload={onClickImgUpload}
      emailError={emailError}
      nameError={nameError}
      passwordError={passwordError}
      passwordCheckError={passwordCheckError}
      imgRef={imgRef}
    />
  );
}
