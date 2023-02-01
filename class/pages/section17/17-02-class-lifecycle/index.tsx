import { Component } from "react";
import Router from "next/router";

export default class ClassCounterPage extends Component {
  // extends를 사용하여 리액트 기능 중 하나인 Component를 상속 받습니다.
  state = {
    count: 5,
  };

  componentDidMount(): void {
    // Component 의 기능
    console.log("그려지고 나서 실행!!");
  }

  componentDidUpdate(): void {
    // Component 의 기능
    console.log("변경되고 나서 실행!!");
  }

  componentWillUnmount(): void {
    // Component 의 기능
    console.log("사라지기전에 실행");
    // 예시) 채팅방 나가기 API
  }

  onClickCountUp = (): void => {
    // console.log(this.state.count);
    this.setState({
      count: 1,
    });
  };

  onClickMove = (): void => {
    void Router.push("/");
  };

  render(): JSX.Element {
    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={this.onClickCountUp}>카운트 올리기!!</button>
        <button onClick={this.onClickMove}>나가기!!</button>
      </>
    );
  }
}
