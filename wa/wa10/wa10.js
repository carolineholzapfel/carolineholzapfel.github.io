const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['aspen.jpeg', 'football.jpeg', 'roommates.jpg','ski.jpg','snow.jpeg']
const alt = {
    'aspen.jpeg' : 'pic of friends in aspen',
    'football.jpeg' : 'cu stadium',
    'roommates.jpg' : 'pic of my roommates',
    'ski.jpg' : 'pic of mountain',
    'snow.jpeg' : 'pic of snow'
} 
/* Declaring the alternative text for each image file */


/* Looping through images */
for (const image of images) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `./images/${image}`);
    newImage.setAttribute('alt', alt[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click',e=> {
        displayedImage.src =e.target.src;
        displayedImage.alt = e.target.alt;
    });
}


/* Wiring up the Darken/Lighten button */
btn.addEventListener('click',() => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
        btn.setAttribute('class','light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        btn.setAttribute('class','dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});


