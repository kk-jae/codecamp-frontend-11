import { RedInput, BlueButton } from "./ProductWrite.styles";

export default function ProductWriteUI(props) {
  return (
    <div>
      <div>
        판매자:
        <RedInput type="text" onChange={props.onChangeSeller} />
      </div>
      <div>
        상품명:
        <input type="text" onChange={props.onChangeName} />
      </div>
      <div>
        상품 내용:
        <input type="text" onChange={props.onChangeDetail} />
      </div>
      <div>
        상품 가격:
        <input type="text" onChange={props.onChangePrice} />
      </div>
      <BlueButton onClick={props.onClickCreateProduct}>
        상품 등록하기
      </BlueButton>
    </div>
  );
}
