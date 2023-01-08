const images = ["0.jpg","1.jpg","2.jfif","3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = `img/${chosenImage}`;

document.body.style.cssText = `background-image:url(${bgImage})`;