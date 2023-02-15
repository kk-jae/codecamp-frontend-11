import { BodyHeader } from "../stlyed";
import { IProps } from "../type";

export default function BodyUI(props: IProps) {
  return (
    <BodyHeader>
      <div>{props.children}</div>
    </BodyHeader>
  );
}
