import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
// import UpdateProductPage from "../../../../../../pages/09/detail/[myId]/edit";
import NewProductPageUI from "../Create/ProductWrite.presenter";
import { CREATE_PRODUCT, UPDATE_PRODUCT } from "../Create/ProductWrite.queries";

export default function NewProductPageContainer(props) {
  const [createProduct] = useMutation(CREATE_PRODUCT);
  const [updateProduct] = useMutation(UPDATE_PRODUCT);
  const router = useRouter();

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

  const [seller, setSeller] = useState();
  const [name, setName] = useState();
  const [detail, setDetail] = useState();
  const [price, setPrice] = useState();

  const onClickCreateProduct = async () => {
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
    router.push(`/09/${result.data.createProduct._id}`);
  };

  const onClickUpdateProduct = async () => {
    const result = await updateProduct({
      variables: {
        productId: router.query.myId,
        updateProductInput: {
          name: name,
          detail: detail,
          price: Number(price),
        },
      },
    });

    router.push(`/09/${router.query.myId}`);
  };

  return (
    <NewProductPageUI
      onClickCreateProduct={onClickCreateProduct}
      onClickUpdateProduct={onClickUpdateProduct}
      onChangeSeller={onChangeSeller}
      onChangeName={onChangeName}
      onChangeDetail={onChangeDetail}
      onChangePrice={onChangePrice}
      isEdit={props.isEdit}
    />
  );
}
