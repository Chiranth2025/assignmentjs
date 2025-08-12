const box1 = document.getElementById('box1');

box1.addEventListener('click', color);

function color() {
    box1.style.backgroundColor = 'red';
}

const box2 = document.getElementById('box2');

box2.addEventListener('click', color1);

function color1() {
    box2.style.backgroundColor = 'blue';
}

const box3 = document.getElementById('box3');

box3.addEventListener('click', color2);

function color2() {
    box3.style.backgroundColor = 'green';
}


const box4 = document.getElementById('box4');

box4.addEventListener('click', color3);

function color3() {
    box4.style.backgroundColor = 'yellow';
} 
 
let user;
document.getElementById('mybutton').onclick=function(event){
       event.preventDefault();
     user=document.getElementById('mytext').value;
     document.getElementById('intro').textContent=`Hello, ${user}`
}
