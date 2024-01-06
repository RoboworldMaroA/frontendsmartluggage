import React, {useState} from "react";
/* Class Contact uses for display and read a data from database, data is imported from other classes */
//props are data inside the divs
import './FormCreateList.css';
import 'materialize-css';
import DisplayCustomerTrip from "./DisplayCustomerTrip";
import {useEffect} from "react";
import './DisplayListComponent.css';
/*
SmartLuggage Application
Marek Augustyn

*/
export const ManageDestinationAdmin = () =>{

    const [tripData, setTripData] = useState(null);
    const [displayTripDetail, setDisplayTripDetail] = useState(false);
    // const [loggedCustomerId, setLoggedCustomerId] = useState(1);

    //Get data from not authenticated link
    // useEffect(() => {
    //     //do something when loading
    //     console.log("signal to do something using useEffect")
    //     fetch("https://smartluggagebackendjwt-c266cf5456e9.herokuapp.com/api/v1/trip").then((response) => response.json()).then((TripData) => {
    //     // fetch("api/v1/trip/").then((response) => response.json()).then((TripData) => {
    //         console.log("List of items in the trip", TripData);
    //         setTripData(TripData);
    //     });
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, ["hI trip"]);

    //Get data from authenticated link
    useEffect(() => {
        //do something when loading
        console.log("signal to do something using useEffect")
        fetch("https://smartluggagebackendjwt-c266cf5456e9.herokuapp.com/api/v1/auth/trip").then((response) => response.json()).then((TripData) => {
            // fetch("api/v1/trip/").then((response) => response.json()).then((TripData) => {
            console.log("List of items in the trip", TripData);
            setTripData(TripData);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, ["hI trip"]);

    // useEffect(() => {
    //     //do something when loading
    //     console.log("signal to do something using useEffect")
    //     fetch("http://localhost:8080/api/v1/trip").then((response) => response.json()).then((TripData) => {
    //         // fetch("api/v1/trip/").then((response) => response.json()).then((TripData) => {
    //         console.log("List of items in the trip", TripData);
    //         setTripData(TripData);
    //     });
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, ["hI trip"]);


    //this method display or not the Trip Detail
    function changeStatus() {
        //here will be logic what lit to display, depend on what customer choose in the form FormCrteteList
        // console.log("State trip List", displayTripDetail);
        setDisplayTripDetail(!displayTripDetail);

    }

        return (
            <div >
                <button className="waves-effect waves-light btn #795548 brown "  onClick={()=> changeStatus()} >  Display Trip Detail </button>

                 <div>
                     {displayTripDetail
                         ? tripData.map((TripData) => {
                                 return (<DisplayCustomerTrip key={TripData.id} item={TripData}/>);
                         }):"... press to see more detail about a trips"}
                     {/*end*/}
                 </div>

            </div>);
}/* end class Contact*/
export default ManageDestinationAdmin;
