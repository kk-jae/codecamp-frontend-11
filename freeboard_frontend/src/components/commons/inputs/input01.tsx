export default function Input01(props) {
  return <input type={props.type ?? "text"} {...props.register} />;
}
