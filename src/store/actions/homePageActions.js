// const fetchWeatherObject = (weatherObject) => {
//     return {
//         type: 'FETCH_WEATHER_OBJECT',
//         payload: weatherObject
//     }
// };
//
// export default fetchWeatherObject;

import {geoLocationEndpoint, getGeoLocationEndpoint, weeklyForecastEndpoint} from "../../assets/AccuWeatherFunctions";
import axios from "axios";

export const SAVE_WEEKLY_FORECAST = "HOME_PAGE@SAVE_WEEKLY_FORECAST";

export const getCurrentLocationWeather = () => {
    return async (dispatch) => {
        try {
            const geoLocationResponse = await axios.get(getGeoLocationEndpoint());
            const {data} = geoLocationResponse;
            const currentLocation = await axios.get(geoLocationEndpoint(data.latitude, data.longitude));
            const {Key} = currentLocation.data;
            dispatch(getWeeklyForecast(Key));
        } catch (e) {

        }
    }
};

export const getWeeklyForecast = (cityKey) => {
    return async (dispatch) => {
        try {
            const currentLocationWeather = await axios.get(weeklyForecastEndpoint(cityKey));
            dispatch({type: SAVE_WEEKLY_FORECAST, payload: currentLocationWeather.data});
        } catch (e) {

        }
    }
};

export const fetchWeatherReportAutocomplete = (dispatch) => {

};
