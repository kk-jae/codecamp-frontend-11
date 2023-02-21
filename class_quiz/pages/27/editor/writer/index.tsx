import { gql, useMutation } from "@apollo/client";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import "react-quill/dist/quill.snow.css";
const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;
export default function WebEditorPage() {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);
  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });

  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    void trigger("contents");
  };

  const onClickSubmit = async (data: any): Promise<void> => {
    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer: data.writer,
          password: data.password,
          title: data.title,
          contents: data.contents,
        },
      },
    });

    // console.log(result.data?.createBoard._id);
    const boardId = result.data?.createBoard._id;
    router.push(`/27/editor/detail/${boardId}`);
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      <div>
        작성자 :<input {...register("writer")} />
      </div>
      <div>
        비밀번호 :<input {...register("password")} />
      </div>
      <div>
        제목 :<input {...register("title")} />
      </div>
      <div>
        내용 :<ReactQuill onChange={onChangeContents} />
      </div>
      <button>게시물 등록하기</button>
    </form>
  );
}
