let numDump = [num0, num1, num2, num3, num4, num5, num6, num7, num8, num9, num10, num11, num12, num13, num14, num15,
     num16, num17, num18, num19, num20, num21, num22, num23, num24, num25, num26, num27, num28, num29, num30, num31];
for(i = 0; i < 32; i++) {
    numDump[i].addEventListener('click', genNum);
}

var input = document.getElementById('phone');
const button = document.querySelector('.button');
button.addEventListener('click', submitNum);

let checkArray = [];
for(i = 0; i < 32; i++) {
    checkArray[i] = document.getElementById("num" + i);
}
let binArray = [];
let finalBinNum;
let finalDecNum;
let phonNum;

function genNum() {
    for(i = 0; i < 32; i++) {
        if (checkArray[i].checked) {
            binArray[i] = 1;
        } else {
            binArray[i] = 0;
        }
    }
    finalBinNum = binArray.join('');
    console.log(finalBinNum);
    finalDecNum = parseInt(finalBinNum, 2);
    console.log(finalDecNum);

   phoneNum = 0;
    for(i = 0; i < 9; i++) {
        if(i == 0){
            phoneNum = finalDecNum.toString()[0];
        }
        if(i == 2 || i == 5){
            phoneNum = phoneNum + '-';
        } 
        if(finalDecNum.toString()[i] == undefined){
            phoneNum = phoneNum + '0';
        } else {
            phoneNum = phoneNum + finalDecNum.toString()[i]
        }
    }

    console.log(phoneNum);
    document.getElementById('binNum').innerHTML
                = finalBinNum;
    document.getElementById('phone').value
                = phoneNum;           
}

function submitNum(){
    window.alert(phoneNum + ' has been submitted.')
}






