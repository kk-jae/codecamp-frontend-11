import React, { useState } from 'react';
import { Rate } from 'antd';
// ★ 기능은 잘 되고 CSS가 작 되지 않는다면 라이브러리에 맞는 CSS도 함께 import 해주면 됩니다. ★

// const App: React.FC = () => {
//   const [value, setValue] = useState(3);

//   return (
//     <span>
//       <Rate tooltips={desc} onChange={setValue} value={value} />
//     </span>
//   );
// };

// export default App;

export default function App():JSX.Element {
  const [value, setValue] = useState(5);
  console.log(value);

  // ===== 1단계 방식 ===== 
  // const onChangeStar = (value:number):void => {
  //   setValue(value);
  // };
  // ===== 1단계 방식랑 똑같이 생긴 함수 ===== 
  // const onChangeStar = () => {
  //   const value = number
  //   setValue(value);
  // };
  
  // ===== 2단계 방식 =====
  // const onChangeStar = (value) => setValue(value);

  return (
      // <Rate onChange={onChangeStar} value={value} />                       // 1단계 방식
      // <Rate onChange={onChangeStar} value={value} />                       // 2단계 방식
      // <Rate onChange={(value) => setValue(value)} value={value} />         // 3단계 방식
      <Rate onChange={setValue} value={value} />                              // 4단계 방식
      // 우리가 사용한 onChange와는 다릅니다.
  );
};

