export default function UsedItemDetailBodyMiddle(props) {
  return (
    <>
      <h1>여기는 UseItemDetailBodyMiddle 처음 입니다.</h1>
      <div>판매자 : {props.data?.fetchUseditem.name}</div>
      <div>상품명 : {props.data?.fetchUseditem.remarks}</div>
      <div>가격 : {props.data?.fetchUseditem.price}</div>
      <div>상품 설명 : {props.data?.fetchUseditem.contents}</div>
      <h1>여기는 UseItemDetailBodyMiddle 끝 입니다.</h1>
    </>
  );
}
