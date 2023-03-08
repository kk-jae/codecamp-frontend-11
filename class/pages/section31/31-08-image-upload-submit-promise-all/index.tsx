// import { ChangeEvent } from "react";
// import { useMutation, gql } from "@apollo/client";
import { gql, useMutation } from "@apollo/client";
import type { ChangeEvent } from "react";
import { useState } from "react";
import { wrapAsync } from "../../../src/commons/libraries/asyncFunc";
import type {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../src/commons/types/generated/types";

// 이미지 업로드를 위한 셋팅 필요
// 1. appollo setting 으로 이동
// 2. apollo-upload-client 설치 (yarn add apollo-upload-client)
// 3. apollo-upload-client 타입 설치 (yarn add @types/apollo-upload-client)

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
  const [imageUrls, setImageUrls] = useState(["", "", ""]);
  const [files, setFiles] = useState<File[]>([]);

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const [나의함수] = useMutation(나의그래프큐엘셋팅);

  const onClickSubmit = async (): Promise<void> => {
    // 1. uploadFile

    // 1-1) 안좋은예제 - await를 매번 기다림 => for문으로 사용해도 마찬가지
    // const resultFile0 = await uploadFile({ variables: { file: files[0] } });
    // const resultFile1 = await uploadFile({ variables: { file: files[1] } });
    // const resultFile2 = await uploadFile({ variables: { file: files[2] } });
    // const url0 = resultFile0.data?.uploadFile.url;
    // const url1 = resultFile1.data?.uploadFile.url;
    // const url2 = resultFile2.data?.uploadFile.url;
    // const resultUrls = [url0, url1, url2];

    // 1-2) 좋은 예제 - Promise.all 사용
    // const results = await Promise.all([
    //   uploadFile({ variables: { file: files[0] } }),
    //   uploadFile({ variables: { file: files[1] } }),
    //   uploadFile({ variables: { file: files[2] } }),
    // ]);
    // console.log(results); // [resultFile0, resultFile1, resultFile2]
    // const resultUrls = results.map((el) => el.data?.uploadFile.url); // [url0, url1, url2]

    // 1-3) 좋은예제 - Promise.all 사용 => 리팩토링
    // const files = [File0, File1, File2];
    // files.map((el) => uploadFile({ variables: { file: files[el] } }));
    const results = await Promise.all(
      files.map(async (el) => await uploadFile({ variables: { file: el } }))
    );
    console.log(results); // [resultFile0, resultFile1, resultFile2]
    const resultUrls = results.map((el) => el.data?.uploadFile.url); // [url0, url1, url2]

    // 2. createBoard
    //  async가 있으므로 타입을 Promise<void>로 명시
    const result = await 나의함수({
      variables: {
        // variables가 $ 역할을 합니다.
        createBoardInput: {
          writer: "철수",
          password: "1234",
          title: "제목입니다.",
          contents: "내용입니다.",
          images: resultUrls,
        },
      },
    });
    console.log(result);
  };

  const onChangeFile =
    (index: number) =>
    async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
      const file = event.target.files?.[0]; // 배열로 들어오는 이유 : <input type="file" multiple/> 일 때, 여러개 드래그 가능
      if (file === undefined) return;
      console.log(file);

      // 1. 임시 URL 생성 => (가짜URL - 내 브라우저에서만 접근 가능)
      const result = URL.createObjectURL(file);
      console.log(result);

      // 2. 임시 URL 생성 => (진짜URL - 다른 브라우저에서도 접근 가능)
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = (event) => {
        console.log(event.target?.result); // 게시판에서 event.target.id를 쓰면 eslint가 잡았던 이유 : event.target은 태그만을 가르키지 않음
        if (typeof event.target?.result === "string") {
          const tempUrls = [...imageUrls];
          tempUrls[index] = event.target?.result;
          setImageUrls(tempUrls);

          const tempFiles = [...files];
          tempFiles[index] = file;
          setFiles(tempFiles);
        }
      };
    };

  return (
    <>
      <input type="file" onChange={onChangeFile(0)} multiple={true} />
      <input type="file" onChange={onChangeFile(1)} multiple={true} />
      <input type="file" onChange={onChangeFile(2)} multiple={true} />
      <img src={imageUrls[0]} />
      <img src={imageUrls[1]} />
      <img src={imageUrls[2]} />
      {/* <img src={`https://storage.googleapis.com/${imageUrl}`} /> */}
      <button onClick={wrapAsync(onClickSubmit)}>게시글 등록하기</button>
    </>
  );
}
