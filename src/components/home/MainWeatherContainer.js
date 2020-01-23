import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './MainWeatherContainer.css';
import {Container, Grid} from "semantic-ui-react";
import MainWeatherInfo from './MainWeatherInfo';
import WeeklyForecastContainer from './WeeklyForecastContainer';
import AddAsFavorite from './AddAsFavorite';


class MainWeatherContainer extends Component {

    currentLocationIsInFavorites = () => {
        const {homePage, favorites} = this.props;
        const {cityKey} = homePage;
        const {locations} = favorites;

        // return !!locations.filter(location => cityKey === location.cityKey).length;
        return !!locations.find(location => cityKey === location.cityKey);
    };

    renderMainContainer() {
        const {homePage} = this.props;

        this.currentLocationIsInFavorites();
        const {cityName, countryName, weatherObject, weeklyForecastObject, favorite} = this.props.homePage;
        return <Container className="main-weather-container">
            <Grid stackable className="main-weather-grid">
                <Grid.Row verticalAlign="middle" columns={3}>
                    <Grid.Column textAlign="left">
                        <MainWeatherInfo
                            cityName={cityName}
                            countryName={countryName}
                            weatherObject={weatherObject[0]}
                            weeklyForecastObject={weeklyForecastObject}
                            /* also need to pass temperature units */

                        />
                    </Grid.Column>

                    <Grid.Column>
                        <h2 className="weather-description">
                            {weeklyForecastObject.Headline.Text}

                        </h2>
                    </Grid.Column>

                    <Grid.Column>
                        <AddAsFavorite
                            addToFavorites={() => this.props.addToFavorites(homePage)}
                            removeFromFavorites={() => this.props.removeFromFavorites(homePage.cityKey)}
                            isMarkedAsFavorite={this.currentLocationIsInFavorites()}
                        />
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <WeeklyForecastContainer weatherObject={weeklyForecastObject}/>
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

MainWeatherContainer.propTypes = {
    addToFavorites: PropTypes.func,
    homePage: PropTypes.object,
    removeFromFavorites: PropTypes.func
};

export default MainWeatherContainer;

