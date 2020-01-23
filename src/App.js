import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './components/home/Home';
import WeatherNavbar from './components/navbar/WeatherNavbar';
import Favorites from './components/favorites/favorites';
import './App.css';
import './assets/style/colors.css';
import 'semantic-ui-css/semantic.min.css'


import { weeklyForecastEndpoint, autoCompleteSearchEndpoint, currentWeatherEndpoint, geoLocationEndpoint } from './assets/AccuWeatherFunctions';
import { createWeatherObject } from './assets/createWeatherObject';

/* STORE */



/* Stylesheets */
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function AppRouter() {
    return (
        <Router>
            <div className="app-container">
                <WeatherNavbar/>

                <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/favorites" component={Favorites}/>
                </Switch>

            </div>
        </Router>
    )

}


class App extends Component {

    render() {
        return (
            <div className="App">
                <AppRouter/>

            </div>

        )
    }


}


export default App;
