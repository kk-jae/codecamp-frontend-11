import { gql, useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/libraries/stores";
import { IQuery } from "../../../../commons/types/generated/types";

const FETCH_USER_LOGGEID = gql`
  query {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function MyPageUI() {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGEID);

  return (
    <div>
      <div>이름 : {data?.fetchUserLoggedIn?.name}</div>
      <div>이메일 : {data?.fetchUserLoggedIn?.email}</div>
    </div>
  );
}
