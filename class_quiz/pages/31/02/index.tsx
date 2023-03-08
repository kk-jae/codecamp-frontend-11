import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUploadFileArgs,
} from "../../../src/commons/types/generated/types";

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

export default function ImagePreview() {
  const [imageUrl, setImageUrl] = useState("");
  const { register, handleSubmit } = useForm();
  const [file, setFile] = useState<File>();

  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeFile = (event?: ChangeEvent<HTMLInputElement>): void => {
    const file = event?.target.files?.[0];

    const fileReader = new FileReader();
    if (file !== undefined) {
      fileReader.readAsDataURL(file);
    }
    fileReader.onload = (event) => {
      if (typeof event.target?.result === "string") {
        setImageUrl(event.target?.result);
        setFile(file);
      }
    };
  };

  const onClickSubmit = async (data: any): Promise<void> => {
    // console.log(file);
    const resultImg = await uploadFile({
      variables: { file },
    });
    const url = resultImg.data?.uploadFile.url;

    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer: data.writer,
          password: data.password,
          title: data.title,
          contents: data.contents,
          images: url,
        },
      },
    });

    console.log(result);
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      <div>
        {" "}
        작성자 <input {...register("writer")} />{" "}
      </div>
      <div>
        {" "}
        비밀번호 <input {...register("password")} />
      </div>
      <div>
        {" "}
        제목 <input {...register("title")} />
      </div>
      <div>
        {" "}
        내용 <input {...register("contents")} />
      </div>
      <input type="file" onChange={onChangeFile} />
      <img src={imageUrl} style={{ width: "100px", height: "100px" }} />
      <button>저장하기</button>
    </form>
  );
}
