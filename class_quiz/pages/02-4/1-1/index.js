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
    if (email) {
      setEmailError("");
    }
  }

  function onChangePw1(event) {
    setPw1(event.target.value);
    if (pw1) {
      setPw1Error("");
    }
  }

  function onChangePw2(event) {
    setPw2(event.target.value);
    if (pw2) {
      setPw2Error("");
    }
  }

  // if문을 나눠서 선언해야 클릭할때마다 Error 알림을 최신화 합니다. (다시해볼 것)
  function onClickSighUp() {
    if (email.indexOf("@") == -1) {
      setEmailError("이메일에 '@'가 없습니다.");
    }

    if (!pw1) {
      setPw1Error("비밀번호를 입력하세요.");
    }

    if (pw2 !== pw1) {
      setPw2Error("비밀번호가 다릅니다.");
    }

    if (email && pw1 && pw2 && pw1 == pw2) {
      alert("회원가입을 축하합니다!");
    }
  }

  return (
    <div>
      <div>
        이메일 :{" "}
        <input
          type="email"
          onChange={onChangeEmail}
          placeholder="이메일을 입력하세요"
        />
      </div>
      <Error>{emailError}</Error>
      <div>
        비밀번호 :{" "}
        <input
          type="password"
          onChange={onChangePw1}
          placeholder="비밀번호를 입력하세요"
        />
      </div>
      <Error>{pw1Error}</Error>

      <div>
        비밀번호 확인 :{" "}
        <input
          type="password"
          onChange={onChangePw2}
          placeholder="비밀번호를 다시 입력하세요"
        />
      </div>
      <Error>{pw2Error}</Error>
      <div>
        <button onClick={onClickSighUp}>가입하기</button>
      </div>
    </div>
  );
}
