import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import DetailProductPageUI from "../Fetch/ProductWrite.presenter";
import { FETCH_PRODUCT } from "./ProductWrite.queries";

export default function DetailProductPageContainer() {
  const router = useRouter();
  const { data } = useQuery(FETCH_PRODUCT, {
    variables: { productId: router.query.myId },
  });

  // console.log(data);
  console.log(router);

  const onClickUpdateProduct = () => {
    router.push(`/09/${router.query.myId}/edit`);
  };

  return (
    <DetailProductPageUI
      data={data}
      router={router}
      onClickUpdateProduct={onClickUpdateProduct}
    />
  );
}
