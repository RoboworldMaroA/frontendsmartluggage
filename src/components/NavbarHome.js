import React, {Component} from 'react';
import {Link, NavLink} from "react-router-dom";
import M from 'materialize-css';

class NavbarHome extends Component {


    // navbar functionality from Materialize css website
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, {edge:'right'});
        });

        // Initialize collapsible (uncomment the lines below if you use the dropdown variation)
        var collapsibleElem = document.querySelector('.collapsible');
        var collapsibleInstance = M.Collapsible.init(collapsibleElem, {});


    }




    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper #5d4037 brown darken-2">
                        <a id="TitleHomePage" href="/" className="brand-logo">SmartLuggage</a>
                        <a href="#" data-target="mobile-links" className="sidenav-trigger"><i
                            className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li><Link to={"/displayList"}> My Travel List</Link></li>
                            <li><Link to="/help"> Help</Link></li>
                            <li><Link to="LoginAdminPage"> Administrator</Link></li>
                            {/*<li>  <a href="http://localhost:8080/logout"> Logout</a></li>*/}
                            <li><a href="https://backendsmartluggage.herokuapp.com/logout"> Logout</a></li>
                        </ul>
                    </div>
                </nav>

                <ul className="sidenav" id="mobile-links">
                    <li><Link to="/displayList"> My Travel List</Link></li>
                    <li><Link to="/help"> Help</Link></li>
                    <li><Link to="/LoginAdminPage"> Administrator</Link></li>
                    <li><a href="https://backendsmartluggage.herokuapp.com/logout"> Logout</a></li>
                </ul>

            </div>
        );
    }
}

export default NavbarHome;