import axios from 'axios';

const API_KEY = '237eb10d37fc442952743768e3ee79f4';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

// ACTION CREATOR
export function fetchWeather(city) {

  // Change `AU` to another ISO 3166 country code to search another country (e.g. US)
  const url = `${ROOT_URL}&q=${city},AU`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
