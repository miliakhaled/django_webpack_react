const name = document.getElementById('name');
const counter = document.getElementById('counter');
let count = 0;
name.innerHTML = 'Chinwi';
setInterval(_ => counter.innerHTML = ++count, 1000);

