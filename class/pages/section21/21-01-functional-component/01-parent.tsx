import ChildPage from "./02-child";

export default function ParentPage(): JSX.Element {
  return (
    <div>
      {/* <ChildPage count={10} /> */}
      {ChildPage({ count: 10 })}
      {/* count : 10 이 props로 넘어갑니다. 
      props라는 단어는 매개변수 이므로 임의로 변경 가능합니다. */}
    </div>
  );
}
