import React, {useState} from 'react';
import {type} from "@testing-library/user-event/dist/type";
import {checkNode} from "@testing-library/jest-dom/dist/utils";
import {Link} from "react-router-dom";
import './CustomerCreateOrDisplayList.css'

/*
SmartLuggage Application
Marek Augustyn
12 May 2022
Final Project Software Developer
*/
const CustomerCreateOrDisplayList = ({}) => {

    return (
        //Description of the list
        <div id="allButtonsCustomer" className="container-fluid">


            <div id="createCustomerList">
                <Link to="../CreateCustomerList">
                    <button id="buttonSizeCreateList" className="btn waves-effect waves-light" >
                        <i id="iconCreateList" className="medium material-icons">luggage</i>
                        Pack your luggage
                    </button>
                </Link>
            </div>

            <div id="DisplayList">
                <Link to="../DisplayList">
                    <button id="buttonSizeDisplayList" className="btn waves-effect waves-light ">

                     <div id="displayListIconAndName">
                        <i id="iconDisplayList" className="medium material-icons">luggage</i>
                         My Travel List</div>
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
    )//end return

}

export default CustomerCreateOrDisplayList;