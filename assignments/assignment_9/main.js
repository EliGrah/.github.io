const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['cat.jpeg', 'kbbq.jpeg', 'lego_boi.jpeg', 'light_art.jpeg', 'spooky.jpeg'];
const alts = ['Dignified Oliver', 'Delicous food, great memories', 'guy had too much free time', 'my art is so good', 'haunts my nightmares'];
/* Declaring the alternative text for each image file */

/* Looping through images */
for (const image of images) {
    const newImg = document.createElement('img');
    newImg.setAttribute('src', `images/${image}`);
    newImg.setAttribute('alt', alts[image]);
    thumbBar.appendChild(newImg);
    newImg.addEventListener('click', a => {
      displayedImage.src = a.target.src;
      displayedImage.alt = a.target.alt;
    });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
      btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
    //   if (displayedImage.src == 'cat.jpeg' || displayedImage.src == 'lego_boi.jpeg'){
    //     overlay.style.width = '400px';
    //   } else {
    //     overlay.style.width = '640px';
    //   }
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  });
  