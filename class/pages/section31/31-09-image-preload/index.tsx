import { useRouter } from "next/router";
import { useEffect } from "react";

// 용량이 매우 큰 이미지의 경우 이동하기 전 미리 다운로드 받는다면 더욱 효율적입니다.
// 그러나 함수안에 qqq를 저장하게 되면 렌더링되면서 qqq가 저장되지 않기때문에 함수 밖에 작성합니다.

const qqq = [];

export default function ImagePreloadPage(): JSX.Element {
  const router = useRouter();

  useEffect(() => {
    const img = new Image();
    img.src =
      "https://upload.wikimedia.org/wikipedia/commons/9/96/%22Den_kjekke_gutt%22_-_6._Internasjonale_Akademiske_Vinterleker_%281939%29_%2840200856483%29.jpg";
    img.onload = () => {
      qqq.push(img);
    };
  }, []);

  const onClickMove = (): void => {
    void router.push("/section31/31-09-image-preload-moved");
  };

  return (
    <>
      <button onClick={onClickMove}>페이지 이동하기!</button>
    </>
  );
}
