import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARD } from "../Fetch/BoardsWrite.queries";
import PortFolioQueryUI from "../Fetch/BoardsWrite.presenter";

export default function PortFolioQueryContainer() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });
  // console.log(data);
  // console.log(router);

  const onClickContents = async () => {
    console.log(router);
    router.push(`/homework/${router.query.boardId}/edit`);
  };

  return (
    <PortFolioQueryUI
      data={data}
      onClickContents={onClickContents}
      // _id={data}
      // writer={data}
      // title={data}
      // contents={data}
      // youtubeUrl={data}
      // createdAt={data}
    />
  );
}
