import { ChangeEvent, useRef, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { LikeOutlined } from "@ant-design/icons";
import type { IMutation } from "../../src/commons/types/generated/types";
import type { IMutationUploadFileArgs } from "../../src/commons/types/generated/types";

const UPLOAD_IMAGE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
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
  const [imgUrl, setImgUrl] = useState("");
  const qqq = useRef<HTMLInputElement>(null);

  const [uploadImg] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_IMAGE);
  const [createBoard] = useMutation(CREATE_BOARD);

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const onClickUseRef = (): void => {
    qqq.current?.click();
  };

  const onClickCreateBoard = async () => {
    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer,
          password,
          title,
          contents,
          images: [imgUrl],
        },
      },
    });

    console.log(result);
  };

  const onChangeImgInput = async (event) => {
    // console.log(event.target.files?.[0]);

    const file = event.target.files?.[0];

    const result = await uploadImg({
      variables: {
        file: file,
      },
    });

    setImgUrl(result.data?.uploadFile.url ?? "");
    // console.log(result.data?.uploadFile.url);
  };

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

  return (
    <div>
      <div>
        작성자 :<input onChange={onChangeWriter} />
      </div>
      <div>
        비밀번호 : <input onChange={onChangePassword} />
      </div>
      <div>
        제목 :<input onChange={onChangeTitle} />
      </div>
      <div>
        내용 :<input onChange={onChangeContents} />
      </div>
      <LikeOutlined style={{ cursor: "pointer" }} onClick={onClickUseRef} />
      <input
        type="file"
        onChange={onChangeImgInput}
        style={{ display: "none" }}
        ref={qqq}
      />
      <img src={`https://storage.googleapis.com/${imgUrl}`} />
      <button onClick={onClickCreateBoard}>저장하기</button>
    </div>
  );
}
