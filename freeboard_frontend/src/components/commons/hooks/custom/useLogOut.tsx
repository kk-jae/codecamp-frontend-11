import { useMutationLogOutUser } from "../mutation/useMutationLogOutUser";

export default function useLogOut() {
  const [logoutUser] = useMutationLogOutUser();

  const onClickLogOut = async () => {
    await logoutUser();
    window.location.replace("/homepage/list");
  };

  return { onClickLogOut };
}
