import React, {Component} from "react";
import './App.css';
//import necessary to change pages, I will use more than one page so instead display everything what is in app.js
//i can switch between pages, and they are connected to the "allPages.js".
import {Routes, Route, Link} from "react-router-dom";
import {
    Home,
    CreateCustomerList,
    PageNotExist,
    DisplayTravelerList,
    RegisterPage,
    LoginPage,
    LoginAdminPage,
    PayPage,
    HelpPage,
    DestinationPage,
    CustomerCreateOrDisplay,
    CustomerPickListsToDisplay

} from "./allPages";
import CreateList from "./components/CreateList";
import Login from "./components/Login";
// import {UserContext} from "./UserContext";
/*
SmartLuggage Application
Marek Augustyn
12 May 2022
Final Project Software Developer
*/


function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={Home()}/>
                {/*Register*/}
                <Route path='/Register' element={RegisterPage()}/>
                {/*<UserContext.Provider value="Hello from context should diplay on thus three pages">*/}
                {/*It is routed to the allPages.js and there is a function loginPage use to Log in*/}
                <Route path='/Login' element={LoginPage()}/>
                {/*CreateCustomerList*/}
                <Route path='/CreateCustomerList' element={CreateCustomerList()}/>
                {/*DisplayList*/}
                <Route path='/displayList' element={DisplayTravelerList()}/>
                {/*</UserContext.Provider>*/}
                {/* Administrator Page, Display All Contacts, And Manage Database*/}
                <Route path='/LoginAdminPage' element={LoginAdminPage()}/>
                <Route path='/pay' element={PayPage()}/>
                {/*<Route path ='/loginAdmin' element={<LoginAdmin/>}/>*/}
                <Route path='/*' element={PageNotExist()}/>
                <Route path='/help' element={HelpPage()}/>
                <Route path='/destination' element={DestinationPage()}/>
                <Route path='/createOrDisplayList' element={CustomerCreateOrDisplay()}/>
                <Route path='/pickListToDisplay' element={CustomerPickListsToDisplay()}/>
            </Routes>
        </div>

    );
}

export default App;
