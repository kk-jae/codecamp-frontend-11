import { yupResolver } from "@hookform/resolvers/yup";
import "react-quill/dist/quill.snow.css";

import { useForm } from "react-hook-form";
import { useQueryIdChecker } from "../../../commons/hooks/custom/useQueryIdChecker";
import UsedItem from "../../../commons/hooks/custom/useUsedItem";
import { useQueryFetchUsedItem } from "../../../commons/hooks/query/useQueryFetchUsedItem";
import { schema } from "../../../commons/validation";
import dynamic from "next/dynamic";
import { useMutationUploadFile } from "../../../commons/hooks/mutation/useMutationUploadFile";
import * as S from "../write/index.styled";
import { useMoveToPage } from "../../../commons/hooks/custom/useMoveToPage";
import KakaoMapPage from "../../../commons/kakaoMap";
import { useState } from "react";
import { Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

interface IProps {
  isEdit: boolean;
}

export default function CreateUsedItemUI(props: IProps) {
  const { id } = useQueryIdChecker("usedItem");
  const { data: isEditData } = useQueryFetchUsedItem(id);
  const { register, handleSubmit, formState, setValue, trigger } = useForm({
    resolver: yupResolver(schema), // 검열
    mode: "onChange",
  });
  const { onClickMoveToPage } = useMoveToPage();

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

  const [addressIsModalOpen, setAddressIsModalOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [addressZipCode, setAddressZipCode] = useState("");
  const [addressDetail, setAddressDetail] = useState("");

  const AddressHandleComplete = (data) => {
    setAddressIsModalOpen(false);
    setAddressZipCode(data?.zonecode);
    setAddress(data?.address);
  };

  const onChangeAddressDetail = (event) => {
    setAddressDetail(event.target.value);
  };

  const AddressShowModal = () => {
    setAddressIsModalOpen((prev) => !prev);
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
              defaultValue={isEditData?.data?.fetchUseditem.name}
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
              defaultValue={isEditData?.fetchUseditem.remarks}
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
                isEditData?.data?.fetchUseditem.price
                  ? Number(isEditData?.data?.fetchUseditem.price)
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
              defaultValue={isEditData?.data?.fetchUseditem.contents}
            />
          </div>
        </S.UsedItemDetail_Top>
        <S.Address_Img>
          <S.Address_Img_Wrapper>
            <S.Middle_middle_wrapper_box>
              <S.Middle_middle_text>거래 위치</S.Middle_middle_text>
              <S.Middle_middle_address_detail>
                <S.AdrTop>
                  <S.Address_kakao>
                    <KakaoMapPage
                      address={address}
                      isEditData={
                        isEditData?.fetchUseditem.useditemAddress.address
                      }
                      AddressShowModal={AddressShowModal}
                    />
                  </S.Address_kakao>
                  <S.Address_search_wrapper>
                    <S.Address_search>
                      <S.AdrTopInput
                        placeholder="07250"
                        readOnly
                        // value={addressZipCode}
                        value={
                          addressZipCode
                            ? addressZipCode
                            : isEditData?.fetchUseditem.useditemAddress
                                .zipcode ?? ""
                        }
                      />
                      <S.AdrTopBtn onClick={AddressShowModal}>
                        우편번호 검색
                      </S.AdrTopBtn>
                      {addressIsModalOpen && (
                        <Modal
                          open={true}
                          onOk={AddressShowModal}
                          onCancel={AddressShowModal}
                        >
                          <DaumPostcodeEmbed
                            onComplete={AddressHandleComplete}
                          />
                        </Modal>
                      )}
                    </S.Address_search>
                    <S.AdrInput
                      readOnly
                      value={
                        address
                          ? address
                          : isEditData?.fetchUseditem.useditemAddress.address ??
                            ""
                      }
                      placeholder="주소를 검색하세요"
                    />

                    <S.AdrInput
                      onChange={onChangeAddressDetail}
                      placeholder="상세주소를 입력하세요"
                      defaultValue={
                        isEditData?.fetchUseditem.useditemAddress !== null &&
                        isEditData?.fetchUseditem.useditemAddress.addressDetail
                          ? isEditData?.fetchUseditem.useditemAddress
                              .addressDetail
                          : ""
                      }
                      {...register("addressDetail")}
                    />
                  </S.Address_search_wrapper>
                </S.AdrTop>
              </S.Middle_middle_address_detail>
            </S.Middle_middle_wrapper_box>
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
            onClick={
              !props.isEdit
                ? handleSubmit(onClickCreateUsedItem(addressZipCode)(address))
                : handleSubmit(onClickUpdateUsedItem)
            }
          >
            {!props.isEdit ? "등록" : "수정"}
          </S.Create_btn>
        </S.Btn_Wrapper>
      </S.Wrapper>
    </S.Container>
  );
}
