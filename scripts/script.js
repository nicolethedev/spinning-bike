// Determine the HTML elements that we'll need to interact with

const slide = document.getElementById('slide');
const leftButton = document.getElementById('btn-turn-clockwise');
const rightButton = document.getElementById('btn-turn-counter-clockwise');

const numberOfSlides = 34;
let counter = 0;

// Array of images 

function createImages(numberOfImages, imageName) {
    const imageList = [];
    for (let i = 1; i < numberOfImages; i++) {
        const img = new Image();
        img.src = `images/${imageName}-${i}.jpg`;
        imageList.push(img);
    }
    return imageList;
}

// Creating slides

const slides = createImages(numberOfSlides, 'bike');

// Function to change the slide

function turnCW() { 

    counter++;
    if (counter === numberOfSlides) {
        counter = 0;
    }

    slide.src = slides[counter].src;
}

function turnCCW() {

    counter--;
    if (counter < 0) {
        counter = numberOfSlides - 1;
    }

    slide.src = slides[counter].src;
}

// Event listeners for buttons! 

leftButton.addEventListener('click', turnCW);
rightButton.addEventListener('click', turnCCW);