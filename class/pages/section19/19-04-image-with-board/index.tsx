// import { ChangeEvent } from "react";
import { useMutation, gql } from "@apollo/client";
import type { ChangeEvent } from "react";
import { useState, useRef } from "react";
import type {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../src/commons/types/generated/types";
import { checkValidationFile } from "../../../src/commons/libraries/validation";

// 이미지 업로드를 위한 셋팅 필요
// 1. appollo setting 으로 이동
// 2. apollo-upload-client 설치 (yarn add apollo-upload-client)
// 3. apollo-upload-client 타입 설치 (yarn add --dev @types/apollo-upload-client)

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

const 나의그래프큐엘셋팅 = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function ImageUploadPage(): JSX.Element {
  const [imageUrl, setImageUrl] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeFile = async (
    event: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const file = event.target.files?.[0]; // 배열로 들어오는 이유 : <input type="file" multiple/> 일 때, 여러개 드래그 가능
    // 1. null 일 경우의 type을 지정해주면 빨간줄이 사라집니다.
    // 2. 있을때만 가져와달라고 ? 를 사용하면 사라집니다.
    console.log(file);

    const isValid = checkValidationFile(file);
    if (!isValid) return;

    const result = await uploadFile({ variables: { file } });
    console.log(result.data?.uploadFile.url);
    // https://storage.googleapis.com 구글 플랫폼 주소
    setImageUrl(result.data?.uploadFile.url ?? "");
  };

  const onClickImage = (): void => {
    // document.getElementById("파일태그ID")?.click();
    fileRef.current?.click();
  };

  // =====================================게시글 이미지 등록하기=================================================

  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [나의함수] = useMutation(나의그래프큐엘셋팅);

  const onClickSubmit = async (): Promise<void> => {
    //  async가 있으므로 타입을 Promise<void>로 명시
    const result = await 나의함수({
      variables: {
        // variables가 $ 역할을 합니다.
        createBoardInput: {
          writer,
          password: "1234",
          title,
          contents,
          images: [imageUrl],
        },
      },
    });
    console.log(result);
  };
  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>): void => {
    setWriter(event.target.value);
  };
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event: ChangeEvent<HTMLInputElement>): void => {
    setContents(event.target.value);
  };

  return (
    <>
      작성자 : <input type="text" onChange={onChangeWriter} />
      제목 : <input type="text" onChange={onChangeTitle} />
      내용 : <input type="text" onChange={onChangeContents} />
      <div
        style={{ width: "100px", height: "100px", backgroundColor: "gray" }}
        onClick={onClickImage}
      >
        이미지 선택
      </div>
      <input
        style={{ display: "none" }}
        type="file"
        onChange={onChangeFile}
        multiple={true}
        ref={fileRef} // fileRef = <input type=file"> , fileRef에 input태그를 저장했다.
        accept="image/jpeg,image/png" // jpeg,png만 선택할 수 있게 합니다. (선택 자체가 안되게함)
      >
        {/* multiple 속성 공부 */}
      </input>
      <img src={`https://storage.googleapis.com/${imageUrl}`} />
      {/* src안에 다운받은 주소 + 구글 플랫폼 주소 */}
      <button onClick={onClickSubmit}> GRAPHQL-API 요청하기</button>;
    </>
  );
}
