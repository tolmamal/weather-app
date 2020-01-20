import React, {Component} from 'react';
import {Card, Header, Image, List} from "semantic-ui-react";
import './WeatherCard.css';


class WeatherCard extends Component {

    getDayFromEpochDate(epochDate) {
        return (new Date(epochDate * 1000)).toLocaleDateString('en-us', {weekday: 'long'});
    }


    render() {
        return (
            <Card className="card-item">
                <h2 className="day-title">
                    {this.getDayFromEpochDate(this.props.dayObject.EpochDate)}
                </h2>
                <Card.Content>
                    <Header as="h1" icon textAlign="center">
                        <Image src="https://developer.accuweather.com/sites/default/files/12-s.png"/>
                        <Header.Content>
                            <List divided horizontal size="medium">
                                <List.Item>
                                    {'15°'}
                                </List.Item>

                                <List.Item>
                                    {'9°'}
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
