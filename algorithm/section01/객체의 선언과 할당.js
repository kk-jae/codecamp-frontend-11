// **`문제 설명`**

// 주어진 student 객체에

// 'name'이라는 키를 만들고, "철수"를 할당하세요.

// **`입력 인자`**

// - X

// **`주의 사항`**

// - 빈 객체도 만들 수 있습니다.
// - 객체와 배열의 차이점을 잘 구분하세요.

const student = {};

student.name = "철수";

console.log(student);

//위와 동일한 코드입니다.
student["name"] = "철수";

console.log(student);

//새로운 방법
// const name = "name3";
// student[name] = "철수";
