import Link from "next/link";
import { useRouter } from "next/router";

export default function KakaoMapPage(): JSX.Element {
  const router = useRouter();

  const onClickMove = () => {
    void router.push("/section25/25-01-kakao-map-routing-moved");
  };

  //  SPA 와 MPA
  //  SPA : 새로고침시 페이지들을 미리 불러와서 이동시 속도가 빠름
  //  MPA : 페이지 이동할때마다 새로고침되어 속도가 SPA 방식에 비해 느림 (옛날 방식)

  return (
    <>
      {/* 처음 입장(새로고침) 할 때 모든 페이지를 불러오므로 이동시 굉장히 빠름 */}
      {/* 지도는 속도를 따라가지 못해 에러 발생 */}
      <div>
        <button onClick={onClickMove}>
          router를 이용하여 카카오 맵 페이지로 이동하기
        </button>
      </div>

      <div>
        {/* 매 페이지를 새로 다운로드 받으므로 SPA 활용 못함 */}
        <a href="/section25/25-01-kakao-map-routing-moved">
          XXX a 태그 카카오 맵 페이지로 이동하기 XXX
        </a>
      </div>
      <div>
        {/* next에서 제공하는 a태그 이므로, SPA 활용 가능 + <a>를 써서 검색 좋아짐 */}
        <Link href="/section25/25-01-kakao-map-routing-moved">
          <a>Link 태그 카카오 맵 페이지 이동하기</a>
        </Link>

        {/* 의미가 있는 시멘틱 태그의 장점 */}
        <h1>시멘틱태그</h1>
        <h2>요리</h2>
        <div>요리</div>
        <section>요리</section>
      </div>
    </>
  );
}
