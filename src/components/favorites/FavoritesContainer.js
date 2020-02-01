import React, {Component} from 'react';
import {Container, Card} from "semantic-ui-react";
import FavoriteCard from './FavoriteCard';
import EmptyFavorites from './EmptyFavorites';
import {connect} from "react-redux";
import * as actions from "../../store/actions/homePageActions";
import {SET_CURRENT_CITY} from "../../store/actions/homePageActions";
import {addLocationToFavorites, removeLocationFromFavorites} from "../../store/actions/favoritesPageActions";

const mapStateToProps = (state) => ({
    favorites: state.favorites
});

const mapDispatchToProps = (dispatch) => ({
    addToFavorites: (data) => dispatch(addLocationToFavorites(data)),
    removeFromFavorites: (cityKey) => dispatch(removeLocationFromFavorites(cityKey))
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
                currentIcon: Icon
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
                                data={this.getDataByIndex(index)}
                                removeFromFavorites={this.props.removeFromFavorites}
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
