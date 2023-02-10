import { useState } from "react";

export default function Container(): JSX.Element {
  const [state, setState] = useState(0);

  const onClickCounter = () => {
    setState((qwer) => qwer + 1);
  };

  return (
    <div>
      <div>{state}</div>
      <button onClick={onClickCounter}>클릭!</button>
    </div>
  );
}
