import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import {
  collection,
  addDoc,
  getDocs,
  getFirestore,
  deleteDoc,
  updateDoc,
  deleteField,
  DocumentData,
} from "firebase/firestore/lite";
import { firebaseApp } from "../../../src/commons/libraries/firebase";
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";

export default function FirebasePage(): JSX.Element {
  const router = useRouter();

  const onClickFirebaseLink = () => {
    router.push("https://firebase.google.com/?hl=ko");
  };

  const [writer, setWriter] = useState("");
  const [place, setPlace] = useState("");
  const [date, setDate] = useState("");

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.currentTarget.value);
  };
  const onChangePlace = (event: ChangeEvent<HTMLInputElement>) => {
    setPlace(event.currentTarget.value);
  };

  const onChangeDate = (event) => {
    setDate(event.target.value);
    // console.log(event.target.value);
  };
  const onClickSubmit = () => {
    const concertDate = collection(getFirestore(firebaseApp), "concertDate");

    void addDoc(concertDate, {
      writer,
      place,
      date,
    });

    setWriter("");
    setPlace("");
    setDate("");

    console.log(date);
  };

  const [concertDates, setConcertDates] = useState<DocumentData[]>([]);

  const onClickFetch = async (): Promise<void> => {
    const concertDate = collection(getFirestore(firebaseApp), "concertDate");
    const result = await getDocs(concertDate);
    const datas = result.docs.map((el) => el.data());
    setConcertDates(datas);
    console.log(concertDates.map((el) => el.writer));
  };

  // const onClickDelete = async () => {
  //   const practice = collection(getFirestore(firebaseApp), "practice");
  //   await updateDoc(practice, {
  //     capital: deleteField(),
  //   });
  // };

  // 달력 시작

  return (
    <>
      <button onClick={onClickFirebaseLink}>Firebase 홈페이지</button>
      <div>
        <div>
          작성자 :
          <input onChange={onChangeWriter} />
        </div>

        <div>
          장소 :
          <input onChange={onChangePlace} />
        </div>
        <div>
          날짜 : <input type="datetime-local" onChange={onChangeDate} />
        </div>
      </div>
      <button onClick={onClickSubmit}>등록하기</button>
      <button onClick={onClickFetch}>조회하기</button>
      {/* <button onClick={onClickDelete}>삭제하기</button> */}
      <div>===========조회 목록===========</div>
      {/* <div>{concertDate.map((el) => el.writer)}</div> */}
    </>
  );
}
