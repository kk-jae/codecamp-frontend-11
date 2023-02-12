import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BannerUI from "../presenter";
import { BEST_ITEM } from "../query";

export default function BannerContainer() {
  const { data } = useQuery(BEST_ITEM);
  // const router = useRouter();
  // console.log(data);

  // const onClickMoveBestItem = (event) => {
  //   // console.log(event.target);
  // };
  return <BannerUI data={data} />;
}
