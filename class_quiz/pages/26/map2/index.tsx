import { useRouter } from "next/router";

export default function KakaoMapPage() {
  const router = useRouter();
  const onClickMovePage = () => {
    router.push("/26/map1");
  };

  return (
    <>
      <button onClick={onClickMovePage}>이동하기</button>
    </>
  );
}
