const key = "fns5ztuenRn2SvGhg8pGMech1jWCWTia";



export const weeklyForecastEndpoint = (cityKey) => {
    return "http://dataservice.accuweather.com/forecasts/v1/daily/5day/" + cityKey + "?apikey=" + key;
};


export const autoCompleteSearchEndpoint = (q) => {
    return "http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=" + key + "&q=" + q;

};


export const currentWeatherEndpoint = (cityKey) => {
    return "https://dataservice.accuweather.com/currentconditions/v1/" + cityKey + "?apikey=" + key;
};

export const geoLocationEndpoint = (lat, lon) => {
    return "https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=" + key + "&q=" + lat + "%2C" + lon;
};


export const getGeoLocationEndpoint = () => {
    return "https://freegeoip.app/json/";
};
