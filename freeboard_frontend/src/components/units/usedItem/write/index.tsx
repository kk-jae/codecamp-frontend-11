import { yupResolver } from "@hookform/resolvers/yup";
import "react-quill/dist/quill.snow.css";

import { useForm } from "react-hook-form";
import { useQueryIdChecker } from "../../../commons/hooks/custom/useQueryIdChecker";
import UsedItem from "../../../commons/hooks/custom/useUsedItem";
import { useQueryFetchUsedItem } from "../../../commons/hooks/query/useQueryFetchUsedItem";
import { schema } from "../../../commons/validation";
import dynamic from "next/dynamic";
import KakaoMapPage from "../../../commons/kakaoMap";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

interface IProps {
  isEdit: boolean;
}

export default function CreateUsedItemUI(props: IProps) {
  const { id } = useQueryIdChecker("usedItem");
  const result = useQueryFetchUsedItem(id);
  const { register, handleSubmit, formState, setValue, trigger } = useForm({
    resolver: yupResolver(schema), // 검열
    mode: "onChange",
  });
  // console.log(result.data?.fetchUseditem.name);
  const { onClickCreateUsedItem, onClickUpdateUsedItem } = UsedItem(id);

  const onChangeContents = (value: string): void => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    void trigger("contents");
  };

  return (
    <div>
      <h1>{!props.isEdit ? "중고상품 등록하기" : "중고상품 수정하기"}</h1>
      <div>
        <div>
          상품명:
          <input
            {...register("name")}
            defaultValue={result.data?.fetchUseditem.name}
          />
          {formState.errors.name?.message}
        </div>
        <div>
          한줄요약:
          <input
            {...register("remarks")}
            defaultValue={result.data?.fetchUseditem.remarks}
          />
          {formState.errors.remarks?.message}
        </div>
        <div>
          상품 설명:
          <ReactQuill
            onChange={onChangeContents}
            value={result.data?.fetchUseditem.contents}
          />
          {/* {formState.errors.contents?.message} */}
        </div>
        <div>
          판매 가격:
          <input
            {...register("price")}
            defaultValue={
              result.data?.fetchUseditem.price
                ? Number(result.data?.fetchUseditem.price)
                : ""
            }
          />
          {formState.errors.price?.message}
        </div>
        {/* <div>
          태그 입력:
          <input {...register("tags")} />
        </div> */}
        <div>
          거래 위치:
          <KakaoMapPage />
        </div>
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
