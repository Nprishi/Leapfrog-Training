import { API_KEY } from "./config.js";

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const loading = document.getElementById("loading");
const error = document.getElementById("error");

const weatherCard = document.getElementById("weatherCard");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const weatherIcon = document.getElementById("weatherIcon");

searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city) getWeather(city);
});

cityInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") searchBtn.click();
});

async function getWeather(city) {

  try {

    loading.style.display = "block";
    error.innerText = "";
    weatherCard.style.display = "none";

    const url =
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    const res = await fetch(url);

    if (!res.ok) throw new Error("City not found");

    const data = await res.json();

    showWeather(data);

  } catch (err) {

    error.innerText = err.message;

  } finally {

    loading.style.display = "none";

  }

}

function showWeather(data) {

  cityName.innerText = data.name;

  temperature.innerText = `${Math.round(data.main.temp)}°C`;
  description.innerText = data.weather[0].description;

  weatherIcon.src =
    `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  document.getElementById("feelsLike").innerText =
    `Feels Like: ${data.main.feels_like}°C`;

  document.getElementById("tempMin").innerText =
    `Min: ${data.main.temp_min}°C`;

  document.getElementById("tempMax").innerText =
    `Max: ${data.main.temp_max}°C`;

  document.getElementById("humidity").innerText =
    `Humidity: ${data.main.humidity}%`;

  document.getElementById("pressure").innerText =
    `Pressure: ${data.main.pressure} hPa`;

  document.getElementById("wind").innerText =
    `Wind: ${data.wind.speed} m/s`;

  document.getElementById("visibility").innerText =
    `Visibility: ${data.visibility / 1000} km`;

  document.getElementById("clouds").innerText =
    `Clouds: ${data.clouds.all}%`;

  document.getElementById("lat").innerText =
    `Lat: ${data.coord.lat}`;

  document.getElementById("lon").innerText =
    `Lon: ${data.coord.lon}`;

  const sunrise = new Date(data.sys.sunrise * 1000);
  const sunset = new Date(data.sys.sunset * 1000);

  document.getElementById("sunrise").innerText =
    `Sunrise: ${sunrise.toLocaleTimeString()}`;

  document.getElementById("sunset").innerText =
    `Sunset: ${sunset.toLocaleTimeString()}`;

  weatherCard.style.display = "block";
}