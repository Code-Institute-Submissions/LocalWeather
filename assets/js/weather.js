/*jshint esversion: 6 */
const api = 'https://api.openweathermap.org/data/2.5/weather?q=';
const apiKey = '&appid=eb530ff6c72ca78b53c5c2a7a8d90b49';
const units = '&units=metric';
let cityInputRef = document.querySelector('#city');
const weatherFormRef = document.querySelector('#weatherForm');
const weatherInfoRef = document.getElementById('weatherInfo');



/*create function that takes the input of submit of the form*/
weatherForm.addEventListener('submit', function (event) {
  event.preventDefault();
  weatherSearch(cityInput.value);
});
/*create weathersearch function that holds the api url,key and the city input*/
function weatherSearch(city) {
  const searchUrl = api + city + apiKey + units;
  weatherInfoRef.innerHTML = 'loading';
  fetch(searchUrl)
    .then((response) => response.json())
    .then((weatherInfo) => displayWeather(weatherInfo))
    .catch((err) => {
      weatherInfoRef.innerHTML = 'Please search for a valid city';
    });
}

/*Function that displays the data to the user*/
function displayWeather(weatherData) {
  const temp = weatherData.main.temp;
  const city = weatherData.name;
  const description = weatherData.weather[0].description;
  weatherInfoRef.innerHTML = 
  `The weather in ${city} is currently ${description}, temp is ${temp}`;
}



