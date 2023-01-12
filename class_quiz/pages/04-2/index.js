import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

const quiz4_Mutation = gql`
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
  const [MyQuizMutation] = useMutation(quiz4_Mutation);

  const [seller, setSeller] = useState();
  const [name, setName] = useState();
  const [detail, setDetail] = useState();
  const [price, setPrice] = useState();

  const onClickQuiz4 = async () => {
    const result = await MyQuizMutation({
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
      <button onClick={onClickQuiz4}>GRAPHQL-API 요청하기</button>
    </div>
  );
}
