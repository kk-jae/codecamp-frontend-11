import axios from "axios";
export default function Quiz04_1() {
  const onClickQuiz4 = async () => {
    const result = await axios.get(" https://koreanjson.com/users");
    console.log(result);
  };

  return <button onClick={onClickQuiz4}>REST-API 요청하기</button>;
}
