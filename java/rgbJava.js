const testButton = document.getElementById("testButton");
const redRange = document.getElementById("redRange");
const greenRange = document.getElementById("greenRange");
const blueRange = document.getElementById("blueRange");
const diplayText = document.getElementById("displayText");
const retryButton = document.getElementById("retryButton");
testButton.addEventListener("click", rgbCompare);
retryButton.addEventListener("click", resetCompare);
redRange.addEventListener("input", yourColor);
redRange.addEventListener("input", redBar);
greenRange.addEventListener("input", yourColor);
greenRange.addEventListener("input", greenBar);
blueRange.addEventListener("input", yourColor);
blueRange.addEventListener("input", blueBar);

let randomRGB;
let ranRed;
let ranGreen;
let ranBlue;
let yourRed;
let yourGreen;
let yourBlue;

randomColor();

//test if rgb values are =<5 
function rgbCompare() {
    let red;
    let green;
    let blue;

    let redCompare = Math.abs(ranRed - yourRed);
    let greenCompare = Math.abs(ranGreen - yourGreen);
    let blueCompare = Math.abs(ranBlue - yourBlue);

    if(redCompare <= 10) {
        red = true;
    }
    if(greenCompare <= 10) {
        green = true;
    }
    if(blueCompare <= 10) {
        blue = true;
    }

    let editCSS = document.createElement('style')
    editCSS.innerHTML = ".winText {display: block;}";
    document.body.appendChild(editCSS);

    if(red && green && blue) {
        diplayText.textContent = "You did it!";
        editCSS = document.createElement('style')
        editCSS.innerHTML = ".retryButton {display: inline-block;}";
        document.body.appendChild(editCSS);
    } else if(red && green) {
        diplayText.textContent = "Hmm, trying messing with the blue a bit more.";
    } else if(red && blue) {
        //green needs work
        diplayText.textContent = "Seems like your green is a little off.";
    } else if(green && blue) {
        //red needs work
        diplayText.textContent = "Red needs a little love.";
    } else if(red) {
        //green blue bad
        diplayText.textContent = "Red is looking good! Nothing else is though.";
    } else if (green) {
        //red blue bad
        diplayText.textContent = "Red and blue definitely are not right.";
    } else if (blue) {
        //red green bad
        diplayText.textContent = "You should tweak with the green and red a little more.";
    } else {
        displayText.textContent = "Everything is wrong. You got this keep trying!"
    }
}

function randomColor() {
    //creating individual values for comparing later
    ranRed = Math.floor(Math.random() * 256);
    ranGreen = Math.floor(Math.random() * 256);
    ranBlue = Math.floor(Math.random() * 256);
    randomRGB = "rgb(" + ranRed + "," + ranGreen + "," + ranBlue + ")"; 
    let editCSS = document.createElement('style')
    editCSS.innerHTML = ".randomSquare {background-color:" + randomRGB + ";}";
    document.body.appendChild(editCSS);

    console.log("Use this to cheat heehee");
}

function yourColor() {
    yourRed = document.getElementById('redRange').value;
    yourGreen = document.getElementById('greenRange').value;
    yourBlue = document.getElementById('blueRange').value;
    let yourRGB = "rgb(" + yourRed + "," + yourGreen + "," + yourBlue + ")";
    let editCSS = document.createElement('style');
    editCSS.innerHTML = ".yourSquare {background-color:" + yourRGB + ";}";
    document.body.appendChild(editCSS);

    console.log("Random RGB: " + randomRGB);
    console.log("Your RGB:   " + yourRGB);
}

function redBar () {
    let barColor = document.getElementById('redRange').value;
    let barRGB = "rgb(" + barColor + ", 0, 0);";
    let editCSS = document.createElement('style');
    editCSS.innerHTML = ".redSlider {background:" + barRGB + ";}";
    document.body.appendChild(editCSS);
}

function greenBar() {
    let barColor = document.getElementById('greenRange').value;
    let barRGB = "rgb(0, "+ barColor + ", 0);";
    let editCSS = document.createElement('style');
    editCSS.innerHTML = ".greenSlider {background:" + barRGB + ";}";
    document.body.appendChild(editCSS);
}

function blueBar() {
    let barColor = document.getElementById('blueRange').value;
    let barRGB = "rgb(0, 0, " + barColor + ");";
    let editCSS = document.createElement('style');
    editCSS.innerHTML = ".blueSlider {background:" + barRGB + ";}";
    document.body.appendChild(editCSS);
}

function resetCompare() {
    let editCSS = document.createElement('style');
    //reset sliders
    redRange.value = 0;
    greenRange.value = 0;
    blueRange.value = 0;
    editCSS.innerHTML = ".redSlider {background: rgb(255, 0, 0);}";
    editCSS.innerHTML = ".greenSlider {background: rgb(0, 255, 0);}";
    editCSS.innerHTML = ".blueSlider {background: rgb(0, 0, 255);}";
    

    diplayText.textContent = "";
    editCSS.innerHTML = ".retryButton {display: none;}";
    randomColor();
    yourColor(); //resets your square
    document.body.appendChild(editCSS);
}
