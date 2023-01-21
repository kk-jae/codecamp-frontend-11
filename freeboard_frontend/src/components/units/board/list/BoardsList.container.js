import { FETCH_BOARDS } from "../list/BoardsList.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardsListContainerUI from "../list/BoardsList.presenter";

export default function BoardsListContainer(props) {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARDS);
  // console.log(data);

  const onClickNewCreateBoard = async () => {
    router.push("/homework/new");
  };

  const onClickMovedBoard = async (event) => {
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
