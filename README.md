### [OpenWeatherMap API](https://openweathermap.org/api)

### Description

An earlier project (~2–3 years ago) representing my first real dive into REST APIs and full-stack development with Node.js and Express.

Surprisingly, the build still holds up: running `npm install` works cleanly with zero dependency conflicts or version mismatch headaches, even a few years later.

A full-stack Node.js application that uses Node.js, Express.js, EJS templating engine and the OpenWeather API to retrieve the current weather and five-day forecast for a given city.

- For the current weather forecast, the [Built-in Geocoding](https://openweathermap.org/current#builtin) API is used.
- For the five-day forecast, OpenWeather's [Geocoding API](https://openweathermap.org/api/geocoding-api) instead. This API retrieves the weather data based on the user's geographical location and 
    is responsible for more accurate results.

### Tech Stack
-   [Node.js](https://nodejs.org/en/)
-   [Express](https://expressjs.com/) framework
-   [EJS](https://ejs.co/) templating

---

### Screen Recording Example

![OpenWeatherAPI](https://github.com/jim3/OpenWeather-API-App/blob/main/openweather.gif?raw=true)
