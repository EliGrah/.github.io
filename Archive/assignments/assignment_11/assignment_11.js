
const button = document.querySelector('button');
button.addEventListener('click', getFact);
button.addEventListener('click', getPic);
const factGen = 'https://catfact.ninja/fact?max_length=140';
const picGen = 'https://aws.random.cat/meow';

getFact();
async function getFact() {
    const res = await fetch(factGen)
    let obj = await res.json();
    console.log(obj.fact);
    displayFact(obj.fact);
  }
  
getPic();
async function getPic() {
    const res = await fetch(picGen)
    let obj = await res.json();
    console.log(obj.file);
    displayPic(obj.file);
}
  
function displayFact(x) {
    document.getElementById("js-quote-text").innerHTML = x;
}
function displayPic(x) {
    var pic = "url('" + x + "')";
    document.body.style.backgroundImage = pic;
    console.log(pic);
}
