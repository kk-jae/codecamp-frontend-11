import { useState } from "react";
import { Error } from "../../../styles/sighup-state";

export default function SighUpState() {
  const [email, setEmail] = useState("");
  const [pw1, setPw1] = useState("");
  const [pw2, setPw2] = useState("");

  const [emailError, setEmailError] = useState("");
  const [pw1Error, setPw1Error] = useState("");
  const [pw2Error, setPw2Error] = useState("");

  function onChangeEmail(event) {
    setEmail(event.target.value);
  }

  function onChangePw1(event) {
    setPw1(event.target.value);
  }

  function onChangePw2(event) {
    setPw2(event.target.value);
  }

  function onClickSighUp() {
    if (email.includes("@") === false) {
      setEmailError("이메일에 @가 없습니다.");
    } else if (pw1 !== pw2) {
      setPw2Error("비밀번호가 다릅니다.");
    } else {
      alert("회원가입에 성공하였습니다.");
    }
  }

  return (
    <div>
      <div>
        이메일 : <input type="email" onChange={onChangeEmail} />
      </div>
      <Error>{emailError}</Error>
      <div>
        비밀번호 : <input type="password" onChange={onChangePw1} />
      </div>
      <Error>{pw1Error}</Error>

      <div>
        비밀번호 확인 : <input type="password" onChange={onChangePw2} />
      </div>
      <Error>{pw2Error}</Error>
      <div>
        <button onClick={onClickSighUp}>가입하기</button>
      </div>
    </div>
  );
}
