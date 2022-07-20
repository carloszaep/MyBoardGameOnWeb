let row = document.querySelector('body');
let col = document.createElement('div');

row.appendChild(col).className = 'carlos';

let b = document.querySelector('.carlos1');
b.addEventListener('click', test);

function test() {
  let a = document.querySelector('.carlos');
  a.innerHTML = `<p>hola</p>`;
  console.log(a);
}
