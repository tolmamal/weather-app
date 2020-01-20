export const createWeatherObject = (cityKey, cityName, countryName, favorite, weatherObject, weeklyForecastObject) => {
  return {
      cityKey: cityKey,
      cityName: cityName,
      countryName: countryName,
      favorite: favorite,
      weatherObject: weatherObject,
      weeklyForecastObject: weeklyForecastObject

  }
};
