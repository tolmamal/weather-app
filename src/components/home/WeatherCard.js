import React, {Component} from 'react';
import {Card, Header, Image, List} from "semantic-ui-react";
import './WeatherCard.css';
import {createWeatherIcon} from "../../assets/createWeatherIcon";

class WeatherCard extends Component {

    getDayFromEpochDate(epochDate) {
        return (new Date(epochDate * 1000)).toLocaleDateString('en-us', {weekday: 'long'});
    }

    getTempInCelsius(temp) {
        return ((temp - 32) * 5/9).toFixed(0);
    }


    render() {
        return (
            <Card raised className="card-item">
                <h2 className="day-title">
                    {this.getDayFromEpochDate(this.props.dayObject.EpochDate)}
                </h2>
                <Card.Content>
                    <Header as="h1" icon textAlign="center">
                        <Image src={createWeatherIcon(this.props.dayObject.Day.Icon)} />
                        <Header.Content>
                            <List divided horizontal size="large">
                                <List.Item>
                                    {this.getTempInCelsius(this.props.dayObject.Temperature.Maximum.Value) + "°"}
                                </List.Item>

                                <List.Item>
                                    {this.getTempInCelsius(this.props.dayObject.Temperature.Minimum.Value) + "°"}
                                </List.Item>
                            </List>

                        </Header.Content>
                    </Header>
                </Card.Content>

            </Card>

        )
    }
}


export default WeatherCard;
