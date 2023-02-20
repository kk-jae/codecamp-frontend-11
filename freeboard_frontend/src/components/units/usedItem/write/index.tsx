import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import UsedItem from "../../../commons/hooks/custom/useUsedItem";
import { schema } from "../../../commons/validation";

interface IProps {
  isEdit: boolean;
}

export default function CreateUsedItemUI(props: IProps) {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema), // 검열
    mode: "onChange",
  });
  const { onClickCreateUsedItem, onClickUpdateUsedItem } = UsedItem();

  return (
    <div>
      <h1>{!props.isEdit ? "중고상품 등록하기" : "중고상품 수정하기"}</h1>
      <div>
        <div>
          상품명:
          <input {...register("name")} />
          {/* {formState.errors.name?.message} */}
        </div>
        <div>
          한줄요약:
          <input {...register("remarks")} />
          {/* {formState.errors.remarks?.message} */}
        </div>
        <div>
          상품 설명:
          <input {...register("contents")} />
          {/* {formState.errors.contents?.message} */}
        </div>
        <div>
          판매 가격:
          <input {...register("price")} />
          {/* {formState.errors.price?.message} */}
        </div>
        {/* <div>
          태그 입력:
          <input {...register("tags")} />
        </div> */}
        {/* <div>
          거래 위치:
          <input {...register("")}/>
        </div> */}
        <div>
          사진첨부 1: <input {...register("images")} type="file" />
        </div>

        <button
          onClick={handleSubmit(
            !props.isEdit ? onClickCreateUsedItem : onClickUpdateUsedItem
          )}
        >
          {!props.isEdit ? "중고상품 등록하기" : "중고상품 수정하기"}
        </button>
      </div>
    </div>
  );
}
