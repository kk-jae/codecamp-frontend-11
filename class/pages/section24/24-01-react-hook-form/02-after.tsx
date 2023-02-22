import { useForm } from "react-hook-form";
import { wrapAsync } from "../../../src/commons/libraries/asyncFunc";

interface IFormData {
  writer: string;
  title: string;
  contents: string;
  boardAddress: {
    addressDetail: string;
  };
}

export default function GraphqlMutationPage(): JSX.Element {
  const { register, handleSubmit } = useForm<IFormData>();
  // register 안에 onChange, setChange 등등 다 있음
  const onClickSubmit = (data: IFormData): void => {
    // handleSubmit 에서 데이터를 넣어줍니다.
    console.log(data);
  };

  console.log("리렌더링 되나요?");
  // 입력할때마다 input 값이 출력되는 onChange  현상

  return (
    // 하나의 form으로 그루핑
    <form onSubmit={wrapAsync(handleSubmit(onClickSubmit))}>
      작성자 : <input type="text" {...register("writer")} />
      제목 : <input type="text" {...register("title")} />
      내용 : <input type="text" {...register("contents")} />
      주소 : <input type="text" {...register("boardAddress.addressDetail")} />
      <button> GRAPHQL-API 요청하기</button>;
      {/* <button type="button" onClick={onClickBasket}>
        GRAPHQL-API 요청하기
      </button> */}
      ;
    </form>
  );
}

/* form 안에 있는 모든 내용을  
<button type="reset">지우자!!</button>
<button type="submit">등록하자!!</button> // 기본값 (자식으로 있을경우 부모 버튼까지 클릭시킴)
<button type="button">등록하자!!</button> // 클릭한 버튼 본인만 실행시킵니다.
*/
