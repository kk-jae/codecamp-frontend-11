import { ChangeEvent, useRef, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import Uploads01 from "../Uploads";
import { v4 as uuidv4 } from "uuid";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function ImageUploadReview() {
  // 이미지 업로드 시작
  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  const onChangeFileUrls = (fileUrl, index) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  // 이미지 업로드 끝
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);

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

  const onClickSubmit = async () => {
    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer,
          password,
          title,
          contents,
        },
      },
    });
    console.log(result.data?.createBoard._id);
    router.push(`/review_imageUpload/${result.data?.createBoard._id}`);
  };

  return (
    <div>
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
      <div>
        <div>
          이미지 등록하기
          {fileUrls.map((el, index) => (
            <Uploads01
              key={uuidv4()}
              index={index}
              fileUrl={el}
              onChangeFileUrls={onChangeFileUrls}
            />
          ))}
        </div>
      </div>
      <button onClick={onClickSubmit}>게시물 등록하기</button>
      {/* <button onClick={onClickMove}>조회하기</button> */}
    </div>
  );
}

{
  /* <div>
  <input type="file"></input>
  <button
    style={{ width: "100px", height: "100px", backgroundColor: "gray" }}
  >
    +
  </button>
</div>
<div>
  <input type="file"></input>
  <button
    style={{ width: "100px", height: "100px", backgroundColor: "gray" }}
  >
    +
  </button>
</div>
<div>
  <input type="file"></input>
  <button
    style={{ width: "100px", height: "100px", backgroundColor: "gray" }}
  >
    +
  </button>
</div> */
}
