import { useState } from "react";
import { useForm } from "react-hook-form";

export default function ImgReview() {
  const [imgUrls, setImgUrls] = useState(["", "", ""]);

  return (
    <form>
      <div>
        {imgUrls.map((el, index) => (
          <div key={index}>
            <input type="file" onChange={onChange} />
          </div>
        ))}
        <button>등록하기</button>
      </div>
    </form>
  );
}
