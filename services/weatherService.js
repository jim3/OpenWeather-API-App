require("dotenv").config();

const apiKey = `${process.env.API_KEY}`;
const cc = "us";
const units = "imperial";
const baseCurrentURL = `http://api.openweathermap.org/data/2.5/weather?zip=`;
const baseGeoURL = `http://api.openweathermap.org/geo/1.0/zip?zip=`;
const baseURL = "http://api.openweathermap.org/data/2.5/forecast?";

// fetch current weather data via zip code
const currentWeather = async (zipCode) => {
    try {
        const url = `${baseCurrentURL}${zipCode},${cc}&appid=${apiKey}&units=${units}`;
        const weatherData = await fetch(url);
        const weatherDataJSON = await weatherData.json();
        return weatherDataJSON;
    } catch (err) {
        console.error("error in `currentWeather`:", err);
    }
};

// In order to get the five day / 3 hour forecast, we need the lat and lon from the geocoding api, then the 5 day forecast.
const fiveDayWeather = async (zipCode) => {
    try {
        // get lat and lon
        const url = `${baseGeoURL}${zipCode},${cc}&appid=${apiKey}&units=${units}`;
        const geoData = await fetch(url);
        const geoDataJSON = await geoData.json();
        const { lat, lon } = geoDataJSON;
        // get five day forecast data using lat and lon
        const fiveDayURL = `${baseURL}lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
        const fiveDayData = await fetch(fiveDayURL);
        const fiveDayDataJSON = await fiveDayData.json();
        return fiveDayDataJSON;
    } catch (err) {
        console.error("Error fetching five day data:", err);
    }
};

module.exports = { currentWeather, fiveDayWeather };
