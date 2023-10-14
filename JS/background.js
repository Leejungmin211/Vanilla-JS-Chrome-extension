const images = ["night1.jpg", "night2.jpg", "night3.jpg"];

const selectedImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("div");

bgImage.className = "bg-image"

bgImage.style.backgroundImage = `url(img/${selectedImage})`;

document.body.appendChild(bgImage);
