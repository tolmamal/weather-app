export const createWeatherIcon = (weatherIcon) => {
    if (weatherIcon < 10) {
        return "./weatherIcons/0" + weatherIcon + "-s.png";

    }
    else
        return "./weatherIcons/" + weatherIcon + "-s.png";

};



