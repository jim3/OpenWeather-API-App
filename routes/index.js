const express = require("express");
const router = express.Router();
const { currentWeather, fiveDayWeather } = require("../services/weatherService");
const helpers = require("./helper");

// render the index page
router.get("/", async (req, res, next) => {
    res.render("index", { title: "Home" });
});

// --- post route for the form --- //
router.post("/", async (req, res) => {
    try {
        const zipCode = req.body.zip;
        const weatherData = await currentWeather(zipCode);
        const fiveDayWeatherData = await fiveDayWeather(zipCode);
        const { coord, base, weather, main, wind, clouds, sys, timezone, name } = weatherData;
        const { list } = fiveDayWeatherData;
        res.render("index", {
            coord: coord,
            base: base,
            weather: weather,
            main: main,
            wind: wind,
            clouds: clouds,
            sys: sys,
            timezone: timezone,
            name: name,
            list: list,
            unixTimeConvertor: helpers.unixTimeConvertor,
        });
    } catch (err) {
        console.error("Error rendering data:", err);
        res.status(500).send("Error getting weather data.");
    }
});

// render the about page
router.get("/", async (_req, res) => {
    res.render("about", { title: "About" });
});

module.exports = router;
