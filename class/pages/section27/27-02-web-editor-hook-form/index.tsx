import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
// import { Modal } from "antd";
import { wrapFormAsync } from "../../../src/commons/libraries/asyncFunc";
import { useForm } from "react-hook-form";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export default function WebEditorPage(): JSX.Element {
  const { register, setValue, trigger } = useForm({
    mode: "onChange",
  });

  // ReactQuill 만든 사람들이 만든 onChange 이므로 event 안들어옴
  const onChangeContents = (value: string): void => {
    // register로 등록하지 않고, 강제로 값을 넣어주는 기능!!
    setValue("contents", value === "<p><br></p>" ? "" : value);
    console.log(value);

    // onChange 됐으니까, 에러검증 같은것들 해달라고 react-hook-form에 알려주는 기능
    void trigger("contents");
  };

  const onClickSubmit = async (): Promise<void> => {
    const { Modal } = await import("antd");
    Modal.success({ content: "게시글 등록에 성공하였습니다." });
  };

  return (
    <form onSubmit={wrapFormAsync(onClickSubmit)}>
      작성자 : <input type="text" {...register("writer")} />
      <br />
      비밀번호 : <input type="password" {...register("password")} />
      <br />
      제목 : <input type="text" {...register("title")} />
      <br />
      내용 :
      <ReactQuill onChange={onChangeContents} />
      {/* register의 onChange와 ReactQuill의 onChange가 달라 register 적용할 수 없습니다. */}
      {/* value를 사용하여 위 문제를 해결합니다. */}
      <br />
      <button>등록하기</button>
    </form>
  );
}

// yarn add react-quill
// yarn add @types/react-quill
