const city = document.querySelector("#weather span:first-child")  
const weather = document.querySelector("#weather span:last-child")
const API_KEY = "4f374b16bb4ac33594f1ae3e8060d4a1";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  console.log(url)
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      city.textContent = data.name
      weather.textContent = `${data.weather[0].main} / ${data.main.temp}`
    });

}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
