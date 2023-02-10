import { useMutation } from "@apollo/client";
import { useRef } from "react";
import Upload01UI from "./presenter";
import { UPLOAD_FILE } from "./query";

export default function Upload01Container(props) {
  const fileRef = useRef(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  const onChangeFile = async (event) => {
    const file = event.target.files?.[0];

    const result = await uploadFile({ variables: { file } });
    props.onChangeFileUrls(result.data.uploadFile.url, props.index);
  };

  return (
    <Upload01UI
      fileRef={fileRef}
      fileUrl={props.fileUrl}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
    />
  );
}
