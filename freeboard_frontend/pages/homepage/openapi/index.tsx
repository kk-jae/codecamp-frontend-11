import axios from "axios";
import { useEffect, useState } from "react";

export default function RestGetPage(): JSX.Element {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    const onClickSync = async (): Promise<void> => {
      const result = await axios.get(
        "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m"
      );
      setLatitude(result.data.latitude);
      setLongitude(result.data.longitude);
      // console.log(result.data.latitude); // 사진 주소 (API에서 불러올 수 있음)
      console.log(result); // 사진 주소 (API에서 불러올 수 있음)
      // setDog(result.data.message);
    };
    void onClickSync();
  }, []);

  return (
    <div>
      <div>위도:{latitude}</div>
      <div>경도:{longitude}</div>

      {/* <button onClick={onClickSync}>REST-API(동기) 요청하기</button> */}
    </div>
  );
}
