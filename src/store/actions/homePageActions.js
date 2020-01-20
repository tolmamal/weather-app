// const fetchWeatherObject = (weatherObject) => {
//     return {
//         type: 'FETCH_WEATHER_OBJECT',
//         payload: weatherObject
//     }
// };
//
// export default fetchWeatherObject;

import {
    autoCompleteSearchEndpoint,
    geoLocationEndpoint,
    getGeoLocationEndpoint,
    weeklyForecastEndpoint
} from "../../assets/AccuWeatherFunctions";
import axios from "axios";
import {autoCompleteResults, weeklyForecastObject} from "../../mockData";

export const SAVE_WEEKLY_FORECAST = "HOME_PAGE@SAVE_WEEKLY_FORECAST";
export const SAVE_AUTOCOMPLETE_RESULTS = "HOME_PAGE@SAVE_AUTOCOMPLETE_RESULTS";
export const SET_CURRENT_CITY = "HOME_PAGE@SET_CURRENT_CITY";

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

            // TODO: remove dispatch and return after done with mock data
            dispatch({type: SAVE_WEEKLY_FORECAST, payload: weeklyForecastObject.data})
            return;

            if (!cityKey) {
                alert('No city key!!!');
                return;
            }

            const currentLocationWeather = await axios.get(weeklyForecastEndpoint(cityKey));
            const {data} = currentLocationWeather;
            dispatch({type: SAVE_WEEKLY_FORECAST, payload: data});
        } catch (e) {

        }
    }
};

export const fetchWeatherReportAutocomplete = (keyword) => {
    return async (dispatch) => {
        try {

            // TODO: remove dispatch and return after done with mock data
            dispatch({type: SAVE_AUTOCOMPLETE_RESULTS, payload: autoCompleteResults.data})
            return;

            const response = await axios.get(autoCompleteSearchEndpoint(keyword));
            const {data} = response;
            dispatch({type: SAVE_AUTOCOMPLETE_RESULTS, payload: data})
        } catch (e) {

        }
    }
};
