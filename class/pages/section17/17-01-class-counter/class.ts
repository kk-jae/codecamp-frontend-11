// class형 컴포넌트는 자바스크립트, 타입스크립트 모두 지원하고있지만, 자바스크립트에서는 부족한 기능이 많습니다.

// class Date {
//   qqq = 3
//   getFullYear(){}
//   getMonth(){}
// }
// const date = new Date();
// console.log(date.getFullYear());
// console.log(date.fetMonth() + 1);

class Monster {
  power = 50;
  attack() {
    console.log("공격합니다!!");
  }
}

//상속
class 슈퍼몬스터 extends Monster {
  // 기존에 만들어 놓은 class를 상속합니다. (Monster에서 만들어 놓은 power와 attack이 상송된 상태)
  run() {
    console.log("도망가자!!");
  }

  // 오버라이딩 : 기존의 attack은 삭제됩니다.
  attack() {
    console.log("슈퍼몬스터 필살기!!!");
  }
}

const monster = new Monster();
monster.power; // 50
monster.attack(); // 공격합니다.

const myMonster = new 슈퍼몬스터();
myMonster.power; // 50
myMonster.attack(); // 슈퍼몬스터 필살기!!!
myMonster.run(); // 도망가자!!

// -->> 가장 아래의 기능이 작동됩니다. (오버라이딩)
