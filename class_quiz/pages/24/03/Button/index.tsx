import { UseFormRegisterReturn } from "react-hook-form";
import { register } from "ts-node";

interface IProps {
  type?: "text" | "password";
  register: UseFormRegisterReturn;
}

export default function Input01(props: IProps) {
  return <input type={props.type} {...props.register} />;
}
