import { gql, useMutation } from "@apollo/client";
import { useRef, useState } from "react";
import type { ChangeEvent } from "react";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      _id
      url
      size
    }
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function ImageUploadPage(): JSX.Element {
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);

  const uploadRef = useRef<HTMLInputElement>(null);

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.currentTarget.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value);
  };
  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.currentTarget.value);
  };

  const onClickCreateBoard = async () => {
    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer,
          password,
          title,
          contents,
          images: [imageUrl],
        },
      },
    });

    console.log(result);
  };

  const onChangeFile = async (
    event: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    // console.log(event.target.files[0]);
    const file = event.target.files?.[0];

    // const checkValidationFile = () => {
    if (typeof file === "undefined") {
      alert("파일이 없습니다!");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("파일의 용량이 너무 큽니다 (제한 : 5MB) ");
      return;
    }

    // };

    const result = await uploadFile({
      variables: {
        file: file,
      },
    });

    setImageUrl(result.data?.uploadFile.url);
  };

  const onClickUploadFile = () => {
    uploadRef.current?.click();
  };

  return (
    <div>
      <div>
        작성자 : <input onChange={onChangeWriter} />
      </div>
      <div>
        비밀번호 : <input onChange={onChangePassword} />
      </div>
      <div>
        제목 : <input onChange={onChangeTitle} />
      </div>
      <div>
        내용 : <input onChange={onChangeContents} />
      </div>
      <div>
        <input
          style={{ display: "none" }}
          type="file"
          onChange={onChangeFile}
          ref={uploadRef}
          accept="image/jpeg,image/png"
        />
      </div>
      <button
        style={{ width: "100px", height: "100px", backgroundColor: "gray" }}
        onClick={onClickUploadFile}
      >
        이미지 업로드
      </button>
      <div>
        <img src={`https://storage.googleapis.com/${imageUrl}`} />
      </div>
      <button onClick={onClickCreateBoard}>등록하기</button>
    </div>
  );
}
