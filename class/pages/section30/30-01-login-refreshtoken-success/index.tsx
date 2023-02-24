import { gql, useApolloClient } from "@apollo/client";
import { wrapAsync } from "../../../src/commons/libraries/asyncFunc";

const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      email
      name
      _id
    }
  }
`;
//  헤더에 토큰이 있어야 조회 할 수 있는 query입니다.

export default function LoginPage(): JSX.Element {
  // 1. 페이지 접속하면 자동으로 data에 받아지고 (data는 글로벌스테이트 저장), 리렌더링됨
  // const { data } = useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  // 2. 버튼 클릭시 data에 받아지고(data는 글로벌스테이트 저장), 리렌더링됨
  // const [ 나의함수, {data} ] = useLazyQuery(FETCH_USER_LOGGED_IN)

  // 3. axios 처럼 사용하는 방법
  // const client = useApolloClient()
  // client.query() <==> axios.get

  const client = useApolloClient();

  const onClickButton = async (): Promise<void> => {
    const result = await client.query({
      query: FETCH_USER_LOGGED_IN,
    });
    console.log(result);
  };

  return (
    <>
      {/* <div>{data?.fetchUserLoggedIn.name}님 환영합니다!</div> */}
      <button onClick={wrapAsync(onClickButton)}>클릭하세요</button>
    </>
  );
}
