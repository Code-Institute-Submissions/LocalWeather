
//Api information from openweathermap
const api = 'https://api.openweathermap.org/data/2.5/weather?q=';
const apiKey = '&appid=eb530ff6c72ca78b53c5c2a7a8d90b49';
const units = '&units=metric';

//create function that takes the input of getCity button
function getCity(data) {

  const myInput = document.getElementById('city');

  this.weatherSearch(myInput.value);
}
// create weathersearch function that holds the api url,key and the city input
function weatherSearch(city) {

  const url = api + city + apiKey + units;
  