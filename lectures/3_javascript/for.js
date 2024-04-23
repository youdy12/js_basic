
'use strict';
// for (let i = 0; i <= 5; i++) {
//   console.log(i);
// }

// let fruits = ['사과', '배', '바나나', '딸기', '포도'];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i])
// }

let person = {
  name: '홍길동',
  age: 25,
  job: '개발자',
};


let keys = Object.keys(person);
console.log(keys);

for (let i = 0; i < keys.length; i++) {
  // console.log(keys[i]);
  let key = keys[i];
  console.log(person[key]);
}
console.log('-------');
for (let key in person) {
  console.log(person[key]);
}

console.log('-------');
let fruits = ['사과', '배', '바나나', '딸기', '포도'];
for (let fruit of fruits) {
  console.log(fruit);
}

// console.log('-------');
// let number = prompt('숫자를 입력해주세요!');
// if (number % 2 === 1) {
//   alert('홀수 입니다!');
// } else {
//   alert('짝수 입니다!')
// }

let x = 10;
let y = 20;
// let rsult = ++x + y;
// console.log('x: ', x);
// console.log('y: ', y);
// console.log('------');
let result = x++ + y;
console.log('x: ', x);
console.log('y: ', y);
console.log('result: ', result);