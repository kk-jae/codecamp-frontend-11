import { useMoveToPage } from "../../../../commons/hooks/customs/useMoveToPage";

export default function UsedItemListBody(props) {
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <>
      <h1>여기는 UsedItemListBody 입니다.</h1>
      {props.data?.fetchUseditems.map((el) => (
        <div>
          <span style={{ margin: "10px" }}>아이디 : {el._id}</span>
          <span style={{ margin: "10px" }}>판매자 : {el.name}</span>
          <span
            style={{
              margin: "10px",
              cursor: "pointer",
              border: "1px solid black",
            }}
            onClick={onClickMoveToPage(`/homepage/UsedItems/${el._id}`)}
          >
            상품 설명 : {el.remarks}
          </span>
          <span style={{ margin: "10px" }}>내용 : {el.contents}</span>
          <span style={{ margin: "10px" }}>가격 : {el.price}</span>
        </div>
      ))}
    </>
  );
}
