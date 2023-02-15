// HOF - Higher Order Function

// 1. 함수를 리턴하는 함수
function aaa() {
  const apple = 10;

  return function bbb() {
    const banana = 20;
    console.log(banana);
    console.log(apple);
  };
}

// // aaa(); // aaa 함수 실행
aaa()(); // bbb() // bbb 함수 실행 // bbb 생략 가능

// 2. 함수를 리턴하는 함수 - 인자
function aaa(apple) {
  return function (banana) {
    console.log(banana);
    console.log(apple);
  };
}

aaa(100)(500); // apple에 100, banana에 500

// 3. 함수를 리턴하는 함수 - 화살표함수
const bbb = (apple) => (banana) => {
  console.log(banana);
  console.log(apple);
};
bbb(50)(60);

// 4. 함수를 리턴하는 함수 - 인자 여러개
const ccc = (apple) => (banana) => (tomato) => (orange) => {
  console.log(banana);
  console.log(apple);
  console.log(tomato);
  console.log(orange);
};

ccc(10)(20)(30)(40);
