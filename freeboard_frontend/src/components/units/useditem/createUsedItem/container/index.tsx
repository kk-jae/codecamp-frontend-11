import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../../commons/libraries/stores";
import CreateUsedItemUI from "../presenter";

const UPLOAD_FILE = gql`
  mutation ($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

const CREATE_USED_ITEM = gql`
  mutation ($createUseditemInput: CreateUseditemInput!) {
    createUseditem(createUseditemInput: $createUseditemInput) {
      _id
    }
  }
`;

interface IData {
  name: string;
  remarks: string;
  contents: string;
  price: number;
  tags: object; // 배열
  images: any;
  // file: string;
}

export default function CreateUsedItemContainer() {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const { register, handleSubmit } = useForm<IData>();

  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createUseditem] = useMutation(CREATE_USED_ITEM);

  const [imgUrl, setImgUrl] = useState("");

  const onClickCreateUsedItem = async (data: IData) => {
    const result = await uploadFile({
      variables: {
        file: data.images[0],
      },
    });
    setImgUrl(result.data?.uploadFile.url);

    const resultUseitem = await createUseditem({
      variables: {
        createUseditemInput: {
          name: data.name,
          remarks: data.remarks,
          contents: data.contents,
          price: Number(data.price),
          tags: data.tags,
          images: imgUrl,
        },
      },
    });
    console.log(resultUseitem);
  };

  return (
    <CreateUsedItemUI
      handleSubmit={handleSubmit}
      onClickCreateUsedItem={onClickCreateUsedItem}
      register={register}
    />
  );
}
