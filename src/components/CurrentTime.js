
import React, {useEffect, useState} from 'react';
import '../allPages.css'
import axios from "axios";







const CurrentTime = () => {



    //WAKEUP BACKEND ON HEROKU
    const [customer, setCustomer] = useState(null);
    const [customer2, setCustomer2] = useState(null);
    const [trip, setTrip] = useState(null);

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
    //     if (!customer) {
    //         fetch("https://smartluggagebackend.herokuapp.com/displayUsers").then((response) => response.json()).then((dataCustomer2) => {
    //             // console.log("List of items in the customer", dataCustomer);
    //             setCustomer2(dataCustomer2);
    //         });
    //     }
    // }, [customer2]);



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





    let today = new Date();
    const todayDate = today.toLocaleDateString();
    const currentDay = today.getDay();
    let day = "";

    switch (currentDay){
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        default:
            console.log("no exist");



    }

return (

     <div className="container">
         <div className="row">
       {/*<h1 class="Date2"> jjjjj</h1>*/}
        <p  id="Date"> Today is {day} {todayDate}. It time to pack your luggage ;-) </p>
         </div>
 </div>


)
}

export default CurrentTime;