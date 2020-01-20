import React from 'react';
import { Image, Header } from "semantic-ui-react";
import { createWeatherIcon } from "../../assets/createWeatherIcon";


export default function MainWeatherInfo(props) {
    return (
        <div>
            {console.log('MainWeatherInfo')}
            {console.log(props)}
            <Header as="h1">
                <Image src={createWeatherIcon(props.weatherObject.WeatherIcon)} />
                <Header.Content>
                    {props.cityName}
                    <Header.Subheader>
                        {props.countryName}
                    </Header.Subheader>
                    <Header.Subheader>
                        {'need to get Temperature here'}
                    </Header.Subheader>
                </Header.Content>
            </Header>
        </div>
    )
}
