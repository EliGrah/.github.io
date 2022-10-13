const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = ":insertx: loves to :inserty: all the time. It's actually quite disgusting to see :insertx: :inserty:. Especially in the :insertz:. Whenever Bob sees this they immediately throw up. Mostly it's because :insertx: weighs 300 pounds and it is 94 fahrenheit year round.";
let insertX = ['Eminem' , 'Stepdad' , 'Bill Cosby'];
let insertY = ['swim' , 'eat' , 'shit'];
let insertZ = ['pool', 'pancake batter', 'Mississippi River'];

randomize.addEventListener('click', result);

function result() {

    let newStory = storyText;
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);

    newStory = newStory.replace(/:insertx:/g, xItem);
    newStory = newStory.replace(/:inserty:/g, yItem);
    newStory = newStory.replace(':insertz:', zItem);

    if(customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replace('Bob', name);
    }

    if(document.getElementById("uk").checked) {
        const weight = Math.round(300/14) + ' stone';
        const temperature =  Math.round(((94-32) *5) /9) + ' centigrade';
        newStory = newStory.replace('94 fahrenheit', temperature);
        newStory = newStory.replace('300 pounds', weight);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}