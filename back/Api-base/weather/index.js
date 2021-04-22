const express = require("express");
const fetch = require("node-fetch");
const https = require("https");
const app = express();
const port = 3001;

const apiKey = '23261409d1168ff9b8c89c5dd94c8f6d';
let query = 'Blumenau';

app.listen(port, () => {
    console.log("Server started on port " + port);
})

fetch('http://api.openweathermap.org/data/2.5/weather?q=' + query + '&appid=' + apiKey + '&units=metric')
    .then(res => res.json())
    .then(json => endpoint(json));


function endpoint(data){
    const temp = data.main.temp;
    const description = (data.weather[0].main + ' - ' + data.weather[0].description);
    const cityName = data.name;

    printWeather(cityName,temp,description);
}

function printWeather(cityName,temperature,description){
    console.log(cityName);
    console.log('Temperature: ' + temperature);
    console.log(description);
}


    



