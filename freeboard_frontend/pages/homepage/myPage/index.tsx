import { withAuth } from "../../../src/components/commons/withAuth";
import MyPageUI from "../../../src/components/units/myPage";

function MyPage(): JSX.Element {
  return (
    <>
      <MyPageUI />
    </>
  );
}

export default withAuth(MyPage);
