/*jshint esversion: 6 */
const api = 'https://api.openweathermap.org/data/2.5/weather?q=';
const apiKey = '&appid=eb530ff6c72ca78b53c5c2a7a8d90b49';
const units = '&units=metric';
let cityInputRef = document.querySelector('#city');
const weatherFormRef = document.querySelector('#weatherForm');
const weatherInfoRef = document.getElementById('weatherInfo');


//create function that takes the input of getCity button
function getCity(data) {

  const myInput = document.getElementById('city');

  this.weatherSearch(myInput.value);
}
// create weathersearch function that holds the api url,key and the city input
function weatherSearch(city) {

  const url = api + city + apiKey + units;
  //fetch and add two promises
	
	//loading text
	  document.getElementById("weatherInfo").innerHTML = ("loading");
	
	
	
	
	
	fetch(url)
    .then(response => {
      //return response and parse it
      return response.json();
    })
	
	.then(weatherInfo => {
      
      this.displayWeather(weatherInfo);
    })
    //Display this error message if city is undefined
    .catch(err => {
      document.getElementById("weatherInfo").innerHTML = ("Please search for a valid city");
    });
}

function displayWeather(weatherData) {
//Create variables that match the name of the openweathermaps parameters
  const temp = weatherData.main.temp;
  const city = weatherData.name;
  const description = weatherData.weather[0].description;

//store this information in a weatherInfo
  const weatherInfo = document.getElementById('weatherInfo');
//push the info to HTML
  weatherInfo.innerHTML = ("The weather in " + city + " " +  "is currently" + " "+ description + ", " + "temp is" + " " + temp);
	
	

}