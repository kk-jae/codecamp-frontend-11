export default function CreateUsedItemUI(props) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickCreateUsedItem)}>
      <div>
        상품명 :<input type="text" {...props.register("name")} />{" "}
      </div>
      <div>
        리마크 :<input type="text" {...props.register("remarks")} />{" "}
      </div>
      <div>
        내용 :<input type="text" {...props.register("contents")} />{" "}
      </div>
      <div>
        가격 :<input type="text" {...props.register("price")} />{" "}
      </div>
      <div>
        태그 :<input type="text" {...props.register("tags")} />{" "}
      </div>
      <div>
        이미지 등록 :<input type="file" {...props.register("images")} />
      </div>
      <button> 상품 등록 </button>
    </form>
  );
}
