import { yupResolver } from "@hookform/resolvers/yup";
import "react-quill/dist/quill.snow.css";

import { useForm } from "react-hook-form";
import { useQueryIdChecker } from "../../../commons/hooks/custom/useQueryIdChecker";
import UsedItem from "../../../commons/hooks/custom/useUsedItem";
import { useQueryFetchUsedItem } from "../../../commons/hooks/query/useQueryFetchUsedItem";
import { schema } from "../../../commons/validation";
import dynamic from "next/dynamic";
import KakaoMapPage from "../../../commons/kakaoMap";
import { useMutationUploadFile } from "../../../commons/hooks/mutation/useMutationUploadFile";
import * as S from "../write/index.styled";
import { useMoveToPage } from "../../../commons/hooks/custom/useMoveToPage";

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
  const { onClickMoveToPage } = useMoveToPage();

  //  (result.data?.fetchUseditem.name);
  const {
    onClickCreateUsedItem,
    onClickUpdateUsedItem,
    onChangeUploadFile1,
    onChangeUploadFile2,
    onChangeUploadFile3,
  } = UsedItem(id);

  const onChangeContents = (value: string): void => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    void trigger("contents");
  };

  return (
    <S.Container>
      <S.Wrapper>
        <h1>{!props.isEdit ? "중고상품 등록하기" : "중고상품 수정하기"}</h1>
        <S.UsedItemDetail_Top>
          <S.Top_Text>
            <span style={{ fontWeight: "700" }}> 상품명</span>
            <S.Top_input
              {...register("name")}
              defaultValue={result.data?.fetchUseditem.name}
              placeholder={
                formState.errors.name?.message
                  ? `${formState.errors.name?.message}`
                  : "상품명을 입력해주세요"
              }
            />
          </S.Top_Text>
          <S.Top_Text>
            <span style={{ fontWeight: "700" }}> 한줄요약</span>
            <S.Top_input
              {...register("remarks")}
              defaultValue={result.data?.fetchUseditem.remarks}
              placeholder={
                formState.errors.remarks?.message
                  ? `${formState.errors.remarks?.message}`
                  : "한줄요약을 입력해주세요"
              }
            />
          </S.Top_Text>
          <S.Top_Text>
            <span style={{ fontWeight: "700" }}>판매 가격</span>
            <S.Top_input
              {...register("price")}
              defaultValue={
                result.data?.fetchUseditem.price
                  ? Number(result.data?.fetchUseditem.price)
                  : ""
              }
              placeholder={
                formState.errors.price?.message
                  ? `${formState.errors.price?.message}`
                  : "가격을 입력해주세요"
              }
            />
          </S.Top_Text>
          <div>
            <span style={{ fontWeight: "700" }}>상품 설명</span>
            <ReactQuill
              onChange={onChangeContents}
              defaultValue={result.data?.fetchUseditem.contents}
            />
          </div>
        </S.UsedItemDetail_Top>
        <S.Address_Img>
          <KakaoMapPage />
          <S.Address_Img_Wrapper>
            <S.Address_detail>
              <S.Address_detail_Text>주소 입력</S.Address_detail_Text>
              <S.Address_detail_Input />
            </S.Address_detail>
            <S.Img_Wrapper>
              <S.Img>
                <input type="file" onChange={onChangeUploadFile1} />
              </S.Img>
              <S.Img>
                <input type="file" onChange={onChangeUploadFile2} />
              </S.Img>
              <S.Img>
                <input type="file" onChange={onChangeUploadFile3} />
              </S.Img>
            </S.Img_Wrapper>
          </S.Address_Img_Wrapper>
        </S.Address_Img>
        <S.Btn_Wrapper>
          <S.Cancel_btn onClick={onClickMoveToPage("/homepage/UsedItem/list")}>
            취소
          </S.Cancel_btn>
          <S.Create_btn
            onClick={handleSubmit(
              !props.isEdit ? onClickCreateUsedItem : onClickUpdateUsedItem
            )}
          >
            {!props.isEdit ? "등록" : "수정"}
          </S.Create_btn>
        </S.Btn_Wrapper>
      </S.Wrapper>
    </S.Container>
  );
}
