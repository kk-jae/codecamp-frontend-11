import { useForm } from "react-hook-form";
import { wrapFormAcync } from "../../../src/commons/libraries/asyncFunc";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./02-after.validation";

interface IFormData {
  writer: string;
  title: string;
  contents: string;
  // email: string;
  // boardAddress: {
  //   addressDetail: string;
  // };
}

export default function GraphqlMutationPage(): JSX.Element {
  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange", // 언제 검증할 것인지?
  });
  // register 안에 onChange, setChange 등등 다 있음
  const onClickSubmit = (data: IFormData): void => {
    // handleSubmit 에서 데이터를 넣어줍니다.
    console.log(data);
  };

  console.log("리렌더링 되나요?");
  // 입력할때마다 input 값이 출력되는 onChange  현상

  return (
    // 하나의 form으로 그루핑
    <form onSubmit={wrapFormAcync(handleSubmit(onClickSubmit))}>
      작성자 : <input type="text" {...register("writer")} />
      <div style={{ color: "red" }}>{formState.errors.writer?.message}</div>
      제목 : <input type="text" {...register("title")} />
      <div style={{ color: "red" }}>{formState.errors.title?.message}</div>
      내용 : <input type="text" {...register("contents")} />
      <div style={{ color: "red" }}>{formState.errors.contents?.message}</div>
      {/* 이메일 : <input type="text" {...register("email")} />
      <div style={{ color: "red" }}>{formState.errors.email?.message}</div> */}
      {/* 주소 : <input type="text" {...register("boardAddress.addressDetail")} /> */}
      <button style={{ backgroundColor: formState.isValid ? "yellow" : "" }}>
        등록하기
      </button>
      {/* <button type="button" onClick={onClickBasket}>
        GRAPHQL-API 요청하기
      </button> */}
    </form>
  );
}

/* form 안에 있는 모든 내용을  
<button type="reset">지우자!!</button>
<button type="submit">등록하자!!</button> // 기본값 (자식으로 있을경우 부모 버튼까지 클릭시킴)
<button type="button">등록하자!!</button> // 클릭한 버튼 본인만 실행시킵니다.
*/
