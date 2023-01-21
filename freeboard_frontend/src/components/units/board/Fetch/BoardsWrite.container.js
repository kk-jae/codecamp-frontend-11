import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { DELETE_BOARD, FETCH_BOARD } from "../Fetch/BoardsWrite.queries";
import PortFolioQueryUI from "../Fetch/BoardsWrite.presenter";

export default function PortFolioQueryContainer() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });
  // console.log(data);
  // console.log(router);

  const [deleteBoard] = useMutation(DELETE_BOARD);

  const onClickContents = async () => {
    router.push(`/homework/${router.query.boardId}/edit`);
  };

  const onClickNewCreateBoard = async () => {
    router.push("/homework/list");
  };

  const onClickDeleteBoard = async () => {
    deleteBoard({
      variables: { boardId: data.fetchBoard._id },
    });
    router.push("/homework/list");
    alert("게시글이 삭제되었습니다.");
  };

  return (
    <PortFolioQueryUI
      data={data}
      onClickContents={onClickContents}
      onClickNewCreateBoard={onClickNewCreateBoard}
      onClickDeleteBoard={onClickDeleteBoard}
      // _id={data}
      // writer={data}
      // title={data}
      // contents={data}
      // youtubeUrl={data}
      // createdAt={data}
    />
  );
}
