import React, {useEffect, useState} from 'react';
import './toDoListCSS.css';
import {Link} from "react-router-dom";
import '../allPages.css'
/*
SmartLuggage Application
Marek Augustyn
6.08.2023
*/

const HomeButtons = () => {

    const [tripData, setTripData] = useState([]);

    useEffect(() => {
        fetch("https://smartluggagebackend.herokuapp.com/api/v1/trip").then((response) => response.json()).then((TripData) => {
            setTripData(TripData);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, ["hI trip"]);




    return (

        // Description of the list
        <div id="allButtons" className="row">

            <div className="col s10 offset-s2">
                {/*Row with buttons*/}
                <div id="myLuggage">
                    <Link to="displayList">
                        <button id="buttonSizeMyLuggage"
                                className="btn waves-effect waves-light #5d4037 brown darken-1">
                            <div id="myLuggageIconAndName"><i id="iconMyLuggage"
                                                              className="medium material-icons">luggage</i> My Bag
                            </div>
                        </button>
                    </Link>
                </div>


                <div id="createCustomerList">
                    <Link to="CreateCustomerList">
                        <button id="buttonSizeCreateList"
                                className="btn waves-effect waves-light #5d4037 brown darken-1">
                            <i id="iconCreateList" className="medium material-icons">luggage</i>
                            Pack your luggage
                        </button>
                    </Link>
                </div>


                <div id="loginOrRegister">
                    <Link to="Register">
                        <button id="buttonSizeRegister" className="btn waves-effect waves-light #5d4037 brown darken-1">
                            <div id="registerIconAndName"><i id="iconRegister"
                                                             className="medium material-icons">account_box</i> Register
                            </div>
                        </button>
                    </Link>
                </div>

                {/*LOGIN BUTTON ON HOME PAGE*/}
                <div id="loginOrRegister">
                    <Link to="Login">
                        <button id="buttonSizeLogin" className="btn waves-effect waves-light #5d4037 brown darken-1">
                            <div id="loginIconAndName"><i id="iconLogin"
                                                          className="medium material-icons">login</i> Login
                            </div>
                        </button>
                    </Link>
                </div>


                <div id="pay">
                    <Link to="pay">
                        <button id="buttonSizePay" className="btn waves-effect waves-light #5d4037 brown darken-1">
                            <div id="payIconAndName"><i id="iconPay" className="medium material-icons">credit_card</i>
                                Pay
                            </div>
                        </button>
                    </Link>
                </div>

                {/*ADMIN BUTTON*/}
                <div id="adminButton">
                    <Link to="LoginAdminPage">
                        <button id="buttonSizeAdmin" className="btn waves-effect waves-light #5d4037 brown darken-1">
                            <div id="adminIconAndName"><i id="iconAdmin"
                                                          className="medium material-icons">login</i> Admin
                            </div>
                        </button>
                    </Link>
                </div>

                {/*Vision System*/}
                <div id="adminButton">
                    <Link to="packByUsingCamera">
                        <button id="buttonSizeAdmin" className="btn waves-effect waves-light #5d4037 brown darken-1">
                            <div id="adminIconAndName"><i id="iconAdmin"
                                                          className="medium material-icons">camera</i> Vision System
                            </div>
                        </button>
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

        </div>
    )//end return

}

export default HomeButtons;