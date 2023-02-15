interface IProps {
  title: string;
}

export default function Button01(props: IProps) {
  return <button>{props.title}</button>;
}
