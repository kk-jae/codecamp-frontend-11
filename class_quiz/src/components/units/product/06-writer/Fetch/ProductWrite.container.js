import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_PRODUCT } from "./ProductWrite.queries";
import ProductQueryUI from "./ProductWrite.presenter";

export default function ProductQuery() {
  const router = useRouter();
  console.log(router);

  const { data } = useQuery(FETCH_PRODUCT, {
    variables: { productId: router.query._id },
  });

  console.log(data);
  return <ProductQueryUI data={data} />;
}
