import Example from "../../../src/components/units/14-props-children-example";

export default function propsChildrenPage(): JSX.Element {
  return (
    // <Example school="다람쥐초등학교"/> 1번 방법

    // =====2번 방법=====
    <div>
      <div>++++++++++++ 빨간색 파란색 초록색 +++++++++++++</div>
      {/* 쏙 들어가기! 땡겨오기 */}
      <Example school="다람쥐초등학교">
        {/* Example안의 태그들이 props.children으로 자동 생성됩니다. */}
        <div>
          <input type="text" />
          <div>저는 철수입니다</div>
          <button>클릭해주세요!</button>
        </div>
      </Example>
      <div>++++++++++++ 빨간색 파란색 초록색 +++++++++++++</div>
    </div>
    // =====2번 방법=====
  );
}
