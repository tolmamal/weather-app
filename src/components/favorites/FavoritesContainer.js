import React, {Component} from 'react';
import {Container, Card} from "semantic-ui-react";
import FavoriteCard from './FavoriteCard';
import EmptyFavorites from './EmptyFavorites';
import {connect} from "react-redux";
import * as actions from "../../store/actions/homePageActions";
import {SET_CURRENT_CITY} from "../../store/actions/homePageActions";
import {addLocationToFavorites, removeLocationFromFavorites} from "../../store/actions/favoritesPageActions";
import {locationIsInFavorites} from "../../store/actions/homePageActions";

const mapStateToProps = (state) => ({
    home: state.home,
    favorites: state.favorites
});

const mapDispatchToProps = (dispatch) => ({
    addToFavorites: (data) => dispatch(addLocationToFavorites(data)),
    removeFromFavorites: (cityKey) => dispatch(removeLocationFromFavorites(cityKey)),
    locationIsInFavorites: (cityKey) => dispatch(locationIsInFavorites(cityKey))
});


class FavoritesContainer extends Component {


    getDataByIndex = (index) => {
        const {locations} = this.props.favorites;
        if (locations.length !== 0)
        {
            const {cityKey, cityName, countryName} = locations[index];
            const {Text} = locations[index].weeklyForecastObject.Headline;
            const {Value} = locations[index].weeklyForecastObject.DailyForecasts[0].Temperature.Maximum;
            const {Icon} = locations[index].weeklyForecastObject.DailyForecasts[0].Day;
            return {
                cityKey: cityKey,
                cityName: cityName,
                countryName: countryName,
                weatherText: Text,
                currentTemp: Value,
                currentIcon: Icon,
                location: locations[index]
            }
        }

    };

    render() {

        return (
            <Container>
                {this.props.favorites.locations.length !== 0 ?
                    <Card.Group itemsPerRow={this.props.favorites.locations.length}>
                        {this.props.favorites.locations.map((fav, index) =>
                            <FavoriteCard
                                key={index}
                                data={this.getDataByIndex(index)}
                                removeFromFavorites={this.props.removeFromFavorites}
                                locationIsInFavorites={this.props.locationIsInFavorites}
                            />
                        )

                        }

                    </Card.Group>
                    :
                    <EmptyFavorites/>

                }

            </Container>

        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesContainer);
