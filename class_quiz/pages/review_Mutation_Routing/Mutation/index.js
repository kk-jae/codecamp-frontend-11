//playground의 example안에 createProduct
//판매자, 상품명, 상품 내용, 상품 가격 입력 후 버튼 클릭시 홈페이지가 이동되며,
//이동된 페이지에 ID와 위 정보들이 출력, 저장됩니다.

import { useRouter } from "next/router";
import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

const CREATE_PRODUCT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    createProduct(seller: $seller, createProduct: $createProductInput) {
      _id
      number
      message
    }
  }
`;

export default function ReviewMutationRouting() {
  // const router = useRouter();

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

  const onClickCreateProductBtn = async () => {
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
    // router.push("/review_Mutation_Routing/Query");
    // console.log(router);
  };

  return (
    <div>
      <div>
        판매자 : <input type="text" onChange={onChangeSeller} />
      </div>
      <div>
        상품명 : <input type="text" onChange={onChangeName} />
      </div>
      <div>
        상품 내용 : <input type="text" onChange={onChangeDetail} />
      </div>
      <div>
        상품 가격 : <input type="text" onChange={onChangePrice} />
      </div>
      <button onClick={onClickCreateProductBtn}>상품 등록하기</button>
    </div>
  );
}
