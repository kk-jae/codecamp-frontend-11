import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

const graphqlProductInputImp = gql`
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

export default function graphqlProductInput() {
  const [ProductImp] = useMutation(graphqlProductInputImp);

  const [seller, setSeller] = useState();
  const [name, setName] = useState();
  const [detail, setDetail] = useState();
  const [price, setPrice] = useState();

  const onClickProductBtn = async () => {
    const result = await ProductImp({
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
      <div>
        판매자 : <input type="text" onChange={onChangeSeller} />
      </div>
      <div>
        제품명 : <input type="text" onChange={onChangeName} />
      </div>
      <div>
        제품 소개 : <input type="text" onChange={onChangeDetail} />
      </div>
      <div>
        가격 : <input type="text" onChange={onChangePrice} />
      </div>
      <button onClick={onClickProductBtn}>GRAPHQL-API 요청하기</button>
    </div>
  );
}
