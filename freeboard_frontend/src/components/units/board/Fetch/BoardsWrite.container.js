import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARD } from "./BoardsWrite.queries";
import PortFolioQueryUI from "../Fetch/BoardsWrite.presenter";

export default function PortFolioQueryContainer() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query._id },
  });
  console.log(data);

  return (
    <PortFolioQueryUI
      data={data}
      // _id={data}
      // writer={data}
      // title={data}
      // contents={data}
      // youtubeUrl={data}
      // createdAt={data}
    />
  );
}
