import React, { Component} from 'react';
import {Dropdown, Grid, Container} from "semantic-ui-react";
import {autoCompleteSearchEndpoint} from "../../assets/AccuWeatherFunctions";
import {connect} from "react-redux";
import * as actions from "../../store/actions/homePageActions";
import MainWeatherContainer from '../home/MainWeatherContainer';
import {SET_CURRENT_CITY} from "../../store/actions/homePageActions";


const mapStateToProps = (state) => ({
    homePage: state.homePage
});


const mapDispatchToProps = (dispatch) => ({
    fetchWeatherReportAutocomplete: (keyword) => dispatch(actions.fetchWeatherReportAutocomplete(keyword)),
    getWeeklyForecast: (cityKey) => dispatch(actions.getWeeklyForecast(cityKey)),
    setCurrentCity: (data) => dispatch({type: SET_CURRENT_CITY, payload: data})

});

const mapAutocompleteOption = (option) => ({...option, key:option.Key, value: option.Key, text: option.LocalizedName + ", " + option.Country.LocalizedName});



class SearchBar extends Component {


    onCitySelection = (city) => {
        this.props.setCurrentCity(city);
        this.props.getWeeklyForecast(city.Key);


    };

    // TODO: take care in case of an error
    handleChange = (e, {value}) => {
        let result = this.props.homePage.autocompleteResults.filter(res => {
            return res.Key === value;
        });

        this.onCitySelection(this.props.homePage.autocompleteResults[0]);
        return <MainWeatherContainer {...this.props}/>




    };

    // TODO: take care in case of an error
    handleChangeOnSearch = (e, {searchQuery}) => {
        if (searchQuery !== "") {
            this.props.fetchWeatherReportAutocomplete(searchQuery);

        }
        else
        {
            this.setState({autocompleteResults: []})
        }

    };

    renderDropdown = () => {
        return <Dropdown
            button
            className='icon teal big'
            selectOnNavigation={false}
            floating
            labeled
            icon='world'
            options={this.props.homePage.autocompleteResults.map(mapAutocompleteOption)}
            search
            text='Search a city'
            onSearchChange={this.handleChangeOnSearch}
            onChange={this.handleChange}



        />

    };


    render() {
        return (
            <Grid.Row style={{ marginTop: '3rem' }}>
                <Grid.Column>
                    <Container>
                        {this.renderDropdown()}

                    </Container>
                </Grid.Column>
            </Grid.Row>

        )

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
