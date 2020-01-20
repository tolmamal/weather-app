import {SAVE_WEEKLY_FORECAST} from "../actions/homePageActions";

// TODO: remove this object when done with home page UI
const mockWeeklyForecastObject = {
    "Headline": {
        "EffectiveDate": "2020-01-20T01:00:00+02:00",
        "EffectiveEpochDate": 1579474800,
        "Severity": 3,
        "Text": "Expect rainy weather late Sunday night through Monday morning",
        "Category": "rain",
        "EndDate": "2020-01-20T13:00:00+02:00",
        "EndEpochDate": 1579518000,
        "MobileLink": "http://m.accuweather.com/en/il/mefallesim/215647/extended-weather-forecast/215647?lang=en-us",
        "Link": "http://www.accuweather.com/en/il/mefallesim/215647/daily-weather-forecast/215647?lang=en-us"
    },
    "DailyForecasts": [{
        "Date": "2020-01-19T07:00:00+02:00",
        "EpochDate": 1579410000,
        "Temperature": {
            "Minimum": {"Value": 52.0, "Unit": "F", "UnitType": 18},
            "Maximum": {"Value": 59.0, "Unit": "F", "UnitType": 18}
        },
        "Day": {
            "Icon": 12,
            "IconPhrase": "Showers",
            "HasPrecipitation": true,
            "PrecipitationType": "Rain",
            "PrecipitationIntensity": "Moderate"
        },
        "Night": {
            "Icon": 40,
            "IconPhrase": "Mostly cloudy w/ showers",
            "HasPrecipitation": true,
            "PrecipitationType": "Rain",
            "PrecipitationIntensity": "Light"
        },
        "Sources": ["AccuWeather"],
        "MobileLink": "http://m.accuweather.com/en/il/mefallesim/215647/daily-weather-forecast/215647?day=1&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/mefallesim/215647/daily-weather-forecast/215647?day=1&lang=en-us"
    }, {
        "Date": "2020-01-20T07:00:00+02:00",
        "EpochDate": 1579496400,
        "Temperature": {
            "Minimum": {"Value": 49.0, "Unit": "F", "UnitType": 18},
            "Maximum": {"Value": 58.0, "Unit": "F", "UnitType": 18}
        },
        "Day": {
            "Icon": 12,
            "IconPhrase": "Showers",
            "HasPrecipitation": true,
            "PrecipitationType": "Rain",
            "PrecipitationIntensity": "Light"
        },
        "Night": {
            "Icon": 39,
            "IconPhrase": "Partly cloudy w/ showers",
            "HasPrecipitation": true,
            "PrecipitationType": "Rain",
            "PrecipitationIntensity": "Light"
        },
        "Sources": ["AccuWeather"],
        "MobileLink": "http://m.accuweather.com/en/il/mefallesim/215647/daily-weather-forecast/215647?day=2&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/mefallesim/215647/daily-weather-forecast/215647?day=2&lang=en-us"
    }, {
        "Date": "2020-01-21T07:00:00+02:00",
        "EpochDate": 1579582800,
        "Temperature": {
            "Minimum": {"Value": 49.0, "Unit": "F", "UnitType": 18},
            "Maximum": {"Value": 56.0, "Unit": "F", "UnitType": 18}
        },
        "Day": {
            "Icon": 14,
            "IconPhrase": "Partly sunny w/ showers",
            "HasPrecipitation": true,
            "PrecipitationType": "Rain",
            "PrecipitationIntensity": "Moderate"
        },
        "Night": {
            "Icon": 40,
            "IconPhrase": "Mostly cloudy w/ showers",
            "HasPrecipitation": true,
            "PrecipitationType": "Rain",
            "PrecipitationIntensity": "Light"
        },
        "Sources": ["AccuWeather"],
        "MobileLink": "http://m.accuweather.com/en/il/mefallesim/215647/daily-weather-forecast/215647?day=3&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/mefallesim/215647/daily-weather-forecast/215647?day=3&lang=en-us"
    }, {
        "Date": "2020-01-22T07:00:00+02:00",
        "EpochDate": 1579669200,
        "Temperature": {
            "Minimum": {"Value": 44.0, "Unit": "F", "UnitType": 18},
            "Maximum": {"Value": 59.0, "Unit": "F", "UnitType": 18}
        },
        "Day": {
            "Icon": 14,
            "IconPhrase": "Partly sunny w/ showers",
            "HasPrecipitation": true,
            "PrecipitationType": "Rain",
            "PrecipitationIntensity": "Light"
        },
        "Night": {"Icon": 35, "IconPhrase": "Partly cloudy", "HasPrecipitation": false},
        "Sources": ["AccuWeather"],
        "MobileLink": "http://m.accuweather.com/en/il/mefallesim/215647/daily-weather-forecast/215647?day=4&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/mefallesim/215647/daily-weather-forecast/215647?day=4&lang=en-us"
    }, {
        "Date": "2020-01-23T07:00:00+02:00",
        "EpochDate": 1579755600,
        "Temperature": {
            "Minimum": {"Value": 50.0, "Unit": "F", "UnitType": 18},
            "Maximum": {"Value": 59.0, "Unit": "F", "UnitType": 18}
        },
        "Day": {"Icon": 4, "IconPhrase": "Intermittent clouds", "HasPrecipitation": false},
        "Night": {
            "Icon": 12,
            "IconPhrase": "Showers",
            "HasPrecipitation": true,
            "PrecipitationType": "Rain",
            "PrecipitationIntensity": "Light"
        },
        "Sources": ["AccuWeather"],
        "MobileLink": "http://m.accuweather.com/en/il/mefallesim/215647/daily-weather-forecast/215647?day=5&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/mefallesim/215647/daily-weather-forecast/215647?day=5&lang=en-us"
    }]
};






const initialState = {
    cityKey: 0,
    cityName: "",
    countryName: "",
    favorite: false,
    weatherObject: [{}],
    // TODO: remove mock when done with home page UI
    weeklyForecastObject: mockWeeklyForecastObject,
    // weeklyForecastObject: {
    //     Headline: {},
    //     DailyForecasts: []
    // }
};

const homePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_WEEKLY_FORECAST: {
            const {payload} = action;
            console.log('in reducer', payload);

            return {
                ...state,
                weeklyForecastObject: {
                    ...payload
                }
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
