import BodyUI from "../presenter";
import { IProps } from "../type";

export default function BodyContainer(props: IProps) {
  return (
    <BodyUI>
      <div>{props.children}</div>
    </BodyUI>
  );
}
