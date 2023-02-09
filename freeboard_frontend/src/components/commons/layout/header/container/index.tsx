import HeaderUI from "../presenter";
import { useRouter } from "next/router";

export default function HeaderContainer() {
  const router = useRouter();

  const onClickMovePage = (event) => {
    router.push(event.currentTarget.id);
  };

  const onClickLogo = () => {
    router.push("/homepage");
  };

  return (
    <>
      <HeaderUI onClickMovePage={onClickMovePage} onClickLogo={onClickLogo} />
    </>
  );
}
