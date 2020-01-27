import React, { Component} from 'react';
import {Dropdown, Grid, Container} from "semantic-ui-react";
import {autoCompleteSearchEndpoint} from "../../assets/AccuWeatherFunctions";
import {connect} from "react-redux";
import * as actions from "../../store/actions/homePageActions";


const mapStateToProps = (state) => ({
    homePage: state.homePage
});


const mapDispatchToProps = (dispatch) => ({
    fetchWeatherReportAutocomplete: (keyword) => dispatch(actions.fetchWeatherReportAutocomplete(keyword))

});

const mockOptions = [
    {key: 'Paris', text: 'Paris', value: 'Paris'},
    {key: 'Milano', text: 'Milano', value: 'Milano'}

];

class SearchBar extends Component {


    handleChangeOnSearch = (e, {searchQuery}) => {
        if (searchQuery !== "") {
            console.log("###################");
            console.log("searchQuery: " + searchQuery);
            let autoCompleteEndpoint = autoCompleteSearchEndpoint(searchQuery);
            this.props.fetchWeatherReportAutocomplete(autoCompleteEndpoint);
            console.log(this.props);

        }
        else
        {
            this.setState({autocompleteResults: []})
        }

    };

    renderDropdown = () => {
        return <Dropdown
            button
            className='search-icon'
            floating
            labeled
            icon='world'
            options={mockOptions}
            search
            text='Search a city'
            onSearchChange={this.handleChangeOnSearch}



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
