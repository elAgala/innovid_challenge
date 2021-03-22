var express = require('express');
var router = express.Router();

const { dailyData } = require('../utils/weather_utils')

/*
 * GET route for getting weather forecasts by city name
 * 
 * Returns a status code !200 in case of error or the weather info
 * */
router.get('/', async (req, res) => {
  const { city, forecastdays } = req.query
  const weatherData = await dailyData(city, forecastdays)
  res.status(weatherData.status).json(weatherData.data)
});

module.exports = router;
