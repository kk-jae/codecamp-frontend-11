import CreateBoardCommentList from "../../../src/components/units/board/Comments/list/BoardsWrite.container";
import CreateBoardCommentWriter from "../../../src/components/units/board/Comments/writer/BoardsWrite.container";


export default function PortFolioMovedComments() {
  return (
    <div>
      <CreateBoardCommentWriter/>
      <CreateBoardCommentList/>
    </div>
  );
}
