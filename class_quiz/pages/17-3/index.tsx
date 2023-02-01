import axios from "axios";
import { useEffect, useState } from "react";

export default function OpenDogAPI(): JSX.Element {
  const [dog, setDog] = useState("");

  useEffect(() => {
    const OpenDogAPIFunc = async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      // console.log(result.data.message);
      setDog(result.data.message);
    };

    OpenDogAPIFunc();
  }, []);

  return (
    <>
      <img src={dog} />
    </>
  );
}
