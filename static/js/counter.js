
import '../css/hello.css'
const counter = document.getElementById('counter');
let count = 100;
const timer = setInterval(_ => counter.innerHTML = ++count, 1000);
if(module.hot){
    module.hot.dispose(()=>{
        clearInterval(timer);
    });
    module.hot.accept();
}