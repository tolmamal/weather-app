import React, {Component} from 'react';
import {Card, Image, Header} from "semantic-ui-react";
import {createWeatherIcon} from "../../assets/createWeatherIcon";


class FavoriteCard extends Component {

    getTempInCelsius(temp) {
        return ((temp - 32) * 5/9).toFixed(0);
    }



    render() {
        const {cityKey, cityName, countryName, weatherText, currentTemp, currentIcon} = this.props.data;

        return (
            <Card>
                <Card.Header>
                    <Header as="h2" style={{ marginTop: 10 }}>
                        {cityName}
                    </Header>
                </Card.Header>

                <Card.Description>
                    <Header as="h3" style={{marginBottom: 10, marginTop: 0}}>
                        {this.getTempInCelsius(currentTemp) + "°"}
                    </Header>
                    <Image src={createWeatherIcon(currentIcon)}  size="small"/>
                </Card.Description>
                <Card.Content>
                    <Card.Header>
                        {weatherText}
                    </Card.Header>
                </Card.Content>
            </Card>

        )
    }
}


export default FavoriteCard;
