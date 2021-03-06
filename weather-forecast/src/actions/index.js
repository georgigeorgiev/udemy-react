import axios from 'axios';
import CONFIGS from '../../config';

const API_KEY = CONFIGS.API_KEY
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},bg`;
    const request = axios.get(url);  // returns promise

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}