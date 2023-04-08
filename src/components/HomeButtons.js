import React, {useEffect, useState} from 'react';
import {type} from "@testing-library/user-event/dist/type";
import {checkNode} from "@testing-library/jest-dom/dist/utils";
import './toDoListCSS.css';
import {Link} from "react-router-dom";
import '../allPages.css'
/*
SmartLuggage Application
Marek Augustyn
12 May 2022
Final Project Software Developer
*/

const HomeButtons = ({}) => {

    const [tripData, setTripData] = useState([]);

    useEffect(() => {
        //do something when loading
        console.log("signal to do something using useEffect")
        fetch("https://smartluggagebackend.herokuapp.com/api/v1/trip").then((response) => response.json()).then((TripData) => {
            // fetch("api/v1/trip/").then((response) => response.json()).then((TripData) => {
            // console.log("List of items in the trip", TripData);
            setTripData(TripData);
            // calculateLastTripId();
        });
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