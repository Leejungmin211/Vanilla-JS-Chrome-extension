const images = ["night1.jpg", "night2.jpg", "night3.jpg"];

const selectedImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.querySelector("body")

bgImage.style.backgroundImage = `url(img/${selectedImage})`
