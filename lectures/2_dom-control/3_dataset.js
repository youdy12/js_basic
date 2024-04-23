let h2 = document.querySelector('h2');
h2.dataset.test = 'hello';
console.log('h2.dataset.test: ', h2.dataset.test);

let img = document.querySelector('img');
let liList = document.querySelectorAll('li');
let selectedItem = document.querySelector('.selected-item');

liList[0].addEventListener('click', function (event) {
  selectedItem.textContent = event.target.textContent;
  img.setAttribute('src', event.target.dataset.img);
});
liList[1].addEventListener('click', function (event) {
  selectedItem.textContent = event.target.textContent;
  img.setAttribute('src', event.target.dataset.img);
});
liList[2].addEventListener('click', function (event) {
  selectedItem.textContent = event.target.textContent;
  img.setAttribute('src', event.target.dataset.img);
});


//함수 그룹
// liList[0].addEventListener('click', selectItem);
// liList[1].addEventListener('click', selectItem);
// liList[2].addEventListener('click', selectItem);


// function selectItem(event) {
//   selectedItem.textContent = event.target.textContent;
//   img.setAttribute('src', event.target.dataset.img);
// }