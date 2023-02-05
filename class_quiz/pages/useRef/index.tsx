import { useRef } from "react";

export default function USERefPage() {
  const writerInput = useRef(null);

  const onClickRefTest = () => {
    writerInput.current.focus();
    console.log(writerInput);
  };
  return (
    <div>
      <div>
        작성자 : <input ref={writerInput} />
      </div>
      <div>
        내용 : <input />
      </div>
      <div>
        비밀번호 : <input />
      </div>
      <button onClick={onClickRefTest}>ref 버튼</button>
    </div>
  );
}
