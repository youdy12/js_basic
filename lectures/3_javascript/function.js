'use strict';
// //함수 선업식 => 호이스팅 영향을 받음
// function sayHello() {
//   console.log('이름과 나이를 출력해주세요');
//   console.log('이름: 홍길동, 나이: 25살');
// };

// //함수 표현식
// const sayHello = function () {
//   console.log('이름과 나이를 출력해주세요');
//   console.log('이름: 홍길동, 나이: 25살');
// };
// sayHello();

//파라미터
// const sayHello = function (name, age) {
//   console.log('이름과 나이를 출력해주세요');
//   console.log(`이름: ${name}, 나이: ${age}살`);
// };
// sayHello('dbekdus', 20);
// sayHello('dbekdus', 25);

// // 반환 값
// function sum(num1, num2) {
//   return num1 + num2;
// }
// let result = sum(5, 3);
// console.log('result: ', result);

// Arrow Function
const sayHello = (name, age) => {
  console.log('이름과 나이를 출력해주세요');
  console.log(`이름: ${name}, 나이: ${age}살`);
};
sayHello('dbekdus', 20);
sayHello('dbekdus', 25);