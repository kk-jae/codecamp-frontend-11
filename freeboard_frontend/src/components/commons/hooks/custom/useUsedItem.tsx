import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { useMutationCreateUseditem } from "../mutation/useMutationCreateUseditem";
import useMutationDeleteUsedItem from "../mutation/useMutationDeleteUseditem";
import { useMutationUpdateUsedItem } from "../mutation/useMutationUpdateUseditem";
import { useMutationUploadFile } from "../mutation/useMutationUploadFile";

export default function UsedItem(id: string) {
  const router = useRouter();
  const [imgUrl, setImgUrl] = useState("");
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

  const onClickCreateUsedItem = async (data: any) => {
    if (data.images.length !== 0) {
      const result = await uploadFile({
        variables: {
          file: data.images[0], // 아직은 이미지 한개입니다.
        },
      });
      setImgUrl(result.data.uploadFile.url);
    }
    try {
      await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            images: imgUrl,
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
      const result = await updateUseditem({
        variables: {
          updateUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            images: [imgUrl],
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
  };
}
