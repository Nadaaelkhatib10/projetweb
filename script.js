let currentIndex = 0;
const images = [
    'photooo/avis-2.png',
    'photooo/meca.png',
    'photooo/ANARUZ.png'
];

function showImage(index) {
    currentIndex = index - 1;
    displayImage();
    document.getElementById('imageViewer').style.display = 'block';
}

function closeViewer() {
    document.getElementById('imageViewer').style.display = 'none';
}

function displayImage() {
    const displayedImage = document.getElementById('displayedImage');
    displayedImage.src = images[currentIndex];
    centerImage(displayedImage);
}

function centerImage(img) {
    const horizontalOffset = (window.innerWidth - img.width) / 2;
    const verticalOffset = (window.innerHeight - img.height) / 2;

    img.style.position = 'fixed';
    img.style.left = horizontalOffset + 'px';
    img.style.top = verticalOffset + 'px';
}



function changeImage(n) {
    currentIndex += n;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    displayImage();
}
