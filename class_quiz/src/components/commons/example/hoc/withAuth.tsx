import { useRouter } from "next/router";
import { useEffect } from "react";

export const withAuth = (Component: any) => (Props: any) => {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("accessToken") == undefined) {
      alert("로그인을 먼저 해주세요~");
      router.push("/23/23-hoc-login");
    }
  }, []);

  return (
    <>
      <Component {...Props} />
    </>
  );
};
