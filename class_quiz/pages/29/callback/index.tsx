// `http://numbersapi.com/random?min=1&max=200`
// `https://koreanjson.com/posts/${num}`
// `https://koreanjson.com/posts?userId=${userId}`

import axios from "axios";
import Script from "next/script";
import { useState } from "react";

export default function CallBack() {
  // const [callBack, setCallBack] = useState("");
  // const [promise, setPromise] = useState("");
  // const [asyncAwait, setAsyncAwait] = useState("");

  const [text, setText] = useState([]);

  const onClickCallback = () => {
    const aa = new XMLHttpRequest();
    aa.open("get", `http://numbersapi.com/random?min=1&max=200`);
    aa.send();
    aa.addEventListener("load", (res: any) => {
      // console.log(res);
      const num = res.target?.response.split(" ")[0];

      const bb = new XMLHttpRequest();
      bb.open("get", `https://koreanjson.com/posts/${num}`);
      bb.send();
      bb.addEventListener("load", (res: any) => {
        const userId = JSON.parse(res.target?.response).UserId;
        const cc = new XMLHttpRequest();
        cc.open("get", `https://koreanjson.com/posts?userId=${userId}`);
        cc.send();
        cc.addEventListener("load", (res: any) => {
          setText(JSON.parse(res.target?.response));
          // console.log(JSON.parse(res.target?.response));
        });
      });
    });
  };

  const onClickPromise = () => {
    axios
      .get(`http://numbersapi.com/random?min=1&max=200`)
      .then((qqq: any) => {
        const num = qqq.data.split(" ")[0];
        return axios.get(`https://koreanjson.com/posts/${num}`);
      })
      .then((qqq) => {
        const userId = qqq.data.UserId;
        return axios.get(`https://koreanjson.com/posts?userId=${userId}`);
      })
      .then((qqq) => {
        // console.log(qqq.data);
        setText(qqq.data);
      });
  };

  const onClickAsyncAwait = async () => {
    const aaa = await axios.get(`http://numbersapi.com/random?min=1&max=200`);
    const num = aaa.data.split(" ")[0];

    const bbb = await axios.get(`https://koreanjson.com/posts/${num}`);
    const userId = bbb.data.UserId;
    const ccc = await axios.get(
      `https://koreanjson.com/posts?userId=${userId}`
    );
    // console.log(ccc.data);
    setText(ccc.data);
  };

  return (
    <div>
      결과 :<button onClick={onClickCallback}>Callback</button> <br />
      결과 :<button onClick={onClickPromise}>Promise</button>
      <br />
      결과 :<button onClick={onClickAsyncAwait}>Async/Await</button>
      <br />
      {text.map((el: any) => (
        <div>{el.content}</div>
      ))}
    </div>
  );
}
