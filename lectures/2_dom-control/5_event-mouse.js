let rectangle = document.querySelector('#rectangle');
let body = document.querySelector('body');

rectangle.addEventListener('mousedown', function (event) {
  console.log('clientX: ', event.clientX, 'clientY: ', event.clienty);
});

// body.addEventListener('click', function (event) {
//   console.log('pageX: ', event.pageX, 'pageY: ', event.pageY);
//   let div = document.createElement('div');
//   div.classList.add('circle');
//   div.style.left = event.pageX -25 + 'px';
//   div.style.top = event.pageY - 25 + 'px';
//   body.appendChild(div);
// });

