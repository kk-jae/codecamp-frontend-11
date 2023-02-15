import { useMutation } from "@apollo/client";
import { useRef } from "react";
import Uploads01UI from "./Uploads01.presenter";
import { UPLOAD_FILE } from "./Uploads01.query";

export default function Uploads01(props) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onClickUpload = (): void => {
    fileRef.current?.click();
  };

  const onChangeFile = async (event) => {
    const file = event.target.files?.[0];

    const result = await uploadFile({ variables: { file } });
    props.onChangeFileUrls(result.data.uploadFile.url, props.index);
  };

  return (
    <Uploads01UI
      fileRef={fileRef}
      fileUrl={props.fileUrl}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
    />
  );
}
