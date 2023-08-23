import React from "react";
import './allPages.css';
import CreateList from "./components/CreateList";
import Register from "./components/Register";
import LoginAdmin from "./components/LoginAdmin";
import Pay from "./components/Pay";
import LoginNew2 from "./components/LoginNew2";
import DisplayListFunctionalComponent from "./components/DisplayListFuctionalComponent";
import Help from "./components/Help";
import ManageDestinationFunctionalComponent from "./components/ManageDestinationFuctionalComponent";
import backgroundHome from "./photo/backgroundHomePage3small.jpg";
import CustomerCreateOrDisplayList from "./components/CustomerCreateOrDisplayList";
import CustomerPickListToDisplay from "./components/CustomerPickListToDisplay";
import HomeButtons from "./components/HomeButtons";
import CurrentTime from "./components/CurrentTime";
import CameraObjectDetection from "./components/CameraObjectDetection";

/*
SmartLuggage Application
Marek Augustyn
07 July 2023
Final Project Software Developer Home Update

In this class are function that are responsible for display web pages.
They are imported in the App.js and connected to the URL that is called in web browser.
*/


/* Display Home page */
export function Home() {

    return (
        <div id="homePage" className="container-fluid"
             style={{
                 backgroundImage: `url(${backgroundHome})`, backgroundRepeat: 'repeat-no',
                 backgroundSize: "cover", opacity: 0.98,

             }}
             // style={{
             //     backgroundColor: `#9bc4ca`, backgroundRepeat: 'repeat-no',
             //     backgroundSize: "cover", opacity: 0.98,
             //
             // }}
        >


            <CurrentTime/>
            <HomeButtons/>
        </div>

    );
}


export function LoginPage() {
    return (<body>
    <div id="loginPage" className="container-fluid">
        <div id="loginContainer">

            <LoginNew2/>

        </div>
        <br/>
    </div>
    </body>
    );

}


export function RegisterPage() {
    return (<div id="registerPage" className="container-fluid"
    >

        <div className="container">
            <div className="row">
                <div className="col s2"></div>
                <div className="col s8">
                    <p id="PageTitleRegister"> CREATE ACCOUNT</p>
                    {/*<p> Please complete all mandatory fields.</p>*/}
                </div>
                <div className="col s2"></div>
            </div>
        </div>

        <div className="row">

            <Register/>

        </div>
    </div>);
}


export function CustomerCreateOrDisplay() {

    return (<div id="CustomerCreateOrDisplayListPage" className="container-fluid">
        <div className="row">
            <CustomerCreateOrDisplayList/>
        </div>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
    </div>);
}


export function CustomerPickListsToDisplay() {

    return (<div id="CustomerCreateOrDisplayListPage" className="container-fluid">

        <div className="row">
            <CustomerPickListToDisplay/>
        </div>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
    </div>);
}


export function CreateCustomerList() {

    return (
        <div id="createCustomerListPackYourLuggage" className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col s2"></div>
                    <div className="col s8">
                        <p id="PageTitle"> PACK YOUR LUGGAGE</p>
                    </div>
                    <div className="col s2"></div>
                </div>
            </div>
            <div className="row">
                <CreateList/>
            </div>
        </div>);
}


export function DisplayTravelerList() {

    return (<div id={"DisplayListFirstPage"}>
        <div className="container-fluid">

            <div className="container">
                <div className="row">
                    <div className="col s2"></div>
                    <div className="col s8">
                        <p id="PageTitle"> YOUR LUGGAGE</p>
                    </div>
                    <div className="col s2"></div>
                </div>
            </div>
            <div className="row">

                <DisplayListFunctionalComponent/>

            </div>
        </div>

    </div>);

}


// zamiast w app.js to w tej funkcji powinienem zaimplementowac prawdopodobnie, jaka zaleta nie jestem pewny
// ponoc wszystko mialo sie wyswietlac wtedy w jednym oknie, pororbic testy
export function PayPage() {
    return (<body>
        <div className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col s2"></div>
                    <div className="col s8">
                        <p id="PageTitle"> PAYMENT</p>
                    </div>
                    <div className="col s2"></div>
                </div>
            </div>

            <div className="row">
                <Pay/>
            </div>
        </div>
        </body>

    );

}


export function LoginAdminPage() {
    return (<body>
    <div className="container-fluid">

        <div className="container">
            <div className="row">
                <div className="col s2"></div>
                <div className="col s8">
                    <p id="PageTitle"> MANAGE USERS</p>
                </div>
                <div className="col s2"></div>
            </div>
        </div>

        <div className="row">
            <LoginAdmin/>
        </div>
    </div>
    </body>);

}


export function HelpPage() {
    return (<body>
        <div className="container-fluid">

            <div className="container">
                <div className="row">
                    <div className="col s2"></div>
                    <div className="col s8">
                        <p id="PageTitle"> FAQ</p>
                    </div>
                    <div className="col s2"></div>
                </div>
            </div>

            <div className="row">
                <Help/>
            </div>
        </div>
        </body>

    );

}


export function DestinationPage() {

    return (
        <body>
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col s2"></div>
                        <div className="col s8">
                            <p id="PageTitle"> MANAGE DESTINATION </p>
                        </div>
                        <div className="col s2"></div>
                    </div>
                </div>

                <div className="row">
                    <ManageDestinationFunctionalComponent/>
                </div>
            </div>
         </body>);

}

export function PageNotExist() {
    return (
        <div>
            <h1> This page not exist!!! </h1>
        </div>);

}



//this function allows to recognize object using camera
export function CustomerAddItemUsingCamera() {

    return (
        <div id="homePage" className="container-fluid"
            // style={{
            //     backgroundImage: `url(${backgroundHome})`, backgroundRepeat: 'repeat-no',
            //     backgroundSize: "cover", opacity: 0.98,
            //
            // }}
             style={{
                 backgroundColor: `#9bc4ca`, backgroundRepeat: 'repeat-no',
                 backgroundSize: "cover", opacity: 0.98,

             }}

        >

            {/*<div className="row">*/}
            {/*    <p id="importantLoginInfoHomePage"> IMPORTANT: LOGIN FIRST USING (MaroAdmin/pass) or Create Account</p>*/}
            {/*</div>*/}
            <CameraObjectDetection/>
        </div>

    );
}