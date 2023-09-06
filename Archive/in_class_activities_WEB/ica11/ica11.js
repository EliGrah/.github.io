const button = document.querySelector('button');
button.addEventListener('click', getQuote);
const quoteGen = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

getQuote();
async function getQuote() {
    const res = await fetch(quoteGen)
    let obj = await res.json();
    console.log(obj.message);
    displayQuote(obj.message);
  }
  
function displayQuote(x) {
    document.getElementById("js-quote-text").innerHTML = x;
}
