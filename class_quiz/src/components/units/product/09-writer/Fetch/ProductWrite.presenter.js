export default function DetailProductPageUI(props) {
  return (
    <div>
      <h1>상품 상세 화면</h1>
      <div>ID :{props.router.query.myId} </div>
      <div>판매자: {props.data?.fetchProduct?.seller}</div>
      <div>제품 이름: {props.data?.fetchProduct?.name}</div>
      <div>제품 설명: {props.data?.fetchProduct?.detail}</div>
      <div>제품 가격: {props.data?.fetchProduct?.price}</div>
      <button onClick={props.onClickUpdateProduct}>수정하기</button>
    </div>
  );
}
