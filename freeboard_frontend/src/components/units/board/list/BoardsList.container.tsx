import { FETCH_BOARDS } from "./BoardsList.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardsListContainerUI from "./BoardsList.presenter";

export default function BoardsListContainer() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARDS);
  // console.log(data);

  const onClickNewCreateBoard = async () => {
    router.push("/homework/new");
  };

  const onClickMovedBoard = async (event: any) => {
    console.log(event.target.id);
    router.push(`/homework/${event.target.id}`);
  };

  return (
    <BoardsListContainerUI
      data={data}
      onClickNewCreateBoard={onClickNewCreateBoard}
      onClickMovedBoard={onClickMovedBoard}
    ></BoardsListContainerUI>
  );
}
