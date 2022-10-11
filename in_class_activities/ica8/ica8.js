const para = document.querySelector('.button');
const para2 = document.querySelector('.button2');
para.addEventListener('click', spoopy);
para2.addEventListener('click', printit);



function spoopy() {
    const name = prompt('Enter your name');
    response(x = name);
}

function printit() {
    window.print();
}

let speaker = `Wrong button  `;
 function response() {
    speaker += x;
    speaker += `. Choose better next time`;
    document.write(speaker);
}

