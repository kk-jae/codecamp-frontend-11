import CreateBoardCommentList from "../../../src/components/units/board/Comments/list/BoardCommentList.container";
import CreateBoardCommentWriter from "../../../src/components/units/board/Comments/writer/BoardCommentWriter.container";


export default function PortFolioMovedComments() {
  return (
    <div>
      <CreateBoardCommentWriter/>
      <CreateBoardCommentList/>
    </div>
  );
}
