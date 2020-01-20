import React, {Component} from 'react';
import './Home.css';
import {Grid, Container} from "semantic-ui-react";
import {connect} from "react-redux";
import * as actions from '../../store/actions/homePageActions';

const mapStateToProps = (state) => ({
    homePage: state.homePage
});

const mapDispatchToProps = (dispatch) => ({
    getCurrentLocationWeather: () => dispatch(actions.getCurrentLocationWeather()),
    fetchWeatherReportAutocomplete: () => dispatch(actions.fetchWeatherReportAutocomplete()),
    getWeeklyForecast: (cityKey) => dispatch(actions.getWeeklyForecast(cityKey))
});

class Home extends Component {
    componentDidMount() {
        // this.props.getCurrentLocationWeather();

    }

    onCitySelection = (city) => {
        this.props.getWeeklyForecast(city.Key);
    };

    render() {
        const {homePage} = this.props;
        console.log({homePage});
        return (
            <Container>
                <h3>Home Page</h3>
            </Container>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
