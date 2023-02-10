import { useRef } from "react";
import { gql, useMutation } from "@apollo/client";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      _id
      url
    }
  }
`;

export default function Uploads01(props) {
  const fileRef = useRef(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  const onChangeFile = async (event) => {
    const file = event?.target.files?.[0];

    const result = await uploadFile({
      variables: { file: file },
    });
    props.onChangeFileUrls(result.data.uploadFile.url, props.index);
  };

  return (
    <div>
      {props.fileUrl !== "" ? (
        <img
          style={{ width: "100px", height: "100px" }}
          onClick={onClickUpload}
          src={`https://storage.googleapis.com/${props.fileUrl}`}
        />
      ) : (
        <div>
          <button
            onClick={onClickUpload}
            style={{ width: "100px", height: "100px", backgroundColor: "gray" }}
          >
            +
          </button>
        </div>
      )}
      <input
        type="file"
        ref={fileRef}
        onChange={onChangeFile}
        style={{ display: "none" }}
      />
    </div>
  );
}
