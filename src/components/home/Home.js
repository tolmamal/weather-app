import React, {Component} from 'react';
import './Home.css';
import MainWeatherContainer from './MainWeatherContainer';
import {Grid, Container} from "semantic-ui-react";
import {connect} from "react-redux";
import * as actions from '../../store/actions/homePageActions';
import {SET_CURRENT_CITY} from "../../store/actions/homePageActions";

const mapStateToProps = (state) => ({
    homePage: state.homePage

});

const mapDispatchToProps = (dispatch) => ({
    getCurrentLocationWeather: () => dispatch(actions.getCurrentLocationWeather()),
    fetchWeatherReportAutocomplete: (keyword) => dispatch(actions.fetchWeatherReportAutocomplete(keyword)),
    getWeeklyForecast: (cityKey) => dispatch(actions.getWeeklyForecast(cityKey)),
    setCurrentCity: (data) => dispatch({type: SET_CURRENT_CITY, payload: data})
});

class Home extends Component {
    componentDidMount() {
        // this.props.getCurrentLocationWeather();
        this.props.getWeeklyForecast();
        this.props.fetchWeatherReportAutocomplete('milano');
        setTimeout(() => {
            this.onCitySelection(this.props.homePage.autocompleteResults[5]);
        }, 100);
    }

    onCitySelection = (city) => {
        this.props.setCurrentCity(city);
        this.props.getWeeklyForecast(city.Key);
    };

    render() {
        const {homePage} = this.props;
        console.log(this.props);
        return (
            <Container>
                <h3>Home Page</h3>
                <br/>
                <MainWeatherContainer {...this.props}/>
            </Container>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
