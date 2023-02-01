import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function IsChangedPage() {
  const [isChanged, setIsChanged] = useState(false);
  const router = useRouter();

  const onClickChangedBtn = () => {
    // alert("Changed!!");
    setIsChanged(true);
  };

  const onClickMovedBtn = () => {
    router.push("/");
  };

  useEffect(() => {
    alert("Rendered!");
  }, []);

  useEffect(() => {
    alert("Changed!!");
  }, [isChanged]);

  useEffect(() => {
    return () => {
      alert("Bye!!");
    };
  }, []);

  return (
    <div>
      <button onClick={onClickChangedBtn}>변경</button>
      <button onClick={onClickMovedBtn}>이동</button>
    </div>
  );
}
