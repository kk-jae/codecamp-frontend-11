import { Component } from "react";

export default class ClassCounterPage extends Component {
  // extends를 사용하여 리액트 기능 중 하나인 Component를 상속 받습니다.
  state = {
    count: 5,
  };

  // 화살표 함수로 변경하여 this 사용
  onClickCountUp = (): void => {
    // 변경전 onClickCountUp(): void {
    console.log(this.state.count);
    this.setState({
      count: 1,
    });
  };

  // render 작성 (정해진 규칙)
  render(): JSX.Element {
    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={this.onClickCountUp}>카운트 올리기!!</button>
      </>
    );
  }
}
