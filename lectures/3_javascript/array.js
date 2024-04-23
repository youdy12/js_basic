'use strict';

// // 1] 배열 생성
// const fruits = ['사과', '바나나', '딸기', '파인애플'];
// console.log('fruits: ', fruits);

// console.log(fruits[0]);
// console.log(fruits[1]);
// fruits[2] = '포도';
// console.log(fruits[2]);

// // 2] 자주 사용하는 배열 APT
// // length
// console.log('fruits.length: ', fruits.length); // 배열의 길이 가져오기
// console.log('마지막 값: ', fruits[fruits.length - 1]); // 배열의 마지막 항목 가져오기

// // push() - 배열 끝에 항목 추가하기
// fruits.push('귤');
// console.log(fruits);

// // forEach() - 배열의 항목을 순환하며 처리하기
// fruits.forEach(function (item, index) {
//   console.log(index, item);
// })

// // pop() - 배열 끝에 항목 제거하기
// //fruits.pop();
// //let removedItem = fruits.pop();
// //console.log('removeItem: ', removedItem);
// //console.log('제거완료: ', fruits);

// //shift - 배열 앞에 항목 제거하기
// //fruits.shift();
// //fruits.shift();
// //console.log(fruits);

// // unshift - 배열 앞에 항목 추가하기
// fruits.unshift('메론');
// fruits.unshift('수박');
// console.log(fruits);

// // indexOf - 배열 안 항목의 인덱스(index) 찾기
// //const index = fruits.indexOf('토마토') // 할당된 값이 없을 때
// const index = fruits.indexOf('사과')
// console.log('index: ', index);

// // splice - 인덱스 위치에 있는 항목 제거하기
// const findIndex = fruits.indexOf('파인애플');
// console.log('findIndex: ', findIndex);
// fruits.splice(findIndex, 1);  //findIndex부터 1개만 제거할거야
// console.log(fruits);

// 3] 구조 분해 할당
//let fruits = ['사과', '바나나', '딸기'];
//let apple = fruits[0];
//let banana = fruits[1];
//let strawberry = fruits[2];

//let [apple, banana, strawberry, ...others] = ['사과', '바나나', '딸기', 'a', 'b', 'c', 'd'];
//console.log(apple);
//console.log(banana);
//console.log(strawberry);
//console.log(others);

// 4] 전개 구문
//let fruits = ['사과', '바나나', '딸기'];
//let items = ['abc', ...fruits, '파인애플', '수박'];
//console.log('items: ', items);

// 5] Rest parameters
//print('a', 'b', 'c',);

//function print(...values) {
// console.log(values);
//}


// 6] 얕은 복사 - 참조값을 복사
//let source = ['사과', '바나나', '딸기'];
//let target = source;
//target[0] = '파인애플';
//console.log('source ', source);
//console.log('target ', target);

// 7] 깊은 복사 - 참조값 안에 내용을 복사
let source = ['사과', '바나나', '딸기'];
//let target = [...source]; //방법1
//let target = Array.from(source); //방법2
let target = source.slice(); //방법3
target[0] = '파인애플';
console.log('source ', source);
console.log('target ', target);



