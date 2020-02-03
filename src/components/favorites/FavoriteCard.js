import React, {Component} from 'react';
import {Card, Image, Header, Button} from "semantic-ui-react";
import {createWeatherIcon} from "../../assets/createWeatherIcon";
import Swal from 'sweetalert2';
import MainWeatherContainer from '../home/MainWeatherContainer';

class FavoriteCard extends Component {

    getTempInCelsius(temp) {
        return ((temp - 32) * 5/9).toFixed(0);
    }

    handleInfo = (e) => {
        console.log("handleInfo");
        return <MainWeatherContainer />


    };


    handleClick = (e) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                this.props.removeFromFavorites(this.props.data.cityKey);

            }
        })
    };



    render() {
        const {cityName, weatherText, currentTemp, currentIcon} = this.props.data;

        return (
            <Card>
                <Card.Header>
                    <Header as="h2" style={{ marginTop: 10 }}>
                        {cityName}
                    </Header>
                </Card.Header>

                <Card.Description>
                    <Header as="h3" style={{marginBottom: 10, marginTop: 0}}>
                        {this.getTempInCelsius(currentTemp) + "°"}
                    </Header>
                    <Image src={createWeatherIcon(currentIcon)}  size="small"/>
                </Card.Description>
                <Card.Content>
                    <Card.Header>
                        {weatherText}
                    </Card.Header>
                </Card.Content>
                <Card.Content extra>

                    <div className="ui two buttons">
                        <Button onClick={this.handleInfo} basic color='green'>
                            INFO
                        </Button>
                        <Button negative onClick={this.handleClick} basic color='red'>
                            DELETE
                        </Button>

                    </div>

                </Card.Content>

            </Card>

        )
    }
}


export default FavoriteCard;
