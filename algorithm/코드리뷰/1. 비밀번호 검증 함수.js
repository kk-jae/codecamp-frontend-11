// 비밀번호 2개를 입력받아 대소문자 구분없이 비교하는 기능을 하는 함수를 화살표 함수를 이용해 만들어야 합니다.

// 추가 조건 1. 만약 비밀번호가 8~16자리가 아니라면, "비밀번호는 8~16"자리여야 합니다" 라는 문구를 띄워야 합니다.

// 추가 조건 2. 만약 두 개의 비밀번호 값이 서로 다르면 "비밀번호를 다시 확인해주세요" 라는 문구를 띄워야 합니다.

// **`입력 인자`**

// - 입력데이터 1 - 문자열
// - 입력데이터 2 - 문자열

// **`주의 사항`**

// - 화살표 함수로 만들어야합니다.
// - 함수와 입력데이터 이름은 자유롭게 지어도 됩니다.

const CheckPw = (pw1, pw2) => {
  const lowerPw1 = pw1.toLowerCase();
  const lowerPw2 = pw2.toLowerCase();

  if (lowerPw1.length <= 8 || lowerPw1.length >= 16) {
    console.log("비밀번호는 8~16자리여야 합니다.");
  } else if (lowerPw1 !== lowerPw2) {
    console.log("비밀번호를 다시 확인해주세요");
  } else if (lowerPw1 === lowerPw2) {
    console.log("true");
  }
};

CheckPw("ABC123", "ABC123");
