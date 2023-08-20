import React, {Component} from 'react';
import {Link} from "react-router-dom";


class NavbarHome extends Component {

    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper #5d4037 brown darken-2">
                        <a id="TitleHomePage" href="/" className="brand-logo">SmartLuggage</a>
                        <a href="/" data-target="mobile-links" className="sidenav-trigger"><i
                            className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li><Link to="../displayList"> My Travel List</Link></li>
                            <li><Link to="../CreateCustomerList"> Pack Your Luggage</Link></li>
                            <li><Link to="../Register"> Register</Link></li>
                            <li><Link to="../Login"> Login</Link></li>
                            <li><Link to="../help"> Help</Link></li>
                            <li><Link to="../LoginAdminPage"> Manage Users</Link></li>
                            <li><Link to="../destination"> Manage Destinations</Link></li>
                            <li><Link to="../packByUsingCamera"> Vision System</Link></li>
                            <li><a href="https://smartluggagebackend.herokuapp.com/logout"> Logout</a></li>
                        </ul>
                    </div>
                </nav>

                <ul className="sidenav" id="mobile-links">
                    <li><Link to="../displayList"> My Travel List</Link></li>
                    <li><Link to="../CreateCustomerList"> Pack Your Luggage</Link></li>
                    <li><Link to="../Register"> Register</Link></li>
                    <li><Link to="../Login"> Login</Link></li>
                    <li><Link to="../help"> Help</Link></li>
                    <li><Link to="../LoginAdminPage"> Manage Users</Link></li>
                    <li><Link to="../destination"> Manage Destinations</Link></li>
                    <li><Link to="../packByUsingCamera"> Vision System</Link></li>
                    <li><a href="https://smartluggagebackend.herokuapp.com/logout"> Logout</a></li>
                </ul>

            </div>
        );
    }
}

export default NavbarHome;