if(!localStorage.getItem('visitor')){
    let visitor = prompt('Hello visitor! Please provide your name.');
    saveVisitor(visitor);
    changeTitle(visitor); 
} else {
    changeTitle(localStorage.getItem('visitor'));
}

function saveVisitor(visitor){
    localStorage.setItem('visitor', visitor);
}

function changeTitle(visitor){
    let myName = document.querySelector('h3');
    //debugger;
    myName.textContent = 'Hello '.concat(visitor === 'null' ? '':visitor).concat(', my name is Ali!');
}

const myImg = document.querySelector('img');
myImg.onclick = function(){
    const src = myImg.getAttribute('src');
    if(src.includes('0')){
        myImg.setAttribute('src', 'img/profile1.jpg');
    } else {
        myImg.setAttribute('src', 'img/profile0.jpg');
    }
}