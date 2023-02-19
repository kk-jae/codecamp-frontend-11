import { useRouter } from "next/router";
import DaumPostcodeEmbed from "react-daum-postcode";
import { useForm } from "react-hook-form";
import onClickCreateUsedItemFunc from "../../../commons/hooks/customs/CreateUsedItem";
import onClickUpdateUsedItemFunc from "../../../commons/hooks/customs/UpdateUsedItem";
import { useQueryFetchUsedItemDetail } from "../../../commons/hooks/queries/useQueryFetchUsedItem";
import KakaoMapPage from "../../../commons/kakaoMap";
import UsedItemDetailPage from "../fetchUsedItem/fetchUsedItemDetail";

export default function CreateUsedItemUI(props) {
  const router = useRouter();
  const { data } = useQueryFetchUsedItemDetail(router.query.itemId);
  const { onClickCreateUsedItem } = onClickCreateUsedItemFunc();
  const { onClickUpdateUsedItem } = onClickUpdateUsedItemFunc();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      remarks: data?.fetchUseditem.remarks,
      name: data?.fetchUseditem.name,
      price: data?.fetchUseditem.price,
      contents: data?.fetchUseditem.contents,
    },
  });

  return (
    <form
      onSubmit={handleSubmit(
        props.isEdit ? onClickUpdateUsedItem : onClickCreateUsedItem
      )}
    >
      <h1>{props.isEdit ? "상품 수정하기화면" : "상품 등록하기화면"}</h1>
      <div>
        상품명 :<input placeholder="상품명" {...register("name")} />
      </div>
      <div>
        한줄 요약(remarks) :
        <input placeholder="한줄 요약" {...register("remarks")} />
      </div>
      <div>
        판매 가격 : <input placeholder="판매 가격" {...register("price")} />
      </div>
      <div>
        상품 설명 : <input placeholder="상품 설명" {...register("contents")} />
      </div>
      <div>
        <span>
          거래 위치 :<KakaoMapPage />
        </span>
        <div>
          <span>GPS 위도 : 경도 : </span>
        </div>
        <div>
          <DaumPostcodeEmbed onComplete={props.AddressHandleComplete} />
          주소: <input />
        </div>
        <div>
          사진첨부
          <input type="file" />
        </div>
      </div>
      <button>{props.isEdit ? "상품 수정하기" : "상품 등록하기"}</button>
    </form>
  );
}
