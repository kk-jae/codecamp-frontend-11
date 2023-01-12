import axios from "axios";

// 버튼을 눌렀을때 rest api 의  https://koreanjson.com/users 링크를 받아옵니다.
export default function restReview() {
  const onClickRestBtn = async () => {
    const result = await axios.get("https://koreanjson.com/users");
    console.log(result);
  };

  return <button onClick={onClickRestBtn}>REST-API 요청하기</button>;
}
