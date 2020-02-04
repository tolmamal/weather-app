import React, {Component} from 'react';
import {Card, Image, Header, Button, Modal} from "semantic-ui-react";
import {createWeatherIcon} from "../../assets/createWeatherIcon";
import Swal from 'sweetalert2';
import MainWeatherContainer from '../home/MainWeatherContainer';
import "./FavoriteCard.css";



class FavoriteCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ifInfo: false
        }
    }

    onButtonInfo = () => {
        console.log("onButtonInfo");
        this.setState({
            ifInfo: true
        })

    };


    getTempInCelsius(temp) {
        return ((temp - 32) * 5 / 9).toFixed(0);
    }

    handleInfo = (e) => {
        console.log("handleInfo");
        return <MainWeatherContainer {...this.props.data}/>


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
        const favorites = {
            locations: this.props.data
        };

        return (
            <Card className="animated fadeInDown delay-1s">
                <Card.Header>
                    <Header as="h2" style={{marginTop: 10}}>
                        {cityName}
                    </Header>
                </Card.Header>

                <Card.Description>
                    <Header as="h3" style={{marginBottom: 10, marginTop: 0}}>
                        {this.getTempInCelsius(currentTemp) + "°"}
                    </Header>
                    <Image src={createWeatherIcon(currentIcon)} centered="true" size="small"/>
                </Card.Description>
                <Card.Content>
                    <Card.Header>
                        {weatherText}
                    </Card.Header>
                </Card.Content>
                <Card.Content extra>

                    <div className="ui two buttons">
                        <Button basic color='green' onClick={this.onButtonInfo}>
                            INFO
                        </Button>

                                <Modal className="info-modal"
                                       open={this.state.ifInfo}
                                       centered={true}
                                       style={{width:'auto'}}
                                       onClose={() => this.setState({ifInfo: false})}>
                                    <Modal.Content>
                                    <MainWeatherContainer
                                        location={this.props.data.location}
                                        addToFavorites={this.props.addToFavorites}
                                        removeFromFavorites={this.props.removeFromFavorites}
                                        locationIsInFavorites={this.props.locationIsInFavorites}
                                    />
                                    </Modal.Content>
                                </Modal>



                        <Button onClick={this.handleClick} basic color='red'>
                            DELETE
                        </Button>

                    </div>

                </Card.Content>

            </Card>

        )
    }
}


export default FavoriteCard;
