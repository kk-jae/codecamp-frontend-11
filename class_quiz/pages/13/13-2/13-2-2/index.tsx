import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';

export default function DatePickerQuiz() {

  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <Space direction="vertical">

    <DatePicker onChange={onChange} picker="month" />
 
  </Space>
  );
}