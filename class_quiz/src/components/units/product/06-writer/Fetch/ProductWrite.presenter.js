import { useRouter } from "next/router";

export default function ProductQueryUI(props) {
  return (
    <div>
      {/* <div> ID : {router.query._id} </div> */}
      <div> 판매자 : {props.data?.fetchProduct?.seller} </div>
      <div> 상품명 : {props.data?.fetchProduct?.name}</div>
      <div> 상품 내용 : {props.data?.fetchProduct?.detail}</div>
      <div> 상품 가격 : {props.data?.fetchProduct?.price}</div>
    </div>
  );
}
