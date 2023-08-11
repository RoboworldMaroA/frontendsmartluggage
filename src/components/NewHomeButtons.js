import React, {useEffect, useState} from 'react';
import './toDoListCSS.css';
import {Link} from "react-router-dom";
import '../allPages.css'
/*
SmartLuggage Application
Marek Augustyn

New Home Buttons
Form of the tiles, six tails on Home Page
*/

const HomeButtons = ({}) => {

    const [tripData, setTripData] = useState([]);

    useEffect(() => {
        //do something when loading
        fetch("https://smartluggagebackend.herokuapp.com/api/v1/trip").then((response) => response.json()).then((TripData) => {
            setTripData(TripData);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, ["hI trip"]);




    return (

        // Description of the list
        <div id="allButtonsNewHomeButtons" className="row">

            <div id="myLuggageNewHomeButtons" className="col s12 m6">

                    <Link to="displayList">
                        <div className="card">
                            <div className="card-image">
                                <img src={require("../photo/NewHomePageMyTravelList.jpg")}/>
                                    <span className="card-title">My Travel List</span>
                            </div>
                        </div>
                    </Link>
                </div>

                <div id="createCustomerList" className="col s12 m6">
                    <Link to="CreateCustomerList">
                        <div className="card">
                            <div className="card-image">
                                <img src={require("../photo/NewHomePagePackYourLuggage.jpg")}/>
                                <span className="card-title">Pack Your Luggage</span>
                            </div>
                        </div>
                    </Link>
                </div>


            <div className="col s12 m6">
                    <Link to="Register">
                        <div className="card">
                            <div className="card-image">
                                <img src={require("../photo/NewHomePageRegisterCardSmall.jpg")}/>
                                <span className="card-title">Register</span>
                            </div>
                        </div>
                    </Link>
                </div>


                {/*LOGIN BUTTON ON HOME PAGE*/}
            <div className="col s12 m6">
                    <Link to="Login">
                        <div className="card">
                            <div className="card-image">
                                <img src={require("../photo/NewHomePageLoginSmall.jpg")}/>
                                <span className="card-title">Login</span>
                            </div>
                        </div>
                    </Link>
                </div>


            <div className="col s12 m6">
                    <Link to="pay">
                        <div className="card">
                            <div className="card-image">
                                <img src={require("../photo/NewHomePagePaySmall.jpg")}/>
                                <span className="card-title">Pay</span>
                            </div>
                        </div>
                    </Link>
                </div>


            <div className="col s12 m6">
                {/*ADMIN BUTTON*/}
                    <Link to="LoginAdminPage">
                        <div className="card">
                            <div className="card-image">
                                <img src={require("../photo/NewHomePageAdminSmall.jpg")}/>
                                <span className="card-title">Admin</span>
                            </div>
                        </div>
                    </Link>
                </div>


                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

        </div>
    )//end return

}

export default HomeButtons;