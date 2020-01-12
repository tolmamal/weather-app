import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './WeatherNavbar.css'





class WeatherNavbar extends Component {
    render() {
        return (
            <div className="navbar-container">
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                    <Navbar.Brand href="/">Weather App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
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
