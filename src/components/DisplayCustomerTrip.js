import React, {useState, useEffect, useContext} from 'react';
// import {UserContext} from "../UserContext";
/* useState is used to set a value  */
import './DisplayCustomerTripCSS.css';
import registerCustomer from "./RegisterCustomer";
/*
SmartLuggage Application
Marek Augustyn
12 May 2022
Final Project Software Developer
*/
//It is new display contacts and delete on the bottom with  option to it delete
export const DisplayCustomerTrip = ({item}) => {

    const [id, setId] = useState('');
    // const [customerId, setCustomerId] = useState('');
    //data from useEffect Customer data
    const [customer, setCustomer] = useState(null);
    //const {value,setValue} = useContext(UserContext);

    const deleteCustomerTrip = async () => {
        const resultTrip = await fetch("https://backendsmartluggage.herokuapp.com/api/v1/trip/" + id, {
        // const resultTrip = await fetch("api/v1/trip/" + id, {
            method: "DELETE",
            //body: JSON.stringify({id}),
            //headers: {
            //     "Content-Type": "application/json",
            // }
        })
        const body = await resultTrip.json();
        item(body);
    }


    useEffect(() => {
        //do something when loading
        console.log("yoyw yow do something from useeffect")
        if (!customer) {
            // fetch("https://backendsmartluggage.herokuapp.com/api/v1/customer").then((response) => response.json()).then((dataCustomer) => {
            //     fetch("displayUsers").then((response) => response.json()).then((dataCustomer) => {
            fetch("https://backendsmartluggage.herokuapp.com/displayUsers").then((response) => response.json()).then((dataCustomer) => {
                console.log("List of items in the customer", dataCustomer);
                setCustomer(dataCustomer);
            });
        }
    }, [customer]);


    return (
        <div>
            {/*// this part display card with detail inside*/}
            <div id="formDisplayList" className="row">
                <form className="col s12" onSubmit={() => deleteCustomerTrip()}>

                    <div className="row">
                        <div className="col s8 m6 l6">
                            <div className="card blue-grey darken-1">
                                <div className="card-content white-text">
                                <span id="spanInDisplayCustomerTrip" className="card-title small">
                                    {/*<h2> Message : {value}  </h2>*/}
                                    <p>Details Trip ID : {item.id}</p>
                                    <p>Trip name : {item.tripName}</p>
                                     <p>Destination : {item.destination}</p>
                                    {/*<p>Destination : {item.destination}</p>*/}
                                    {/*<p>Customer Id:  {item.customerId}  </p>*/}
                                    <p>Departure Day: {item.departureDay} </p>
                                    <p>Return Day: {item.returnDay} </p>
                                    <p>Description: {item.description}</p>
                                    {/*<p>Destination: {item.destinationId}</p>*/}
                                    <p>List: {item.listId}</p>
                                    <p>Activity : {item.activity} </p>
                                    {/*<p>Sex: {item.sex==="male"?"female":""}{item.sex!=="male"?"male":""}</p>*/}
                                    <p>Ski : {item.ski ? "Yes" : "No"} </p>
                                    <p>Trekking : {item.trekking ? "Yes" : "No"} </p>
                                    <p>Beach : {item.beachListStatus ? "Yes" : "No"} </p>
                                    <p>Admin Privileges: {item.adminPrivileges ? "Yes" : "No"} </p>
                                    <p>Pay Status: {item.payStatus ? "Yes" : "No"}</p>
                                    <p>Bag option:</p>
                                    <p>Large luggage: {item.largeLuggage ? "Yes" : "No"} </p>
                                    <p> Medium luggage: {item.mediumLuggage ? "Yes" : "No"} </p>
                                    <p> Small luggage: {item.smallLuggage ? "Yes" : "No"} </p>
                                    <p>Photo equipment:</p>
                                    <p>Camera: {item.camera ? "Yes" : "No"}</p>
                                    <p>Camcorder: {item.camcorder ? "Yes" : "No"}</p>
                                    <p>Smartphone: {item.smartphone ? "Yes" : "No"}</p>
                                     <p>Transport:</p>
                                     <p>Train: {item.train ? "Yes" : "No"}</p>
                                     <p>Plane: {item.plane ? "Yes" : "No"}</p>
                                     <p>Car: {item.car ? "Yes" : "No"}</p>
                                      <p>Ireland Status {item.ireland === 0 || item.ireland === " " ? "No" : "Yes"}</p>
                                    <p>Spain Status {item.spain ? "Yes" : "No"}</p>
                                    <p>Poland Status {item.poland ? "Yes" : "No"}</p>
                                </span>
                                </div>

                                <div className="card-action">
                                    {/*<p> If you want delete user Trip input Trip id and then press delete button </p>*/}
                                    {/*<a href="#">This is a link</a>*/}
                                    {/*<a href="#">This is a link</a>*/}
                                    {/*<button onSubmit={()=>deleteCustomer(item.id)} >Delete Student</button>*/}

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <input placeholder="Input Trip ID" type="text"
                                   onChange={(event => setId(event.target.value))} className="validate"/>
                            {/*<label htmlFor="What Id want you delete">Id</label>*/}
                        </div>
                    </div>

                    <div className="row">
                        <button className="waves-effect waves-light btn " type="submit" name="action">Delete Trip
                        </button>

                    </div>
                </form>
            </div>
            {/*<div>*/}
            {/*    /!*<p>It is a Customer detail  ID:</p>*!/*/}
            {/*It is checking if customer is bulll then*/}
            {/*    /!*                    display string loading page if there is data then map*!/*!/*/}
            {/*        {customer*/}
            {/*            ? customer.map((data) => {*/}
            {/*                return <input type="checkbox" checked={data.documentList} />;*/}
            {/*            })*/}
            {/*            : "..... loading page"}*/}
            {/*    );*/}
            {/*</div>*/}

        </div>
    );

}

export default DisplayCustomerTrip;


