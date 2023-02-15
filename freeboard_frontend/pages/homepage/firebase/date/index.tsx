import { useRef, useState } from "react";
import { Badge, Alert, Calendar } from "antd";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import type { BadgeProps } from "antd";

export default function DateLibrary() {
  const [value, setValue] = useState(() => dayjs("2023-01-01"));
  const [selectedValue, setSelectedValue] = useState(() => dayjs("2023-01-01"));

  const [month, setMonth] = useState(0);
  const [day, setDay] = useState(0);
  const [writer, setWriter] = useState("");

  const dateRef = useRef(null);
  const writerRef = useRef(null);

  const [date, setDate] = useState([{ type: "", content: "" }]);

  const onSelect = (newValue: Dayjs) => {
    setValue(newValue);
    setSelectedValue(newValue);
    // console.log(newValue);
  };

  const onPanelChange = (newValue: Dayjs) => {
    setValue(newValue);
  };

  // const onChangeWriter = (event) => {
  //   setWriter(event.target.value);
  // };

  // const onChangeDate = (event) => {
  //   const _date = new Date(event.target.valueAsDate);
  //   const mm = _date.getMonth(); // 월 ( getListData 에서 알아서 +1해줌)
  //   const dd = _date.getDate(); // 일
  //   setMonth(mm);
  //   setDay(dd);
  // };

  const getListData = (value: Dayjs) => {
    let listData;

    if (value.date() === day && value.month() === month) {
      listData = [{ type: "", content: writer }];
    }

    return listData || [];
  };

  const dateCellRender = (value: Dayjs) => {
    const listData = getListData(value);

    const onChangeWriter = (event) => {
      setWriter(event.target.value);
    };

    const onChangeDate = (event) => {
      const _date = new Date(event.target.valueAsDate);
      const mm = _date.getMonth(); // 월 ( getListData 에서 알아서 +1해줌)
      const dd = _date.getDate(); // 일
      setMonth(mm);
      setDay(dd);
    };
    const onClickBtn = (event) => {};

    return (
      <div>
        {listData.map((el) => (
          <li key={el.content}>
            <Badge status={el.type as BadgeProps["status"]} text={el.content} />
          </li>
        ))}
        <button onClick={onClickBtn}>버튼</button>
        ㅇㅁㄴㅇㄴㅁ
      </div>
      // </ul>
    );
  };

  return (
    <>
      <input type="date" />
      <div>
        작성자 : <input type="text" />
      </div>

      <Alert
        message={`You selected date: ${selectedValue?.format("YYYY-MM-DD")}`}
      />
      <Calendar
        value={value}
        onSelect={onSelect}
        onPanelChange={onPanelChange}
        dateCellRender={dateCellRender}
      />
    </>
  );
}
