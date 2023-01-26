import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
import { useState } from 'react';

export default function DatePickerQuiz() {
  
  const [date, setdate] = useState("")

  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    // console.log(date, dateString);
    console.log(dateString);    
    setdate(dateString)
  };

  return (
  <Space direction="vertical">
    <DatePicker onChange={onChange}/>  
    <div>{date}</div>
  </Space>
  );
}