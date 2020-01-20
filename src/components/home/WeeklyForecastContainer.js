import React from 'react';
import WeatherCard from './WeatherCard';
import { Container, Card, Grid } from "semantic-ui-react";

export default function WeeklyForecastContainer(props) {
    return (
        <Grid.Column>
            <Container>
                <Card.Group stackable itemsPerRow={5}>
                    {props.weatherObject.DailyForecasts.map(day =>
                        <WeatherCard key={day.EpochDate} dayObject={day} />
                    )}

                </Card.Group>
            </Container>
        </Grid.Column>
    )

}
