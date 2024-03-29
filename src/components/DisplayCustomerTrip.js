import React, {useState, useEffect} from 'react';
import './DisplayCustomerTripCSS.css';

/*
SmartLuggage Application
Marek Augustyn
2023
*/
//It is new display contacts and delete on the bottom with  option to it delete
//item allows me to pass data from the ManageDestinationFunctionalComponent and display data on the screen
export const DisplayCustomerTrip = ({item}) => {

    const [id, setId] = useState('');
    const [tripId, setTripId] = useState('');
    //data from useEffect Customer data
    const [customer, setCustomer] = useState(null);
    //const {value,setValue} = useContext(UserContext);

    //this fetch data from the old database
    // const deleteCustomerTrip = async () => {
    //     const resultTrip = await fetch("https://smartluggagebackend.herokuapp.com/api/v1/trip/" + id, {
    //         method: "DELETE",
    //     })
    //     const body = await resultTrip.json();
    //     item(body);
    // }


    //Fetch data from the new database integratded with manage-customer web app with JWT

    useEffect(() => {
        if (!customer) {
            fetch("https://smartluggagebackendjwt-c266cf5456e9.herokuapp.com/displayUsers").then((response) => response.json()).then((dataCustomer) => {
                // console.log("List of items in the customer", dataCustomer);
                setCustomer(dataCustomer);
            });
        }
    }, [customer]);

    // const deleteCustomerTrip = async () => {
    //     const resultTrip = await fetch("https://smartluggagebackendjwt-c266cf5456e9.herokuapp.com/api/v1/trip/" + id, {
    //         method: "DELETE",
    //     })
    //     const body = await resultTrip.json();
    //     item(body);
    // }


    //for not authenticated link
    // const deleteCustomerTrip2 = async (e) => {
    //     // e.preventDefault();
    //
    //     const result3 = await fetch("https://smartluggagebackendjwt-c266cf5456e9.herokuapp.com/api/v1/trip/" + id, {
    //         method: "DELETE",
    //     })
    //         .then((res) => res.json())
    //         .then((data) => console.log(data))
    //         .catch((error) => console.log(error));
    //
    //
    //     const body3 = await result3.json().catch(err => console.log(err.res));
    //     item(body3);
    // }


    //auth link, user mus be logged first to see data
    const deleteCustomerTrip2 = async (e) => {
        // e.preventDefault();

        const result3 = await fetch("https://smartluggagebackendjwt-c266cf5456e9.herokuapp.com/api/v1/auth/trip/" + id, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((error) => console.log(error));


        const body3 = await result3.json().catch(err => console.log(err.res));
        item(body3);
    }


    // useEffect(() => {
    //     if (!customer) {
    //         fetch("https://smartluggagebackend.herokuapp.com/displayUsers").then((response) => response.json()).then((dataCustomer) => {
    //             // console.log("List of items in the customer", dataCustomer);
    //             setCustomer(dataCustomer);
    //         });
    //     }
    // }, [customer]);





    return (
        <div>
            {/*// this part display card with detail inside*/}
            <div id="formDisplayList" className="row">
                <form className="col s12 m12 l12 offset-l1"  onSubmit={() => deleteCustomerTrip2()}>

                    <div className="row">
                        <div className="col s10 offset-s1 m8 l6">
                            <div className="card blue-grey darken-1">
                                <div className="card-content white-text">
                                <span id="spanInDisplayCustomerTrip" className="card-title small">
                                    {/*<h2> Message : {value}  </h2>*/}

                                    <p> User with trip no {item.id} called " {item.tripName} " is going to {item.destination}.</p>
                                    <p>Details Trip ID : {item.id}</p>
                                    <p>Trip name : {item.tripName}</p>
                                     <p>Destination : {item.destination}</p>
                                    <p>Departure Day: {item.departureDay} </p>
                                    <p>Return Day: {item.returnDay} </p>
                                    <p>Description: {item.description}</p>
                                    <p>List: {item.listId}</p>
                                    <p>Activities :  </p>
                                    <p>{item.ski ? "SKI" : " "} </p>
                                    <p>{item.trekking ? "Trekking" : " "} </p>
                                    <p>{item.beachListStatus ? "Beach" : " "} </p>
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

                            </div>
                        </div>
                    </div>

                    {/*Input number of the trip to delete*/}
                    <div className="row">
                        <div className="input-field col s10 m6 l6 offset-s1">
                            <input placeholder="Input Trip ID" type="text"
                                   onChange={(event => setId(event.target.value))} className="validate"/>
                            <label htmlFor="What Id want you delete">Id: {id}</label>
                        </div>
                    </div>

                    <div className="row" id="buttonDeleteTripInDisplayCustomerTrip">
                        <button className="waves-effect waves-light btn " type="submit" name="action">Delete Trip
                        </button>

                    </div>
                </form>
            </div>

        </div>
    );

}

export default DisplayCustomerTrip;


