import { useForm } from "react-hook-form";

interface IFormData {
  writer: string;
  password: string;
  title: string;
  contents: string;
}

export default function ReactHookForm() {
  const { register, handleSubmit } = useForm<IFormData>();

  const onClickSubmit = (data: IFormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      <div>
        작성자
        <input {...register("writer")} />
      </div>
      <div style={{ color: "red" }}>작성자를 입력하세요</div>
      <div></div>
      <div>
        비밀번호
        <input {...register("password")} />
      </div>
      <div style={{ color: "red" }}>비밀번호를 입력하세요</div>
      <div>
        제목
        <input {...register("title")} />
      </div>
      <div style={{ color: "red" }}>제목을 입력하세요</div>
      <div>
        내용
        <input {...register("contents")} />
      </div>
      <div style={{ color: "red" }}>내용을 입력하세요</div>
      <button>등록하기</button>
    </form>
  );
}
