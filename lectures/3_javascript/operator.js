'use strict'

// // console.log('-------');
// // let number = prompt('숫자를 입력해주세요!');
// // if (number % 2 === 1) {
// //   alert('홀수 입니다!');
// // } else {
// //   alert('짝수 입니다!')
// // }

// let x = 10;
// let y = 20;
// // let rsult = ++x + y;
// // console.log('x: ', x);
// // console.log('y: ', y);
// // console.log('------');
// let result = x++ + y;
// console.log('x: ', x);
// console.log('y: ', y);
// console.log('result: ', result);


// let x = 10;
// let y = 20;
// x += y;
// console.log(x);

// const sum = 0;  
// for (let i = 1; i <= 10; i++); {
//   sum = sum + i;
//   console.log('${i} 번째 sum=${sum}');
// }


let x = true;
let y = true;
console.log(x && y); // 모두 true 일 true, 그 외fales
console.log(x || y);  //둘 중 하나라도 true 이면 true, 나머지 false
console.log(!x); 


let btn = document.querySelector('#btn');
let emailEl = document.querySelector('[name=email]');
let passwordEl = document.querySelector('[name=password]');


btn?.addEventListener('click', function () {
  let email = emailEl.value;
  let password = passwordEl.value;
  console.log('email: ', email);
  // console.log('password: ', password);
  console.log('!password: ', !password);

  if (email === '' || email.includes('@') === false) {
    console.log('이메일이 유효하지 않습니다!');
  } else if (!password) {
    console.log('비밀번호를 입력해주세요.');
  }  else if ((password.length >= 8 && password.length <= 16) === false) {
    console.log('비밀번호는 8~16자 이내 입니다.');
  } else {
    console.log('로그인 성공!');
  }
});


// 삼항 연산자: 조건식 ? 값1 : 값2 조건식이 true 이면 값1을 반환하고, false 이면 값2를 반환
let number = 12;
let message = number % 2 === 1 ? '홀수 입니다.' : '짝수 입니다.';
console.log(message);
