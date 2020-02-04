import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { Icon, Header } from "semantic-ui-react";
import './WeatherNavbar.css'





class WeatherNavbar extends Component {
    render() {
        return (
            <div className="navbar-container">
                <Navbar collapseOnSelect expand="lg" bg="transparent" variant="light" className="main-navbar">
                    <Navbar.Brand href="/">
                        <Header as="h1">
                            <Icon name="sun outline" size="big" color="yellow"/>
                            <Header.Content className="navbar-title">
                                Weather App
                            </Header.Content>
                        </Header>

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav" className="nav-elements">
                        <Nav className="first-item">
                            <Link to="/">
                                <h1 className="title active">Home</h1>
                            </Link>
                        </Nav>

                        <Nav className="second-item">
                            <Link to="/favorites">
                                <h1 className="title active">Favorites</h1>
                            </Link>
                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
            </div>

        );
    }
}

export default WeatherNavbar;
