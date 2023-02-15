import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./validation/validation";
import Input01 from "./Button";
import Button01 from "./Input";

interface IFormData {
  writer: string;
  password: string;
  title: string;
  contents: string;
}

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
        <Input01 type="text" register={register("writer")} />
      </div>
      <div style={{ color: "red" }}>{formState.errors.writer?.message}</div>
      <div>
        비밀번호
        <Input01 type="password" register={register("password")} />
      </div>
      <div style={{ color: "red" }}>{formState.errors.password?.message}</div>
      <div>
        제목
        <Input01 type="text" register={register("title")} />
      </div>
      <div style={{ color: "red" }}>{formState.errors.title?.message}</div>
      <div>
        내용
        <Input01 type="text" register={register("contents")} />
      </div>
      <div style={{ color: "red" }}>{formState.errors.contents?.message}</div>
      <Button01 title="등록하기" />
    </form>
  );
}
