import React, {useState, useEffect} from 'react';
import ToDoListComponentsTrip from "./ToDoListComponentsTrip";
import axios from 'axios';
/* useState is used to set a value  */
import './DisplayListComponent.css';
import {promise} from "bcrypt/promises";

//It is new display contacts and , there is also implemented delete button on the bottom
//Do we  need to fetch data from the customer or from the user ?
// At the moment I fetch data from the customer in this component, but I think this is wrong,
// I should fetch data from the user because I added to the database when I was registering
/*
SmartLuggage Application
Marek Augustyn
12 May 2022
Final Project Software Developer
*/


export const DisplayStateOfCustomerList = (props) => {

    //data from useEffect Customer data
    const [customer, setCustomer] = useState(null);
    const [trip, setTrip] = useState(null);
    const [showTripButton, setShowTripButton] = useState([{isSelected: false}]);
    const [tripId, setTripId] = useState("");

    //New Deploy version
    // useEffect(() => {
    //     //do something when loading
    //     // console.log("useEffect")
    //     if (!customer) {
    //         fetch("https://smartluggagebackend.herokuapp.com/api/v1/customer").then((response) => response.json()).then((dataCustomer) => {
    //             // This is format before deploy
    //             // fetch("api/v1/customer").then((response) => response.json()).then((dataCustomer) => {
    //             // console.log("List of items in the customer", dataCustomer);
    //             setCustomer(dataCustomer);
    //         });
    //     }
    // }, [customer]);

    //JWT Backend to fetch customer
    useEffect(() => {
        //do something when loading
        // console.log("useEffect")
        if (!customer) {
            fetch("https://smartluggagebackendjwt-c266cf5456e9.herokuapp.com/api/v1/customer").then((response) => response.json()).then((dataCustomer) => {
                // This is format before deploy
                // fetch("api/v1/customer").then((response) => response.json()).then((dataCustomer) => {
                // console.log("List of items in the customer", dataCustomer);
                setCustomer(dataCustomer);
            });
        }
    }, [customer]);


    //Old Deploy Version
    // useEffect(() => {
    //     //do something when loading
    //     console.log("useEffect")
    //     if (!customer) {
    //         fetch("https://backendsmartluggage.herokuapp.com/displayUsers").then((response) => response.json()).then((dataCustomer) => {
    //             // This is format before deploy
    //             // fetch("api/v1/customer").then((response) => response.json()).then((dataCustomer) => {
    //             console.log("List of items in the customer", dataCustomer);
    //             setCustomer(dataCustomer);
    //         });
    //     }
    // }, ['customer']);


    //Development Version
    // useEffect(() => {
    //     //do something when loading
    //     console.log("useEffect")
    //     if (!customer) {
    //         fetch("displayUsers").then((response) => response.json()).then((dataCustomer) => {
    //             // This is format before deploy
    //             // fetch("api/v1/customer").then((response) => response.json()).then((dataCustomer) => {
    //             console.log("List of items in the customer", dataCustomer);
    //             setCustomer(dataCustomer);
    //         });
    //     }
    // }, ['customer']);


    //Keep hidden
    // useEffect(() => {
    //     //do something when loading
    //     console.log("yoyw yow do something from useeffect")
    //         fetch("api/v1/customer").then((response) => response.json()).then((dataCustomer) => {
    //             console.log("List of items in the customer", dataCustomer);
    //             setCustomer(dataCustomer);
    //         });
    // }, ["hI"]);


    //Deploy version from old database
    // useEffect(() => {
    //     //do something when loading
    //     // console.log("test do something from use effect")
    //     fetch("https://smartluggagebackend.herokuapp.com/api/v1/trip").then((response) => response.json()).then((dataTrip) => {
    //         // console.log("List of items in the trip", dataTrip);
    //         setTrip(dataTrip);
    //     });
    // }, ["trip"]);


   //new fetch data using manage-customer jwd web app
   //  useEffect(() => {
   //      //do something when loading
   //      // console.log("test do something from use effect")
   //      fetch("https://smartluggagebackendjwt-c266cf5456e9.herokuapp.com/api/v1/trip").then((response) => response.json()).then((dataTrip) => {
   //          // console.log("List of items in the trip", dataTrip);
   //          setTrip(dataTrip);
   //      });
   //  }, ["trip"]);



    let backEndUrl = "https://smartluggagebackendjwt-c266cf5456e9.herokuapp.com/api/v1/trip";

    //new fetch data using axios instead of fetch
    useEffect(() => {
        //do something when loading
        // console.log("test do something from use effect")
        axios.get(backEndUrl).then((dataTrip) => {
            console.log("List of items in the trip AXIOS", dataTrip);
            setTrip(dataTrip.data);
        });
    }, ["trip"]);



    // useEffect(() => {
    //     //do something when loading
    //     console.log("test response from useeffect")
    //     fetch("api/v1/trip/").then((response) => response.json()).then((dataTrip) => {
    //         console.log("List of items in the trip", dataTrip);
    //         setTrip(dataTrip);
    //     });
    // }, ["trip"]);



    function handlePickList(index) {
        const newItems = [...showTripButton];
        newItems[index].isSelected = !newItems[index].isSelected;
        setShowTripButton(newItems);
        console.log(newItems);
    }


    const [displayLuggage, setDisplayLuggage] = useState(null);

    //this method display or not the Trip Detail
    function changeStatusPackedLuggage() {
        //here will be logic what lit to display, depend on what customer choose in the form FormCrteteList
        // console.log("State trip List", displayLuggage);
        setDisplayLuggage(!displayLuggage);
    }


    const [displayLuggage2, setDisplayLuggage2] = useState(null);
    //this method display or not the Trip Detail
    function changeStatusPackedLuggage2() {
        //here will be logic what lit to display, depend on what customer choose in the form FormCrteteList
        // console.log("State trip List", displayLuggage2);
        setDisplayLuggage2(!displayLuggage2);
    }

    const [displayLuggage3, setDisplayLuggage3] = useState(null);
    //this method display or not the Trip Detail
    function changeStatusPackedLuggage3() {
        //here will be logic what lit to display, depend on what customer choose in the form FormCrteteList
        // console.log("State trip List", displayLuggage3);
        setDisplayLuggage3(!displayLuggage3);
    }

    const [displayLuggageInputtedByUser, setDisplayLuggageInputtedByUser] = useState(null);
    //this method display or not the Trip Detail
    function changeStatusPackedLuggageAnyLuggage() {
        //here will be logic what lit to display, depend on what customer choose in the form FormCrteteList
        // console.log("State trip List", displayLuggage4);
        setDisplayLuggageInputtedByUser(!displayLuggageInputtedByUser);
    }


    return (
        <div id="displayStateOfCustomerListMainDiv">
            {/*<div>*/}
            {/*    {customer*/}
            {/*        ? customer.map((data) => {*/}
            {/*            return (<ToDoListComponents key={data.id} data2={data}/>*/}
            {/*                    );*/}
            {/*        }):"..... loading page"}*/}
            {/*</div>*/}


            {/*Tutaj powinienem zaimplementowac dane dla pojedynczego id urzytkownika a potem rozbudowac tak zeby byla lista*/}


            {/*This implementation display all list*/}
            {/*<div >*/}
            {/*         {trip*/}
            {/*             ? trip.map((Trip, UserData) => {*/}
            {/*                 return (<ToDoListComponentsTrip key={Trip.id} dataTrip2={Trip} dataCustomer={UserData}/>*/}
            {/*                 );*/}
            {/*             }):"..... loading page"}*/}
            {/*         /!*end*!/*/}
            {/* </div>*/}


            {/*This implementation display list first and then depend from User Id(list ID) display list*/}


            {/*<div className="row">*/}

            {/*    {trip.map((travel,nextNumber)=>{*/}
            {/*        return(*/}
            {/*            <>*/}

            {/*            <h1> HI {nextNumber}</h1>*/}
            {/*            </>*/}
            {/*        );*/}
            {/*    })}*/}
            {/*</div>*/}


            <div className="row">
                <div className="col s12 m6 l3 ">
                    <div onClick={() => changeStatusPackedLuggage()} className="card blue-grey darken-1">
                        <div className="card-content white-text">
                                <span className="card-title">
                                    {/*<p>Display List</p>*/}
                                    Luggage 1


                                    {/*            <p id="mm">*/}
                                    {/*/!*Hi {props.dataCustomer.name}*!/*/}
                                    {/*                {trip[0].ireland === "1" ? "Ireland" : ""}*/}
                                    {/*                {trip.spain === true ? "Spain" : " "}*/}
                                    {/*                {trip.poland === true ? "Poland" : " "}*/}
                                    {/*                /!*{toDoListTrip.name}<br/>*!/*/}
                                    {/*                /!*{toDoListTrip.destination}<br/>*!/*/}
                                    {/*                /!*{toDoListTrip.description}<br/>*!/*/}
                                    {/*                : {trip.departureDay} to {trip.returnDay}</p>*/}

                                </span>

                        </div>

                        {/*<div className="card-action">*/}
                        {/*    /!*<p> If you want delete user Trip input Trip id and then press delete button </p>*!/*/}
                        {/*    /!*<a href="#">This is a link</a>*!/*/}
                        {/*    /!*<a href="#">This is a link</a>*!/*/}
                        {/*    /!*<button className="waves-effect waves-light btn #795548 brown "  onClick={()=> changeStatusPackedLuggage()} >  Display Luggage 1 </button>*!/*/}

                    </div>
                </div>
                {/*</div>*/}


                {/*<button className="waves-effect waves-light btn #795548 brown "  onClick={()=> changeStatusPackedLuggage()} >  Display Luggage 1 </button>*/}

                <div>
                    {displayLuggage
                        ? trip.filter((Trip) => Trip.id === 1).map((Trip, index) => {


                            return (<>

                                    {showTripButton.isSelected ?

                                        <button
                                            onClick={() => handlePickList(index)}>{Trip.id}
                                        </button> :


                                        <div>
                                            <ToDoListComponentsTrip key={Trip.id} dataTrip2={Trip}/>
                                        </div>}


                                </>
                            );
                        }) : ""}
                    {/*end*/}
                </div>

                {/*</div>*/}


                {/*BUtton 2*/}

                <div className="col s12 m6 l3">
                    {/*<div className="col s8 m2">*/}
                    <div onClick={() => changeStatusPackedLuggage2()} className="card blue-grey darken-1">
                        <div className="card-content white-text">
                                <span className="card-title">
                                    {/*<p>Display List</p>*/}

                                    Luggage: 2


                                    <p id="mm">
                        {/*Hi {props.dataCustomer.name}*/}
                                        {/*                {trip[1].ireland === "1" ? "Ireland" : ""}*/}
                                        {/*                {trip[1].spain === true ? "Spain" : " "}*/}
                                        {/*                {trip[1].poland === true ? "Poland" : " "}*/}
                                        {/*{toDoListTrip.name}<br/>*/}
                                        {/*{toDoListTrip.destination}<br/>*/}
                                        {/*{toDoListTrip.description}<br/>*/}
                                        {/*: {trip[1].departureDay} to {trip[1].returnDay}*/}
                                    </p>

                                </span>

                        </div>

                        {/*<div className="card-action">*/}
                        {/*    /!*<p> If you want delete user Trip input Trip id and then press delete button </p>*!/*/}
                        {/*    /!*<a href="#">This is a link</a>*!/*/}
                        {/*    /!*<a href="#">This is a link</a>*!/*/}
                        {/*    /!*<button className="waves-effect waves-light btn #795548 brown "  onClick={()=> changeStatusPackedLuggage()} >  Display Luggage 1 </button>*!/*/}

                        {/*</div>*/}
                    </div>
                </div>
                {/*</div>*/}


                {/*<button className="waves-effect waves-light btn #795548 brown "  onClick={()=> changeStatusPackedLuggage2()} >  Display Luggage 2 </button>*/}


                <div>
                    {displayLuggage2
                        ? trip.filter((Trip) => Trip.id === 2).map((Trip, index) => {


                            return (<>

                                    {showTripButton.isSelected ?

                                        <button
                                            onClick={() => handlePickList(index)}>{Trip.id}
                                        </button> :


                                        <div>
                                            <ToDoListComponentsTrip key={Trip.id} dataTrip2={Trip}/>
                                        </div>}


                                </>
                            );
                        }) : ""}
                    {/*end*/}
                </div>
                {/*</div>*/}


                {/*BUtton 3*/}

                <div className="col s12 m6 l3">
                    {/*    <div className="col s8 m2">*/}
                    <div onClick={() => changeStatusPackedLuggage3()} className="card blue-grey darken-1">
                        <div className="card-content white-text">
                                <span className="card-title">
                                    {/*<p>Display List</p>*/}
                                    {/*Luggage:  {trip[1].id}*/}
                                    Luggage: 3


                                    <p id="mm">
                        {/*Hi {props.dataCustomer.name}*/}
                                        {/*                {trip[1].ireland === "1" ? "Ireland" : ""}*/}
                                        {/*                {trip[1].spain === true ? "Spain" : " "}*/}
                                        {/*                {trip[1].poland === true ? "Poland" : " "}*/}
                                        {/*{toDoListTrip.name}<br/>*/}
                                        {/*{toDoListTrip.destination}<br/>*/}
                                        {/*{toDoListTrip.description}<br/>*/}
                                        {/*: {trip[1].departureDay} to {trip[1].returnDay}*/}
                                    </p>

                                </span>

                        </div>

                        {/*<div className="card-action">*/}
                        {/*    /!*<p> If you want delete user Trip input Trip id and then press delete button </p>*!/*/}
                        {/*    /!*<a href="#">This is a link</a>*!/*/}
                        {/*    /!*<a href="#">This is a link</a>*!/*/}
                        {/*    /!*<button className="waves-effect waves-light btn #795548 brown "  onClick={()=> changeStatusPackedLuggage()} >  Display Luggage 1 </button>*!/*/}

                        {/*</div>*/}
                    </div>
                </div>
                {/*</div>*/}


                {/*<button className="waves-effect waves-light btn #795548 brown "  onClick={()=> changeStatusPackedLuggage3()} >  Display Luggage 3 </button>*/}


                <div>
                    {displayLuggage3
                        ? trip.filter((Trip) => Trip.id === 3).map((Trip, index) => {


                            return (<>

                                    {showTripButton.isSelected ?

                                        // <button className="show-trip"
                                        <button
                                            onClick={() => handlePickList(index)}>{Trip.id}
                                        </button> :


                                        <div>
                                            <ToDoListComponentsTrip key={Trip.id} dataTrip2={Trip}/>
                                        </div>}
                                </>
                            );
                        }) : ""}
                    {/*end*/}
                </div>

                {/*</div>*/}


                {/*################################################*/}
                {/* Display user trip by inputting any number */}
                <div className="col s12 m6 l3">
                    <div onClick={() => changeStatusPackedLuggageAnyLuggage()} className="card blue-grey darken-1">
                        <div className="card-content white-text">
                                <span className="card-title">
                                    {/*Luggage:  {trip[1].id}*/}
                                    Display  Luggage {tripId} .
                                </span>

                            {/*When you press button Any Luggage then will be displaying list data from the Id user inputted*/}
                                <input placeholder="Input Trip ID to display" type="text"
                                       onChange={(event => setTripId(event.target.value))} className="validate"/>
                        </div>
                    </div>
                </div>

                <div>
                    {displayLuggageInputtedByUser
                        ? trip.filter((Trip) => Trip.id === parseInt(tripId)).map((Trip, index) => {
                            return (<>
                                    {showTripButton.isSelected ?
                                        <button className="show-trip"
                                                onClick={() => handlePickList(index)}>{Trip.id}
                                        </button> :

                                        <div>
                                            <ToDoListComponentsTrip key={Trip.id} dataTrip2={Trip}/>
                                        </div>}
                                </>
                            );
                        }) : ""}
                </div>



            </div>


        </div>
    );

}

export default DisplayStateOfCustomerList;


