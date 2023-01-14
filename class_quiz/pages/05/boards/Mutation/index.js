import { useMutation, gql } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";

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

export default function Boards05Mutation() {
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
      router.push(`/05/boards/Query/${result.data.createProduct._id}`);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <div>
        판매자:
        <input type="text" onChange={onChangeSeller} />
      </div>
      <div>
        상품명:
        <input type="text" onChange={onChangeName} />
      </div>
      <div>
        상품 내용:
        <input type="text" onChange={onChangeDetail} />
      </div>
      <div>
        상품 가격:
        <input type="text" onChange={onChangePrice} />
      </div>
      <button onClick={onClickCreateProduct}>상품 등록하기</button>
    </div>
  );
}
