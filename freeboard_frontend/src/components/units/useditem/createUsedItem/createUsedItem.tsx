import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/libraries/stores";
import Input01 from "../../../commons/inputs/input01";

export default function CreateUsedItemUI() {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const { register, handleSubmit } = useForm();

  const onClickCreateUsedItem = (data) => {
    // // console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onClickCreateUsedItem)}>
      <div>
        상품명 : <Input01 type="text" register={register("name")} />
      </div>
      <div>
        리마크 : <Input01 type="text" register={register("remarks")} />
      </div>
      <div>
        내용 : <Input01 type="text" register={register("contents")} />
      </div>
      <div>
        가격 : <Input01 type="text" register={register("price")} />
      </div>
      <div>
        태그 : <Input01 type="text" register={register("tags")} />
      </div>
      <div>
        이미지 등록 : <Input01 type="file" register={register("images")} />
      </div>
      <button> 상품 등록</button>
    </form>
  );
}
