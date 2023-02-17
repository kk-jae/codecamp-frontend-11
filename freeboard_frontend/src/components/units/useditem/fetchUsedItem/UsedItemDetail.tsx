import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";

const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      createdAt
    }
  }
`;

export default function UsedItemDetailPage() {
  const router = useRouter();

  // // console.log(router);

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: router.query.itemId,
    },
  });
  // // console.log(data);

  return (
    <>
      <div>상품 상세보기 페이지입니다. </div>
      <div>아이디 : {data?.fetchUseditem._id}</div>
      <div>제목(remarks) : {data?.fetchUseditem.remarks}</div>
      <div>작성자 : {data?.fetchUseditem.name}</div>
      <div>가격 : {data?.fetchUseditem.price}</div>
      <div>태그 : {data?.fetchUseditem.tags}</div>
      <div>이미지 : {data?.fetchUseditem.images}</div>
    </>
  );
}
