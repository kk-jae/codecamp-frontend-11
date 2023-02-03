import {
  collection,
  addDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore/lite";

import { firebaseApp } from "../../../src/commons/libraries/firebase";

export default function FirebasePage(): JSX.Element {
  const onClickSubmit = (): void => {
    const board = collection(getFirestore(firebaseApp), "board");

    // board에 {}를 넣습니다.
    void addDoc(board, {
      writer: "철수",
      title: "안녕하세요",
      contents: "반갑습니다.",
    });
  };

  const onClickFetch = async (): Promise<void> => {
    const board = collection(getFirestore(firebaseApp), "board");
    const result = await getDocs(board);
    const datas = result.docs.map((el) => el.data()); // map을 사용해서 꺼내와야합니다.
    console.log(datas);
    // board의 모든 문서를 가져와줘
  };

  return (
    <div>
      <button onClick={onClickSubmit}>등록하기</button>
      <button onClick={onClickFetch}>조회하기</button>
    </div>
  );
}
