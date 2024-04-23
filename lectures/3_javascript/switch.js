'use strict';
// let subject = 'javascript';
// switch (subject) {
//   case 'javascript':
//     console.log('javascript 안녕');
//     let result = 1 + 2;
//     console.log('result: ', result);
//     break;
//   case 'html':
//     console.log('html 안녕');
//     break;
//   case 'css':
//     console.log('css 안녕');
//     break;
//   default:
//     console.log('default 수행문 입니다.');
// }
9998
// console.log('switch문 종료');

const score = prompt('수학 점수를 입력해주세요!')
const value = Math.floor(parseInt(score) / 10);
console.log(value);
switch (value) {
  case 10:
  case 9:
    console.log('A학점 입니다.');
    break;
  case 8:
  case 7:
    console.log('B학점 입니다.');
    break;
  case 6:
  case 5:
    console.log('C학점 입니다.');
    break;
  default:
    console.log('F학점 입니다.');
}
console.log(typeof score);

console.log(typeof parseInt(score));

const myNumber = '3';
console.log(2 +  parseInt(myNumber));
console.log(typeof myNumber);