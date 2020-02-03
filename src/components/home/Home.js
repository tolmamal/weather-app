import React, {Component} from 'react';
import './Home.css';
import MainWeatherContainer from './MainWeatherContainer';
import SearchBar from './SearchBar';
import {Grid, Container} from "semantic-ui-react";
import {connect} from "react-redux";
import * as actions from '../../store/actions/homePageActions';
import {SET_CURRENT_CITY} from "../../store/actions/homePageActions";
import {addLocationToFavorites, removeLocationFromFavorites} from "../../store/actions/favoritesPageActions";

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
});

class Home extends Component {
    componentDidMount() {
        this.props.getCurrentLocationWeather();

    }



    render() {
        const {homePage} = this.props;
        console.log(this.props);
        return (
            <Container>
                <Grid>
                    <h1>Tal Malka</h1>
                    <MainWeatherContainer {...this.props}/>
                    <SearchBar />

                </Grid>


            </Container>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
