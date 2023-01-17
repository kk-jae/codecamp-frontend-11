import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { DELETE_BOARD, FETCH_BOARD } from "./BoardsWrite.queries";
import PortFolioQueryUI from "../Fetch/BoardsWrite.presenter";

export default function PortFolioQueryContainer() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query._id },
  });
  // console.log(data);
  console.log(router);

  const [deleteBoard] = useMutation(DELETE_BOARD);

  const onClickDelete = () => {
    deleteBoard({
      variables: { boardId: router.query._id },
      refetchQueries: [{ query: DELETE_BOARD }],
    });
  };
  return (
    <PortFolioQueryUI
      data={data}
      onClickDelete={onClickDelete}
      // _id={data}
      // writer={data}
      // title={data}
      // contents={data}
      // youtubeUrl={data}
      // createdAt={data}
    />
  );
}
