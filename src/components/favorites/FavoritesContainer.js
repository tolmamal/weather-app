import React, {Component} from 'react';
import {Container, Card} from "semantic-ui-react";
import FavoriteCard from './FavoriteCard';
import EmptyFavorites from './EmptyFavorites';
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
    favorites: state.favorites

});

class FavoritesContainer extends Component {

    getData = () => {
        const {locations} = this.props.favorites;
        if (locations.length !== 0)
        {
            const {cityKey, cityName, countryName} = locations[0];
            const {Text} = locations[0].weeklyForecastObject.Headline;
            const {Value} = locations[0].weeklyForecastObject.DailyForecasts[0].Temperature.Maximum;
            const {Icon} = locations[0].weeklyForecastObject.DailyForecasts[0].Day;
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
                        {this.props.favorites.locations.map(fav =>
                            <FavoriteCard
                                data={this.getData()}

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

export default connect(mapStateToProps, null)(FavoritesContainer);
