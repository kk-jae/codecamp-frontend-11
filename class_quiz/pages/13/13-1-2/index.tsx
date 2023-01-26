import { Rate } from 'antd';
import { addListener } from 'process';
import React, { useState } from 'react';

// https://ant.design/
// https://mui.com/

export default function LibraryRating() {

    const [value, setValue] = useState(3);
    


    const setValues = (value:number)=> {
      setValue(value);
      alert(`${value}점`);  
    }
    
  return(
  <span>
    <Rate onChange={setValues} value={value} />
  </span>

  );

}