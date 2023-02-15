import { withAuth } from "../../../src/components/commons/withAuth";
import MyPageContainer from "../../../src/components/units/myPage/container";

function MyPage(): JSX.Element {
  return (
    <>
      <MyPageContainer />
    </>
  );
}

export default withAuth(MyPage);
