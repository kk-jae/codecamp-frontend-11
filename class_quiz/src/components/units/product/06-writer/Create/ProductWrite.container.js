import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";
import { CREATE_PRODUCT } from "./ProductWrite.queries";
import ProductWriteUI from "./ProductWrite.presenter";

export default function ProductWrite() {
  const [seller, setSeller] = useState();
  const [name, setName] = useState();
  const [detail, setDetail] = useState();
  const [price, setPrice] = useState();

  const onChangeSeller = (event) => {
    setSeller(event.target.value);
  };

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangeDetail = (event) => {
    setDetail(event.target.value);
  };

  const onChangePrice = (event) => {
    setPrice(event.target.value);
  };

  const [createProduct] = useMutation(CREATE_PRODUCT);
  const router = useRouter();

  const onClickCreateProduct = async () => {
    try {
      const result = await createProduct({
        variables: {
          seller: seller,
          createProductInput: {
            name: name,
            detail: detail,
            price: Number(price),
          },
        },
      });
      console.log(result);
      console.log(result.data.createProduct._id);
      router.push(`/06/Product/Query/${result.data.createProduct._id}`);
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <ProductWriteUI
      onChangeSeller={onChangeSeller}
      onChangeName={onChangeName}
      onChangeDetail={onChangeDetail}
      onChangePrice={onChangePrice}
      onClickCreateProduct={onClickCreateProduct}
    />
  );
}
