/** @format */

let city = "New York";
let apiKey = "017e2b9ce8d67142382f8330fbc647cf";
let unit = "metric";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`;
axios.get(apiUrl).then(showTemperature);

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let tempCelsius = document.querySelector("#temp-celsius");
  tempCelsius.innerHTML = temperature;
  let description = document.querySelector("li.li-descript");
  description.innerHTML = response.data.weather[0].description;
  let minimum = document.querySelector("#min-temp");
  minimum.innerHTML = Math.round(response.data.main.temp_min);
  let maximum = document.querySelector("#max-temp");
  maximum.innerHTML = Math.round(response.data.main.temp_max);
  let minimummetric = document.querySelector("#imperial-min");
  minimummetric.innerHTML = "°C";
  let maximummetric = document.querySelector("#imperial-max");
  maximummetric.innerHTML = "°C";
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = Math.round(response.data.main.humidity);
  let wind = document.querySelector("#wind");
  wind.innerHTML = Math.round(response.data.wind.speed);
  let windmetric = document.querySelector("#imperial-wind");
  windmetric.innerHTML = "km/h";
  let latitude = response.data.coord.lat;
  let longitude = response.data.coord.lon;
  let apiAQI = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&units=${unit}&appid=${apiKey}`;
  axios.get(apiAQI).then(showAQI);
  function showAQI(response) {
    let aqiElement = response.data.list[0].main.aqi;
    let AQI = document.querySelector("#aqi");
    AQI.innerHTML = aqiElement;
  }
  let apiSolar = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${apiKey}`;
  axios.get(apiSolar).then(showUVI);
  function showUVI(response) {
    console.log(response.data);
    let uvi = Math.round(response.data.current.uvi);
    let uviElement = document.querySelector("#uvi");
    uviElement.innerHTML = uvi;
  }

  let d = new Date();
  let localTime = d.getTime();
  let localOffset = d.getTimezoneOffset() * 60000;
  let utc = localTime + localOffset;
  let timezone = response.data.timezone;
  let nDate = new Date(utc + 1000 * timezone);
  localDate(nDate);
  function localDate() {
    let localdate = nDate.getDate();

    let localhour = nDate.getHours();
    let localminute = ("0" + nDate.getMinutes()).slice(-2);
    let localyear = nDate.getFullYear();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let localday = days[nDate.getDay()];
    let months = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
    ];
    let localmonth = months[nDate.getMonth()];
    let datedisplay = document.querySelector("li.li-date");
    datedisplay.innerHTML = `${localday}, ${localmonth}/${localdate}/${localyear}`;
    let timedisplay = document.querySelector("li.li-time");
    timedisplay.innerHTML = `${localhour}:${localminute}`;
  }
}

function findCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let citydisplay = document.querySelector("li.li-city");
  citydisplay.innerHTML = `${searchInput.value}`;
  let city = searchInput.value;
  let apiKey = "017e2b9ce8d67142382f8330fbc647cf";
  let unit = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`;
  axios.get(apiUrl).then(showTemperature);

  function showTemperature(response) {
    let temperature = Math.round(response.data.main.temp);
    let tempCelsius = document.querySelector("#temp-celsius");
    tempCelsius.innerHTML = temperature;
    let description = document.querySelector("li.li-descript");
    description.innerHTML = response.data.weather[0].description;
    let minimum = document.querySelector("#min-temp");
    minimum.innerHTML = Math.round(response.data.main.temp_min);
    let maximum = document.querySelector("#max-temp");
    maximum.innerHTML = Math.round(response.data.main.temp_max);
    let minimummetric = document.querySelector("#imperial-min");
    minimummetric.innerHTML = "°C";
    let maximummetric = document.querySelector("#imperial-max");
    maximummetric.innerHTML = "°C";
    let humidity = document.querySelector("#humidity");
    humidity.innerHTML = Math.round(response.data.main.humidity);
    let wind = document.querySelector("#wind");
    wind.innerHTML = Math.round(response.data.wind.speed);
    let windmetric = document.querySelector("#imperial-wind");
    windmetric.innerHTML = "km/h";
    let latitude = response.data.coord.lat;
    let longitude = response.data.coord.lon;
    let apiAQI = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&units=${unit}&appid=${apiKey}`;
    axios.get(apiAQI).then(showAQI);
    function showAQI(response) {
      let aqiElement = response.data.list[0].main.aqi;
      let AQI = document.querySelector("#aqi");
      AQI.innerHTML = aqiElement;
    }
    let apiSolar = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${apiKey}`;
    axios.get(apiSolar).then(showUVI);
    function showUVI(response) {
      console.log(response.data);
      let uvi = Math.round(response.data.current.uvi);
      let uviElement = document.querySelector("#uvi");
      uviElement.innerHTML = uvi;
    }

    let d = new Date();
    let localTime = d.getTime();
    let localOffset = d.getTimezoneOffset() * 60000;
    let utc = localTime + localOffset;
    let timezone = response.data.timezone;
    let nDate = new Date(utc + 1000 * timezone);
    localDate(nDate);
    function localDate() {
      let localdate = nDate.getDate();

      let localhour = nDate.getHours();
      let localminute = ("0" + nDate.getMinutes()).slice(-2);
      let localyear = nDate.getFullYear();
      let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      let localday = days[nDate.getDay()];
      let months = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
      ];
      let localmonth = months[nDate.getMonth()];
      let datedisplay = document.querySelector("li.li-date");
      datedisplay.innerHTML = `${localday}, ${localmonth}/${localdate}/${localyear}`;
      let timedisplay = document.querySelector("li.li-time");
      timedisplay.innerHTML = `${localhour}:${localminute}`;
    }
  }
}

let search = document.querySelector("#search-form");
search.addEventListener("submit", findCity);

let now = new Date();
currentDate(now);
function currentDate() {
  let date = now.getDate();
  let hour = now.getHours();

  let minute = ("0" + now.getMinutes()).slice(-2);
  let year = now.getFullYear();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  let months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  let month = months[now.getMonth()];
  let datedisplay = document.querySelector("li.li-date");
  datedisplay.innerHTML = `${day}, ${month}/${date}/${year}`;
  let timedisplay = document.querySelector("li.li-time");
  timedisplay.innerHTML = `${hour}:${minute}`;
}

function showPosition(position) {
  console.log(position);
  let apiKey = "017e2b9ce8d67142382f8330fbc647cf";
  let unit = "metric";
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiCurr = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${unit}&exclude=alerts&appid=${apiKey}`;
  axios.get(apiCurr).then(showCurrentTemperature);
  function showCurrentTemperature(response) {
    let citylocation = response.data.name;
    let currentcity = document.querySelector("li.li-city");
    currentcity.innerHTML = citylocation;
    let temperature = Math.round(response.data.main.temp);
    let tempCelsius = document.querySelector("#temp-celsius");
    tempCelsius.innerHTML = temperature;
    let description = document.querySelector("li.li-descript");
    description.innerHTML = response.data.weather[0].description;
    let minimum = document.querySelector("#min-temp");
    minimum.innerHTML = Math.round(response.data.main.temp_min);
    let maximum = document.querySelector("#max-temp");
    maximum.innerHTML = Math.round(response.data.main.temp_max);
    let minimummetric = document.querySelector("#imperial-min");
    minimummetric.innerHTML = "°C";
    let maximummetric = document.querySelector("#imperial-max");
    maximummetric.innerHTML = "°C";
    let humidity = document.querySelector("#humidity");
    humidity.innerHTML = Math.round(response.data.main.humidity);
    let wind = document.querySelector("#wind");
    wind.innerHTML = Math.round(response.data.wind.speed);
    let windmetric = document.querySelector("#imperial-wind");
    windmetric.innerHTML = "km/h";

    let now = new Date();
    currentDate(now);
    function currentDate() {
      let date = now.getDate();
      let hour = now.getHours();

      let minute = ("0" + now.getMinutes()).slice(-2);
      let year = now.getFullYear();
      let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      let day = days[now.getDay()];
      let months = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
      ];
      let month = months[now.getMonth()];
      let datedisplay = document.querySelector("li.li-date");
      datedisplay.innerHTML = `${day}, ${month}/${date}/${year}`;
      let timedisplay = document.querySelector("li.li-time");
      timedisplay.innerHTML = `${hour}:${minute}`;
    }
  }

  let apiAQI = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
  axios.get(apiAQI).then(showCurrentAQI);
  function showCurrentAQI(response) {
    let aqiElement = response.data.list[0].main.aqi;
    let currentAQI = document.querySelector("#aqi");
    currentAQI.innerHTML = aqiElement;
  }

  let apiSolar = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${apiKey}`;
  axios.get(apiSolar).then(showCurrentSolar);
  function showCurrentSolar(response) {
    console.log(response.data);
    let uvi = Math.round(response.data.current.uvi);
    let uviElement = document.querySelector("#uvi");
    uviElement.innerHTML = uvi;
  }
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let button = document.querySelector("#current-button");
button.addEventListener("click", getCurrentPosition);

function convertToFahrenheit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let city = searchInput.value;
  let apiKey = "017e2b9ce8d67142382f8330fbc647cf";
  let unit = "imperial";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`;
  axios.get(apiUrl).then(showTemperature);
  function showTemperature(response) {
    let temperature = Math.round(response.data.main.temp);
    let tempFahrenheit = document.querySelector("#temp-celsius");
    tempFahrenheit.innerHTML = temperature;
    let description = document.querySelector("li.li-descript");
    description.innerHTML = response.data.weather[0].description;
    let minimum = document.querySelector("#min-temp");
    minimum.innerHTML = Math.round(response.data.main.temp_min);
    let maximum = document.querySelector("#max-temp");
    maximum.innerHTML = Math.round(response.data.main.temp_max);
    let minimumimperial = document.querySelector("#imperial-min");
    minimumimperial.innerHTML = "°F";
    let maximumimperial = document.querySelector("#imperial-max");
    maximumimperial.innerHTML = "°F";
    let humidity = document.querySelector("#humidity");
    humidity.innerHTML = Math.round(response.data.main.humidity);
    let wind = document.querySelector("#wind");
    wind.innerHTML = Math.round(response.data.wind.speed);
    let windimperial = document.querySelector("#imperial-wind");
    windimperial.innerHTML = "mph";
  }
}

let fahrenheitlink = document.querySelector("#fah-link");
fahrenheitlink.addEventListener("click", convertToFahrenheit);
