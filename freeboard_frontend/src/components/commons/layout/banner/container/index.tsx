import { useRouter } from "next/router";
import BannerUI from "../presenter";

export default function BannerContainer() {
  const router = useRouter();

  const onClickBoard = () => {
    router.push("/homepage/list");
  };

  const onClickUsedItem = () => {
    router.push("/homepage/UsedItem/list");
  };

  return (
    <BannerUI onClickBoard={onClickBoard} onClickUsedItem={onClickUsedItem} />
  );
}
