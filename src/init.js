document.addEventListener("DOMContentLoaded", function() {
  const ctx = document.querySelector("#NYCWeatherChart").getContext("2d")
  const API_KEY = "86a879dc945f1d1808e68fed7c07fc13";
  const CORS_WRAPPER = "https://cors-anywhere.herokuapp.com/"
  const DARK_SKY_BASE = "https://api.darksky.net/"
  const URL = `${CORS_WRAPPER}${DARK_SKY_BASE}/forecast/${API_KEY}/40.7127,-74.0059?exclude=currently,minutely,daily`

  // makeRequest fetches to DarkSky and appends the chart to the DOM
  // Get the weather data using a fetch request. You can write your fetch inside the makeRequest function declared in src/weatherChart.js. The DarSky API will send back a JSON response.
    makeRequest(URL, ctx)
});
