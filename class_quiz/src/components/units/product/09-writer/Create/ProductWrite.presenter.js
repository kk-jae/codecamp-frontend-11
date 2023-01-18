export default function NewProductPageUI(props) {
  return (
    <div>
      <h1>상품 {props.isEdit ? "수정" : "등록"} 화면</h1>
      <div>
        판매자:
        <input type="text" onChange={props.onChangeSeller} />
      </div>
      <div>
        제품 이름:
        <input type="text" onChange={props.onChangeName} />
      </div>
      <div>
        제품 설명:
        <input type="text" onChange={props.onChangeDetail} />
      </div>
      <div>
        제품 가격:
        <input type="text" onChange={props.onChangePrice} />
      </div>
      <button
        onClick={
          props.isEdit ? props.onClickUpdateProduct : props.onClickCreateProduct
        }
      >
        {props.isEdit ? "수정" : "등록"} 하기
      </button>
    </div>
  );
}
