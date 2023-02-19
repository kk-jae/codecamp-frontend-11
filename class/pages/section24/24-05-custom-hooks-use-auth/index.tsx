import { useAuth } from "../../../src/components/commons/hooks/useAuth";

export default function CustomHooksUseAuthPage(): JSX.Element {
  useAuth(); // 로그인 검증 hooks

  return (
    <>
      <div>프로필 페이지입니다.</div>
    </>
  );
}

// use를 사용한 로그인 체크입니다.
