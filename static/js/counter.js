const counter = document.getElementById('counter');
let count = 0;
setInterval(_ => counter.innerHTML = ++count, 1000);