import axios from "axios";
//rest api 를 불러오기 위한 도구입니다.
import 나만의페이지 from "../../section01/01-01-example";

export default function RestGetPage() {
  function onClickAsync() {
    const result = axios.get("https//koreanjson.com/posts/1");
    console.log(result);
    // 넣을게 없으니까 Promise 라는 값이 출력됩니다.
  }

  // async function onClickSync() {
  //   const result = await axios.get("https//koreanjson.com/posts/1");               => 함수 중복 선언 문제가 발생할 수 있습니다.
  //   console.log(result); // 제대로된 결과 => {posts/1에 대한 내용 출력}
  //   console.log(result.data.title); // 제대로된 결과 출력
  // }

  const onClickSync = async () => {
    const result = await axios.get("https//koreanjson.com/posts/1");
    console.log(result); // 제대로된 결과 => {posts/1에 대한 내용 출력}
    console.log(result.data.title); // 제대로된 결과 출력
  };

  return (
    <div>
      <나만의페이지></나만의페이지>
      <button onClick={onClickAsync}>REST-API(비동기) 요청하기</button>
      <button onClick={onClickSync}>REST-API(동기) 요청하기</button>
    </div>
  );
}
