import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface IFormData {
  writer: string;
  password: string;
  title: string;
  contents: string;
}

const regexSpacing = /^[^\s]+$/;
const regexPassword =
  /^(?=.*[a-zA-z])(?=.*\d)(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+])/;

const schema = yup.object({
  writer: yup
    .string()
    .max(5, "5글자 이내로 입력해주세요")
    .required("작성자를 입력해주세요"),
  password: yup
    .string()
    .matches(regexPassword, "영문과 숫자, 기호를 최소 1글자씩 포함해주세요")
    .matches(regexSpacing, "비밀번호에는 띄어쓰기를 사용할 수 없어요")
    .max(8, "비밀번호는 최대 8글자입니다.")
    .required("비밀번호를 입력해주세요"),
  title: yup
    .string()
    .max(100, "제목은 100자 이내입니다.")
    .required("제목을 입력해주세요"),
  contents: yup
    .string()
    .max(1000, "내용은 1000자 이내입니다.")
    .required("내용을 입력해주세요"),
});

export default function ReactHookForm() {
  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSubmit = (data: IFormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      <div>
        작성자
        <input type="text" {...register("writer")} />
      </div>
      <div style={{ color: "red" }}>{formState.errors.writer?.message}</div>
      <div>
        비밀번호
        <input type="password" {...register("password")} />
      </div>
      <div style={{ color: "red" }}>{formState.errors.password?.message}</div>
      <div>
        제목
        <input type="text" {...register("title")} />
      </div>
      <div style={{ color: "red" }}>{formState.errors.title?.message}</div>
      <div>
        내용
        <input type="text" {...register("contents")} />
      </div>
      <div style={{ color: "red" }}>{formState.errors.contents?.message}</div>
      <button>등록하기</button>
    </form>
  );
}
