import { Rate } from 'antd';
import React, { useState } from 'react';

// https://ant.design/
// https://mui.com/

export default function LibraryRating() {

    const [value, setValue] = useState(3);
  
  return(
  <span>
    <Rate  onChange={setValue} value={value} />
    <div>{value}점</div>
  </span>

  );

}