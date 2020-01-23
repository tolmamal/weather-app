
export const createWeatherIcon = (weatherIcon) => {
    return require(`../assets/weatherIcons/${weatherIcon < 10 ? '0':''}${weatherIcon}-s.png`);


    if (weatherIcon < 10)
        return "https://developer.accuweather.com/sites/default/files/0" + weatherIcon + "-s.png";
    else
        return "https://developer.accuweather.com/sites/default/files/" + weatherIcon + "-s.png";

    // if (weatherIcon < 10) {
    //     return "./weatherIcons/0" + weatherIcon + "-s.png";
    //
    // }
    // else
    //     return "./weatherIcons/" + weatherIcon + "-s.png";


};



