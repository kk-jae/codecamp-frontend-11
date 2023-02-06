import HeaderUI from "../presenter";
import axios from "axios";
import { useEffect, useState } from "react";

export default function HeaderContainer() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const [weather, setWeather] = useState("");

  // useEffect(() => {
  const onClickWeather = async (): Promise<void> => {
    const result = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&&appid=f233f712a0fe764e01ec4207d619afcb`
    );

    // console.log(result.data.weather[0].main);
    setWeather(result.data.weather[0].main);
    console.log(weather);
  };
  // }, []),
  useEffect(() => {
    const onClickSync = async (): Promise<void> => {
      const result = await axios.get(
        "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m"
      );
      setLatitude(result.data.latitude);
      setLongitude(result.data.longitude);
      // console.log(result.data.latitude); // 사진 주소 (API에서 불러올 수 있음)
      // console.log(result); // 사진 주소 (API에서 불러올 수 있음)
      // setDog(result.data.message);
    };
    void onClickSync();
  });
  return (
    <>
      <HeaderUI weather={weather} />
      <button onClick={onClickWeather}>날씨 불러오기</button>
    </>
  );
}
