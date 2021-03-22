const axios = require('axios');
const _ = require('lodash')

const URL = 'https://api.weatherbit.io/v2.0/forecast/daily'
const API_KEY = '9467d68960ff4087aaeba19261cb93b2'

const weatherUtils = {}

/*
  * @param { String } city
  * @param { Number } days
  * 
  * Receives a city name and the number of days to request the weather
  * 
  * Returns detailed daily weather info with status code 200 or !200 if there is an error
  *
  * */
weatherUtils.dailyData = async (city, forecastdays) => {
  if(city.length < 2 || (forecastdays > 3 || forecastdays < 1)) return {status: 500}
  const response = await axios.get(`${URL}?city=${city}&days=${forecastdays}&key=${API_KEY}`).catch(err => { return {status: 500} })
  if(response.status != 200) return {status: response.status}
  const weatherData = response.data.data
  const mappedData = weatherData.map(data => _.pick(data, ['valid_date', 'temp', 'sunrise_ts', 'sunset_ts', 'weather']))
  return {
    data: {
      data: mappedData,
      city: response.data.city_name,
    },
    status: 200
  }
}

module.exports = weatherUtils
