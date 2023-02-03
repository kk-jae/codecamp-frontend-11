import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import {
  collection,
  addDoc,
  getDocs,
  getFirestore,
  deleteDoc,
  updateDoc,
  deleteField,
} from "firebase/firestore/lite";
import { firebaseApp } from "../../../src/commons/libraries/firebase";

export default function FirebasePage(): JSX.Element {
  const router = useRouter();

  const onClickFirebaseLink = () => {
    router.push("https://firebase.google.com/?hl=ko");
  };

  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.currentTarget.value);
  };
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value);
  };
  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.currentTarget.value);
  };

  const onClickSubmit = () => {
    const practice = collection(getFirestore(firebaseApp), "practice");

    void addDoc(practice, {
      writer,
      title,
      contents,
    });

    setWriter("");
    setTitle("");
    setContents("");
  };

  const onClickFetch = async (): Promise<void> => {
    const practice = collection(getFirestore(firebaseApp), "practice");
    const result = await getDocs(practice);
    const datas = result.docs.map((el) => el.data());
    console.log(datas);
  };

  const onClickDelete = async () => {
    const practice = collection(getFirestore(firebaseApp), "practice");
    await updateDoc(practice, {
      capital: deleteField(),
    });
  };

  return (
    <>
      <button onClick={onClickFirebaseLink}>Firebase 홈페이지</button>
      <div>
        <div>
          작성자 :
          <input onChange={onChangeWriter} />
        </div>
        <div>
          제목 :
          <input onChange={onChangeTitle} />
        </div>
        <div>
          내용 :
          <input onChange={onChangeContents} />
        </div>
      </div>
      <button onClick={onClickSubmit}>등록하기</button>
      <button onClick={onClickFetch}>조회하기</button>
      <button onClick={onClickDelete}>삭제하기</button>
    </>
  );
}
