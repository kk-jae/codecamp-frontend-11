// import { useQuery, gql } from "@apollo/client";
// import { useRouter } from "next/router";

// import DetailProductPageContainer from "../../../src/components/units/product/09-writer/Fetch/ProductWrite.container";
import DetailProductPageContainer from "../../../src/components/units/product/09-writer/Fetch/ProductWrite.container";

// const FETCH_PRODUCT = gql`
//   query fetchProduct($productId: ID) {
//     fetchProduct(productId: $productId) {
//       _id
//       seller
//       name
//       detail
//       price
//       createdAt
//     }
//   }
// `;

export default function DetailProductPage() {
  // const router = useRouter();
  // const { data } = useQuery(FETCH_PRODUCT, {
  //   variables: { productId: router.query.id },
  // });

  // console.log(data);
  return <DetailProductPageContainer />;
}
//   <div>
//     <h1>상품 상세 화면</h1>
//     <div>ID :{router.query.id} </div>
//     <div>판매자: {data?.fetchProduct?.seller}</div>
//     <div>제품 이름: {data?.fetchProduct?.name}</div>
//     <div>제품 설명: {data?.fetchProduct?.detail}</div>
//     <div>제품 가격: {data?.fetchProduct?.price}</div>
//   </div>
