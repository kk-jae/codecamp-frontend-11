import type { UseFormRegisterReturn } from "react-hook-form";

interface IInputProps {
  type?: "text" | "password"; // ?를 추가하면 type이 없어도 된다는 의미입니다.
  register: UseFormRegisterReturn; // react-hook-form 에서 제공하는 타입
}

export default function Input01(props: IInputProps): JSX.Element {
  return <input type={props.type ?? "text"} {...props.register} />;
  // type가 없으면 기본으로 "text"
}
