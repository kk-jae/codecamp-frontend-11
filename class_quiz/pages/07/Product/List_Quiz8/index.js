//createProduct 목록을 불러고 왼쪽에 체크박스 , 오른쪽에 삭제 버튼 구현

import { useQuery, gql, useMutation } from "@apollo/client";

const FETCH_PRODUCTS = gql`
  query {
    fetchProducts {
      _id
      seller
      name
      detail
      price
      createdAt
    }
  }
`;

const DELETE_PRODUCT = gql`
  mutation deleteProduct($productId: ID) {
    deleteProduct(productId: $productId) {
      message
    }
  }
`;

export default function fetchProducts() {
  const { data } = useQuery(FETCH_PRODUCTS);

  // console.log(data);
  const [deleteProduct] = useMutation(DELETE_PRODUCT);

  const onClickDelete = (event) => {
    deleteProduct({
      variables: { productId: event.target.id },
      refetchQueries: [{ query: FETCH_PRODUCTS }],
    });
  };

  return (
    <div>
      {data?.fetchProducts.map((el) => (
        <div key={el._id}>
          <input type="checkbox"></input>
          <span style={{ margin: "10px" }}> {el._id}</span>
          <span style={{ margin: "10px" }}> {el.seller}</span>
          <span style={{ margin: "10px" }}> {el.name}</span>
          <span style={{ margin: "10px" }}> {el.detail}</span>
          <span style={{ margin: "10px" }}> {el.price}</span>
          <span style={{ margin: "10px" }}> {el.createdAt}</span>
          <button id={el._id} onClick={onClickDelete}>
            삭제
          </button>
        </div>
      ))}
    </div>
  );
}
