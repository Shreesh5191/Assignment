const images = [
    '01.jpg',
    '02.jpg',
    '03.jpg',
    '04.jpg',
];

var i = 0;
var sliderImage = document.getElementById('slider-image');
var prevBtn = document.getElementById('prevBtn');
var nextBtn = document.getElementById('nextBtn');

// Function to display the current image
function showImage(index) {
    sliderImage.src = images[index];
}

// Initial image display
showImage(i);

// Event listener for the "Previous" button
prevBtn.addEventListener('click', () => {
    if (i > 0) {
        i--;
    } else {
        i = images.length - 1;
    }
    showImage(i);
});

// Event listener for the "Next" button
nextBtn.addEventListener('click', () => {
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    showImage(i);
});