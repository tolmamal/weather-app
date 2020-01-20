import {SAVE_AUTOCOMPLETE_RESULTS, SAVE_WEEKLY_FORECAST, SET_CURRENT_CITY} from "../actions/homePageActions";


const initialState = {
    cityKey: 0,
    cityName: "",
    countryName: "",
    favorite: false,
    weatherObject: [{}],
    autocompleteResults: [],
    weeklyForecastObject: {
        Headline: {},
        DailyForecasts: []
    }
};

const homePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_WEEKLY_FORECAST: {
            const {payload} = action;

            return {
                ...state,
                weeklyForecastObject: {
                    ...payload
                }
            }
        }
        case SAVE_AUTOCOMPLETE_RESULTS: {
            const {payload} = action;

            return {
                ...state,
                autocompleteResults: payload
            }
        }
        case SET_CURRENT_CITY: {
            const {payload} = action;

            return {
                ...state,
                cityKey: payload.Key,
                cityName: payload.LocalizedName,
                countryName: payload.Country.LocalizedName
            }
        }
        case 'FETCH_WEATHER_OBJECT':
            return action.payload
        case 'Add_FAVORITE':
            return state
        case 'REMOVE_FAVORITE':
            return state
        default:
            return state

    }
};

export default homePageReducer;
