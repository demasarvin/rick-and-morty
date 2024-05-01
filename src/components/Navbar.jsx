import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container className='justify-content-center'>
                <NavLink to="/" className={({ isActive }) => isActive ? "navbar-brand text-info" : "navbar-brand"}>Characters</NavLink>
                <NavLink to="/locations" className={({ isActive }) => isActive ? "navbar-brand text-info" : "navbar-brand"}>Locations</NavLink>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
