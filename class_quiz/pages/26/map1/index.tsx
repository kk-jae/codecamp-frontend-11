import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMapPage(): JSX.Element {
  useEffect(() => {
    const script = document.createElement("script"); // <script></script>
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=1eb43d8b4157c3b6f8b95c19a43d7619";
    document.head.appendChild(script); // <head><script></script></head>

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };

        const map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
        const imageSrc = "/quiz_2/kakao.png", // 마커이미지의 주소입니다
          imageSize = new window.kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
          imageOption = { offset: new window.kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다

        const markerImage = new window.kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imageOption
        );
        const marker = new window.kakao.maps.Marker({
          // 지도 중심좌표에 마커를 생성합니다
          position: map.getCenter(),
          image: markerImage,
        });

        marker.setMap(map);

        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent: any) {
            // 클릭한 위도, 경도 정보를 가져옵니다
            const latlng = mouseEvent.latLng;

            // 마커 위치를 클릭한 위치로 옮깁니다
            marker.setPosition(latlng);

            let message = "클릭한 위치의 위도는 " + latlng.getLat() + " 이고, ";
            message += "경도는 " + latlng.getLng() + " 입니다";

            const resultDiv = document.getElementById("clickLatlng");
            if (resultDiv !== null) {
              resultDiv.innerHTML = message;
            }

            const imageSrc = "/quiz_2/kakao.png", // 마커이미지의 주소입니다
              imageSize = new window.kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
              imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다
          }
        );
      });
    };
  }, []);

  return (
    <>
      <div id="map" style={{ width: 500, height: 400 }}></div>
    </>
  );
}
