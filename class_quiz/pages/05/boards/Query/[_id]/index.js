import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_PRODUCT = gql`
  query fetchProduct($productId: ID) {
    fetchProduct(productId: $productId) {
      _id
      seller
      name
      detail
      price
    }
  }
`;

export default function Boards05Query() {
  const router = useRouter();
  console.log(router);

  const { data } = useQuery(FETCH_PRODUCT, {
    variables: { productId: router.query._id },
  });

  console.log(data);
  return (
    <div>
      <div> ID : {router.query._id} </div>
      <div> 판매자 : {data?.fetchProduct?.seller} </div>
      <div> 상품명 : {data?.fetchProduct?.name}</div>
      <div> 상품 내용 : {data?.fetchProduct?.detail}</div>
      <div> 상품 가격 : {data?.fetchProduct?.price}</div>
    </div>
  );
}
