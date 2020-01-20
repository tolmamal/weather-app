import React, { Component } from 'react';
import './MainWeatherContainer.css';
import { Container, Grid } from "semantic-ui-react";
import MainWeatherInfo from './MainWeatherInfo';
import WeeklyForecastContainer from './WeeklyForecastContainer';



class MainWeatherContainer extends Component {

    renderMainContainer() {
        const {cityName, countryName, weatherObject, weeklyForecastObject} = this.props.homePage;
        return <Container className="main-weather-container">
            <Grid stackable className="main-weather-grid">
                <Grid.Row verticalAlign="middle" columns={3}>
                    <Grid.Column textAlign="left">
                        <MainWeatherInfo
                            cityName={cityName}
                            countryName={countryName}
                            weatherObject={weatherObject[0]}
                            /* also need to pass temperature units */

                        />
                    </Grid.Column>

                    <Grid.Column>
                        <h2 className="weather-description">
                            {/*{this.props.weatherObject[0].WeatherText}*/}
                            {weeklyForecastObject.Headline.Text}

                        </h2>
                    </Grid.Column>

                    <Grid.Column>
                        {'Favorites - hurtIcon'}

                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <WeeklyForecastContainer weatherObject={weeklyForecastObject} />
                </Grid.Row>

            </Grid>
        </Container>
    }



    render() {
        return (
            <Grid.Row>
                <Grid.Column className="main-weather-column">
                    {this.renderMainContainer()}



                </Grid.Column>
            </Grid.Row>
        )
    }

}


export default MainWeatherContainer;
