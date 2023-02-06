import { BodyHeader } from "../stlyed";

export default function BodyUI(props) {
  return (
    <BodyHeader>
      <div>{props.children}</div>
    </BodyHeader>
  );
}
