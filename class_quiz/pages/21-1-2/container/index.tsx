import Presenter from "../presenter";

export default function Container(): JSX.Element {
  return (
    <>
      {/* <Presenter child="철수" age={13} /> */}
      {Presenter({ child: "철수", age: 13 })}
    </>
  );
}
