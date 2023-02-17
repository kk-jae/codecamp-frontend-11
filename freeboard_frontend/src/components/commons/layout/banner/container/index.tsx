import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../../commons/types/generated/types";
import BannerUI from "../presenter";
import { BEST_ITEM } from "../query";

export default function BannerContainer() {
  const { data } = useQuery<
    Pick<IQuery, "fetchBoardsOfTheBest">,
    IQueryFetchBoardsArgs
  >(BEST_ITEM);
  // const router = useRouter();
  // // console.log(data);

  // const onClickMoveBestItem = (event) => {
  //   // // console.log(event.target);
  // };
  return <BannerUI data={data} />;
}
