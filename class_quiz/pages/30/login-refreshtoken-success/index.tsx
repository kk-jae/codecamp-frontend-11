import { gql, useApolloClient } from "@apollo/client";
import { wrapAsync } from "../../../src/commons/library/asyncFunc";

const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      email
      name
      _id
    }
  }
`;

export default function LoginPage(): JSX.Element {
  const client = useApolloClient();

  const onClickButton = async (): Promise<void> => {
    const result = await client.query({
      query: FETCH_USER_LOGGED_IN,
    });
    console.log(result);
  };

  return (
    <>
      <button onClick={wrapAsync(onClickButton)}>클릭하세요</button>
    </>
  );
}
