import React from "react";
import './App.css';
//import necessary to change pages, I will use more than one page so instead display everything what is in app.js
//i can switch between pages, and they are connected to the "allPages.js".
import {Routes, Route} from "react-router-dom";
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
    CustomerPickListsToDisplay,
    CustomerAddItemUsingCamera

} from "./allPages";
import NavbarHome from "./components/NavbarHome";


/*
SmartLuggage Application
Marek Augustyn
*/


function App() {


    return (
        <div>

            <NavbarHome/>
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
                {/* Administrator Page, Display All Contacts, And Manage Database*/}
                <Route path='/LoginAdminPage' element={LoginAdminPage()}/>
                <Route path='/pay' element={PayPage()}/>

                <Route path='/*' element={PageNotExist()}/>
                <Route path='/help' element={HelpPage()}/>
                <Route path='/destination' element={DestinationPage()}/>
                <Route path='/createOrDisplayList' element={CustomerCreateOrDisplay()}/>
                <Route path='/pickListToDisplay' element={CustomerPickListsToDisplay()}/>
                <Route path='/packByUsingCamera' element={CustomerAddItemUsingCamera()}/>
            </Routes>
        </div>

    );
}

export default App;
