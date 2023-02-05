import BodyUI from "../presenter";

export default function BodyContainer(props) {
  return (
    <BodyUI>
      <div>{props.children}</div>
    </BodyUI>
  );
}
