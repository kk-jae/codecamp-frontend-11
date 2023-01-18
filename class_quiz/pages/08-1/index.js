// filter와 map 사용 연습

let classmates = [
  { name: "철수", age: 10, school: "토끼초등학교" },
  { name: "영희", age: 13, school: "다람쥐초등학교" },
  { name: "훈이", age: 11, school: "토끼초등학교" },
];

function candy() {
  let candy = classmates.filter((el) => el.school === "토끼초등학교");
  //school : "토끼초등학교"인 객체만 출력

  candy.map((el) => (el.candy = 10));
  return candy;
}
candy();

function children() {
  let children = classmates.filter((el) => el.school === "다람쥐초등학교");
  children.map((el) => (el.name = el.name + "어린이"));

  return children;
}
children();
