import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import type { ChangeEvent } from "react";
import { useRouter } from "next/router";

const UPLOAD_FILE = gql`
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

export default function ImagePage() {
  const router = useRouter();

  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);

  const [imgUrl, setImgUrl] = useState("");

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
  };

  const onChangeUploadFile = async (event) => {
    // console.log(event.target.files?.[0]);

    const file = event.target.files?.[0];

    const result = await uploadFile({
      variables: {
        file: file,
      },
    });

    setImgUrl(result.data?.uploadFile.url);
  };

  const onClickSubmit = async () => {
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

    // console.log(imgUrl);
    router.push(`/review_img_two/${result.data.createBoard._id}`);
    // console.log(result.data);
  };

  return (
    <>
      <div>이미지 업로드</div>
      <div>
        작성자 <input onChange={onChangeWriter} />
      </div>
      <div>
        비밀번호
        <input onChange={onChangePassword} />
      </div>
      <div>
        제목
        <input onChange={onChangeTitle} />
      </div>
      <div>
        내용
        <input onChange={onChangeContents} />
      </div>
      <input type="file" onChange={onChangeUploadFile} />
      <img src={`https://storage.googleapis.com/${imgUrl}`} alt="" />
      <button onClick={onClickSubmit}>게시물 등록하기</button>
    </>
  );
}
