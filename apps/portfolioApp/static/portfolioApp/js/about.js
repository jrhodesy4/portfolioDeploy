function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("img").src = images[x];
}

function startTimer() {
    setInterval(displayNextImage, 6000);
}

var images = [], x = -1;
images[0] = "../../static/portfolioApp/images/grad.jpg";
images[1] = "../../static/portfolioApp/images/stone.JPG";
images[2] = "../../static/portfolioApp/images/travel.jpg";
images[3] = "../../static/portfolioApp/images/bball.jpg";
images[4] = "../../static/portfolioApp/images/IMG_2638.jpg";
