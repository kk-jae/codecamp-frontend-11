import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../src/commons/types/generated/types";
import { WithAuth } from "../../../src/components/units/commons/example/hoc/withAuth";

const FETCH_USER_LOGGEDIN = gql`
  query {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

function HocMainPage() {
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGEDIN);

  return (
    <>
      <div>안녕하세요 {data?.fetchUserLoggedIn.name}님 만나서 반갑습니다.</div>
    </>
  );
}

export default WithAuth(HocMainPage);
