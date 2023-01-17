import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";
import { CREATE_PRODUCT } from "./ProductWrite.queries";
import ProductWriteUI from "./ProductWrite.presenter";

export default function ProductWrite() {
  const [isActive, setIsActive] = useState(false);

  const [seller, setSeller] = useState();
  const [name, setName] = useState();
  const [detail, setDetail] = useState();
  const [price, setPrice] = useState();

  const onChangeSeller = (event) => {
    setSeller(event.target.value);
    if (event.target.value && name && detail && price) {
    }
  };

  const onChangeName = (event) => {
    setName(event.target.value);
    if (seller && event.target.value && detail && price) {
      setIsActive(true);
    }
  };

  const onChangeDetail = (event) => {
    setDetail(event.target.value);
    if (seller && name && event.target.value && price) {
      setIsActive(true);
    }
  };

  const onChangePrice = (event) => {
    setPrice(event.target.value);
    if (seller && name && detail && event.target.value) {
      setIsActive(true);
    }
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
      isActive={isActive}
    />
  );
}
