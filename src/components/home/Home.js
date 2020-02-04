import React, {Component} from 'react';
import './Home.css';
import MainWeatherContainer from './MainWeatherContainer';
import SearchBar from './SearchBar';
import {Grid, Container} from "semantic-ui-react";
import {connect} from "react-redux";
import * as actions from '../../store/actions/homePageActions';
import {SET_CURRENT_CITY} from "../../store/actions/homePageActions";
import {addLocationToFavorites, removeLocationFromFavorites} from "../../store/actions/favoritesPageActions";
import {locationIsInFavorites} from "../../store/actions/homePageActions";


const mapStateToProps = (state) => ({
    homePage: state.homePage,
    favorites: state.favorites
});

const mapDispatchToProps = (dispatch) => ({
    getCurrentLocationWeather: () => dispatch(actions.getCurrentLocationWeather()),
    fetchWeatherReportAutocomplete: (keyword) => dispatch(actions.fetchWeatherReportAutocomplete(keyword)),
    getWeeklyForecast: (cityKey) => dispatch(actions.getWeeklyForecast(cityKey)),
    setCurrentCity: (data) => dispatch({type: SET_CURRENT_CITY, payload: data}),
    addToFavorites: (data) => dispatch(addLocationToFavorites(data)),
    removeFromFavorites: (cityKey) => dispatch(removeLocationFromFavorites(cityKey)),
    locationIsInFavorites: (cityKey) => dispatch(locationIsInFavorites(cityKey))
});

class Home extends Component {
    componentDidMount() {
        this.props.getCurrentLocationWeather();

    }



    render() {
        const {homePage} = this.props;
        return (
            <Container>
                <Grid>
                    <MainWeatherContainer
                        location={homePage}
                        addToFavorites={this.props.addToFavorites}
                        removeFromFavorites={this.props.removeFromFavorites}
                        locationIsInFavorites={this.props.locationIsInFavorites}
                    />
                    <SearchBar/>
                </Grid>
            </Container>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
