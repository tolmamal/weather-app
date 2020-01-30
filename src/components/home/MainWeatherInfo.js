import React from 'react';
import {Image, Header} from "semantic-ui-react";
import {createWeatherIcon} from "../../assets/createWeatherIcon";


export default function MainWeatherInfo(props) {


    const getTemp = () => {
        const {weeklyForecastObject: {DailyForecasts}} = props;
        if (DailyForecasts.length) {
            return ((DailyForecasts[0].Temperature.Maximum.Value - 32) * 5/9).toFixed(0);
        }
    };

    const getFirstDayIcon = () => {
        const {weeklyForecastObject: {DailyForecasts}} = props;
        if (DailyForecasts.length) {
            return <Image src={createWeatherIcon(DailyForecasts[0].Day.Icon)}/>
        }
        return null;
    };



    return (
        <div>
            <Header as="h1">
                {getFirstDayIcon()}
                <Header.Content>
                    {props.cityName}
                    <Header.Subheader>
                        {props.countryName}
                    </Header.Subheader>
                    <Header.Subheader>
                        {getTemp() +  "°"}
                    </Header.Subheader>
                </Header.Content>
            </Header>
        </div>
    )
}
