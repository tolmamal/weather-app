import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './MainWeatherContainer.css';
import {Container, Grid} from "semantic-ui-react";
import MainWeatherInfo from './MainWeatherInfo';
import WeeklyForecastContainer from './WeeklyForecastContainer';
import AddAsFavorite from './AddAsFavorite';


class MainWeatherContainer extends Component {

    // currentLocationIsInFavorites = () => {
    //     const {homePage, favorites} = this.props;
    //     console.log(this.props);
    //     const {cityKey} = homePage;
    //     const {locations} = favorites;
    //
    //     // return !!locations.filter(location => cityKey === location.cityKey).length;
    //     return !!locations.find(location => cityKey === location.cityKey);
    // };

    renderMainContainer() {
        const {location} = this.props;
        console.log("renderMainContainer");
        console.log(this.props);

        const {cityName, countryName, weatherObject, weeklyForecastObject} = this.props.location;
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
                            addToFavorites={() => this.props.addToFavorites(location)}
                            removeFromFavorites={() => this.props.removeFromFavorites(location.cityKey)}
                            isMarkedAsFavorite={this.props.locationIsInFavorites(location.cityKey)}
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
    location: PropTypes.object,
    removeFromFavorites: PropTypes.func
};

export default MainWeatherContainer;

