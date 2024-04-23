'use strict';

// 객체 리터럴 문법
// const person = {
//   name: '짐코딩',
//   age: 25
// };
// person.job = '개발자';

// 객체 생성자 문법
// const person = new Object();
// person.name = '짐코딩';
// person.age = 40;

// const person = {
//   name: ['Bob', 'Smith'],
//   age: 32,
//   gender: 'male',
//   interests: ['music', 'health'],
//   hello: function() {
//     alert('Hello!');
//   },
//   greeting: function() {
//     alert('Hi!');
//   },
// 	hobby: {
// 		name: 'programing',
// 		alert: function() {
// 			alert('programing');
// 		}
// 	},
// };
// console.log(person.name[0]);
// console.log(person.name[1]);
// person.hello();
// // person.greeting();
// console.log(person.hobby.name);
// console.log(person.hobby.alert());
// console.log(person['name'][0]);
// console.log(person ['hobby'] ['name']);
// person ['hobby'] ['alert']();

// // 프로터피 제거
// delete person.name
// delete person['age']
// console.log(person);

// function printPerson({hobby, name, age}) {
//   console.log(`제 이름은 ${name}이며, 나이는 ${age}살 입니다.그리고 취미는 ${hobby} 입니다.`);
// }
// const person = {
//   name: '짐코딩',
//   age: 10,
//   hobby: '헬스'
// }
// printPerson(person);

// const { name, age } = person;
// console.log('name: ', name);
// console.log('age: ', age);

// const fruits = ['사과', '포도', '딸기'];
// const [a, b] = fruits;
// console.log(a);
// console.log(b);

// 팩토리 함수
// function printPerson({hobby, name, age}) {
//   console.log(`제 이름은 ${name}이며, 나이는 ${age}살 입니다.그리고 취미는 ${hobby} 입니다.`);
// }
// function createPerson(name, age, hobby) {
//   return {
//   //name: name,
//   //age: age,
//   //hobby: hobby
//   name,
//   age,
//   hobby
//   };
// }
// const person1 = createPerson('김길동1', 1, '아무거나')
// const person2 = createPerson('김길동2', 1, '아무거나')
// const person3 = createPerson('김길동3', 1, '아무거나')
// const person4 = createPerson('김길동4', 1, '아무거나')
// const person5 = createPerson('김길동5', 1, '아무거나')
// printPerson(person1);
// printPerson(person2);
// printPerson(person3);
// printPerson(person4);
// printPerson(person5);


// Call By Value (값에 의한 호출)
let username = '짐코딩';
console.log(username);
changeName(username);
console.log(username);

function changeName(name) {
  name = '홍길동';
  console.log(name);
}

// Call By Reference (참조에 의한 호출)
let person = {
  name: '짐코딩',
  age: 25
};
console.log(person);
changePersonName(person);
console.log(person);
function changePersonName(people) {
  people.name = '홍길동';
  people.age = 50;
}
