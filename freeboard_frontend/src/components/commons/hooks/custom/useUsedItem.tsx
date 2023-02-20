import { useState } from "react";
import { useMutationCreateUseditem } from "../mutation/useMutationCreateUseditem";
import { useMutationUpdateUsedItem } from "../mutation/useMutationUpdateUseditem";
import { useMutationUploadFile } from "../mutation/useMutationUploadFile";
import { useQueryIdChecker } from "./useQueryIdChecker";

export default function UsedItem() {
  const id = useQueryIdChecker("usedItem");
  const [imgUrl, setImgUrl] = useState("");
  const [uploadFile] = useMutationUploadFile();
  const [createUseditem] = useMutationCreateUseditem();
  const [updateUseditem] = useMutationUpdateUsedItem();

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
      alert("중고 상품이 등록되었습니다.");
    } catch (error) {
      alert("상품 등록에 실패하였습니다");
    }
  };

  // data : 클릭했을때, 불러오는 input들
  const onClickUpdateUsedItem = (data: any) => {
    // const result = updateUseditem({
    //   variables : {
    //     updateUseditemInput: {
    //       name,
    //       remarks,
    //       contents,
    //       price,
    //       images
    //     },
    //     useditemId:
    //   }
    // });
  };

  return { onClickCreateUsedItem, onClickUpdateUsedItem };
}
