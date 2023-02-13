import PortFolioQueryContainer from "../../../src/components/units/board/Fetch/BoardsWrite.container";
import PortFolioMovedComments from "../comment/index";
export default function PortFolioMoved() {
  return (
    <div>
      <PortFolioQueryContainer />
      {/* <PortFolioMovedComments /> */}
    </div>
  );

  //const router = useRouter() 사용이 가능합니다 ([_id]가 있으므로)
}
