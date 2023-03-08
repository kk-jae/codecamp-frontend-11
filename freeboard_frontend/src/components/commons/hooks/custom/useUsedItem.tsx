import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useMutationCreateUseditem } from "../mutation/useMutationCreateUseditem";
import useMutationDeleteUsedItem from "../mutation/useMutationDeleteUseditem";
import { useMutationUpdateUsedItem } from "../mutation/useMutationUpdateUseditem";
import { useMutationUploadFile } from "../mutation/useMutationUploadFile";

export default function UsedItem(id: string) {
  const router = useRouter();
  const [imgUrl1, setImgUrl1] = useState("");
  const [imgUrl2, setImgUrl2] = useState("");
  const [imgUrl3, setImgUrl3] = useState("");
  const [uploadFile] = useMutationUploadFile();
  const [createUseditem] = useMutationCreateUseditem();
  const [updateUseditem] = useMutationUpdateUsedItem();
  const [deleteUseditem] = useMutationDeleteUsedItem();

  const onClickDeleteUsedItem = async () => {
    try {
      await deleteUseditem({
        variables: {
          useditemId: id,
        },
      });
      Modal.success({ content: "중고 상품이 삭제되었습니다." });
      router.push("/homepage/UsedItem/list");
    } catch (error) {
      if (error instanceof Error) {
        Modal.error({
          content: error.message,
        });
      }
    }
  };

  const onChangeUploadFile1 = async (event: ChangeEvent<HTMLInputElement>) => {
    const result = await uploadFile({
      variables: {
        file: event.target.files?.[0],
      },
    });
    setImgUrl1(result.data.uploadFile.url ?? "");
  };
  const onChangeUploadFile2 = async (event: ChangeEvent<HTMLInputElement>) => {
    const result = await uploadFile({
      variables: {
        file: event.target.files?.[0],
      },
    });
    setImgUrl2(result.data.uploadFile.url ?? "");
  };
  const onChangeUploadFile3 = async (event: ChangeEvent<HTMLInputElement>) => {
    const result = await uploadFile({
      variables: {
        file: event.target.files?.[0],
      },
    });
    setImgUrl3(result.data.uploadFile.url ?? "");
  };

  const onClickCreateUsedItem = (zipcode) => (address) => async (data: any) => {
    try {
      await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            images: [imgUrl1, imgUrl2, imgUrl3],
            useditemAddress: {
              zipcode,
              address,
              addressDetail: data.addressDetail,
            },
          },
        },
      });
      Modal.success({
        content: "중고 상품 등록에 성공하였습니다.",
      });
      router.push("/homepage/UsedItem/list");
    } catch (error) {
      if (error instanceof Error)
        Modal.error({
          content: error.message,
        });
    }
  };

  // data : 클릭했을때, 불러오는 input들
  const onClickUpdateUsedItem = async (data: any) => {
    try {
      await updateUseditem({
        variables: {
          updateUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            images: [imgUrl1, imgUrl2, imgUrl3],
          },
          useditemId: id,
        },
      });
      Modal.success({
        content: "게시물이 수정되었습니다.",
      });
      router.push(`/homepage/UsedItem/${id}`);
    } catch (error) {
      if (error instanceof Error)
        Modal.error({
          content: error.message,
        });
    }
  };

  return {
    onClickCreateUsedItem,
    onClickUpdateUsedItem,
    onClickDeleteUsedItem,
    onChangeUploadFile1,
    onChangeUploadFile2,
    onChangeUploadFile3,
  };
}
