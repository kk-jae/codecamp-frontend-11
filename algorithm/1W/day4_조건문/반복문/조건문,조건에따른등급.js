// ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2a7c4e64-7fed-4057-af3a-6c85b2e006f2/_2021-04-21__3.46.01.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2a7c4e64-7fed-4057-af3a-6c85b2e006f2/_2021-04-21__3.46.01.png)

// 입력되는 score에 따라 알맞은 등급을 적어야 합니다.

// 100~90 → "A"

// 89~80 → "B"

// 79~70 → "C"

// 69~60 → "D"

// 59점 이하는 "F"

// 100점 초과나 0점 미만은 "잘못된 점수입니다"라는 문구를 띄워주세요.

function grade(score) {
  if (score > 100 || score < 0) {
    return "잘못된 점수입니다.";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}
grade(70);
