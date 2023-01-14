import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

const CREATE_PRODUCT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`;

export default function Quiz04_2() {
  const [createProduct] = useMutation(CREATE_PRODUCT);

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
    console.log(result);
  };

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

  return (
    <div>
      판매자:
      <input type="text" onChange={onChangeSeller} />
      제품 이름:
      <input type="text" onChange={onChangeName} />
      제품 설명:
      <input type="text" onChange={onChangeDetail} />
      제품 가격:
      <input type="number" onChange={onChangePrice} />
      <button onClick={onClickCreateProduct}>GRAPHQL-API 요청하기</button>
    </div>
  );
}
