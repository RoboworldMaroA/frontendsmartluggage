import React, {Component, useState} from "react";
import ToDoList from "./ToDoList"
/* Class Contact uses for display and read a data from database, data is imported from other classes */
//props are data inside the divs
import './FormCreateList.css';
import 'materialize-css';
import DisplayCustomerTrip from "./DisplayCustomerTrip";
import {useEffect} from "react";
import DisplayStateOfCustomerList from "./DisplayStateOfCustomerList";
// import {UserContext} from "../UserContext";
import './DisplayListComponent.css';
import {useNavigate} from "react-router-dom";
/*
SmartLuggage Application
Marek Augustyn
Display list of items created  base on the user preferences
*/
export const DisplayListFunctionalComponent = (props) => {

    const navigate = useNavigate();


    const [tripData, setTripData] = useState([]);
    // const [response, setResponse] = useState([]);
    let [displayTripDetail, setDisplayTripDetail] = useState(false);
    const [displayTripDetail2, setDisplayTripDetail2] = useState(false);
    const [displayTripDetail3, setDisplayTripDetail3] = useState(false);
    const [displayTripDetail4, setDisplayTripDetail4] = useState(false);
    const [loggedCustomerId] = useState(1);
    const [tripId, setTripId] = useState("");

    const STATUS = document.getElementById('status');
    const [tripWasLoaded, setTripWasLoaded] = useState(false);

    //Fetch data from Heroku Old Backend before JWT
    // useEffect(() => {
    //     //do something when loading
    //     // console.log("signal to do something using useEffect")
    //     fetch("https://smartluggagebackend.herokuapp.com/api/v1/trip").then((response) => response.json()).then((TripData) => {
    //         // fetch("api/v1/trip/").then((response) => response.json()).then((TripData) => {
    //         // console.log("List of items in the trip", TripData);
    //         setTripData(TripData);
    //         // calculateLastTripId();
    //     });
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, ["hI trip"]);

    /**
     * Loads the MobileNet model and warms it up so ready for use.
     **/
    // async function loadMobileNetFeatureModel() {
    //     const URL = 'https://tfhub.dev/google/tfjs-model/imagenet/mobilenet_v3_small_100_224/feature_vector/5/default/1';
    //     // mobilenet = await tf.loadGraphModel(URL, {fromTFHub: true});
    //     STATUS.innerText = 'MobileNet v3 loaded successfully!';
    //
    //     // Warm up the model by passing zeros through it once.
    //     tf.tidy(function () {
    //         let answer = mobilenet.predict(tf.zeros([1, MOBILE_NET_INPUT_HEIGHT, MOBILE_NET_INPUT_WIDTH, 3]));
    //         console.log(answer.shape);
    //     });
    // }

    // loadMobileNetFeatureModel();

    //Fetch data from Heroku New Backend with JWT
    useEffect(() => {
        //do something when loading
        // console.log("signal to do something using useEffect")
        fetch("https://smartluggagebackendjwt-c266cf5456e9.herokuapp.com/api/v1/trip").then(
            (response) => {
                // console.log(response.json())
                console.log("display response after post");
                console.log(response);
                if (!response.ok) {
                    console.log("Waiting for data from the backend");
                    // alert("Wait a second and refresh the page");
                    STATUS.innerText = 'Something went wrong refresh website';
                    setTripWasLoaded(false);
                    // setTripData(TripData);
                    navigate("/displayList");
                } else {
                    console.log("All good when tried display")
                    STATUS.innerText = 'Trip data is loaded.';
                    setTripWasLoaded(true);
                    response.json().then((TripData)=> {
                        setTripData(TripData);
                    });
                    // navigate("/createOrDisplayList");
                }
            }

        )
            // .
            // then((TripData) => {
            // fetch("api/v1/trip/").then((response) => response.json()).then((TripData) => {
            // console.log("List of items in the trip", TripData);
            // setTripData(TripData);
            // calculateLastTripId();
        // });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }
    , ["hI trip"]);


    //this method change status displayTripDetail for Trip ID=1
    function changeStatus() {
        //here will be logic what lit to display, depend on what customer choose in the form FormCrteteList
        // console.log("State trip List", displayTripDetail);
        setDisplayTripDetail(!displayTripDetail);
    }

    //this method change status displayTripDetail for Trip ID=2
    function changeStatus2() {
        //here will be logic what lit to display, depend on what customer choose in the form FormCrteteList
        // console.log("State trip List", displayTripDetail2);
        setDisplayTripDetail2(!displayTripDetail2);

    }

    //this method change status displayTripDetail for Trip ID=3
    function changeStatus3() {
        //here will be logic what lit to display, depend on what customer choose in the form FormCrteteList
        // console.log("State trip List", displayTripDetail3);
        setDisplayTripDetail3(!displayTripDetail3);

    }

    //this method change status displayTripDetail for Trip ID=4
    function changeStatus4() {
        //here will be logic what lit to display, depend on what customer choose in the form FormCrteteList
        // console.log("State trip List", displayTripDetail4);
        setDisplayTripDetail4(!displayTripDetail4);

    }


    return (
        // First DIV
        <div id="allElementInDisplayListFunctionalComponent">

            <div id="positionDisplayStateOfCustomerList">

                {tripWasLoaded ? <DisplayStateOfCustomerList/>:    <p id="status"> Awaiting for load data from the backend. </p>

                }
            </div>

            <div id="fourButtonsToDisplayListDetail" className="row">


                {/*#################FIRST BUTTON#######################*/}
                <div className="col s12 m6 l3">
                    <button className="waves-effect waves-light btn #795548 brown "
                            onClick={() => changeStatus()}> Details for trip 1
                    </button>

                </div>
                <div>
                    {displayTripDetail
                        ? tripData.filter((TripData) => TripData.id === loggedCustomerId).map((TripData) => {
                            return (
                                <>
                                    <DisplayCustomerTrip key={TripData.id} item={TripData}/>
                                </>
                            );
                        }) : ""}
                    {/*end*/}
                </div>


                {/*#################  2-ND BUTTON   #######################*/}
                <div className="col s12 m6 l3">
                    <button className="waves-effect waves-light btn #795548 brown "
                            onClick={() => changeStatus2()}> Details Trip 2
                    </button>
                </div>

                <div>
                    {displayTripDetail2
                        ? tripData.filter((TripData) => TripData.id === 2).map((TripData) => {
                            return (
                                <>
                                    <DisplayCustomerTrip key={TripData.id} item={TripData}/>
                                </>
                            );
                        }) : ""}
                    {/*end*/}
                </div>


                {/*################# 3-th BUTTON #######################*/}
                <div className="col s12 m6 l3">
                    <button className="waves-effect waves-light btn #795548 brown "
                            onClick={() => changeStatus3()}> Details Trip 3
                    </button>
                </div>

                <div>
                    {displayTripDetail3
                        ? tripData.filter((TripData) => TripData.id === 3).map((TripData) => {
                            return (
                                <>
                                    <DisplayCustomerTrip key={TripData.id} item={TripData}/>
                                </>
                            );
                        }) : ""}
                    {/*end*/}
                </div>


                {/*################# BUTTON - Pick Any Lists #######################*/}
                <div className="col s12 m6 l3">

                    <button className="waves-effect waves-light btn #795548 brown "
                            onClick={() => changeStatus4()}> Display Trip Detail {tripId}
                    </button>

                {/*When you press button 4 then will be displaying detail of the list ID*/}
                <div className="row">
                    <div className="input-field col s10 m6 l6 offset-s1">
                        <input placeholder="Input Trip ID" type="text"
                               onChange={(event => setTripId(event.target.value))} className="validate"/>
                        {/*<label htmlFor="What ID want you display">User inserted Trip ID: {tripId}</label>*/}
                    </div>
                </div>

                <div>
                    {displayTripDetail4
                        ?


                      tripData.filter(

                            (TripData) =>
                                TripData.id === parseInt(tripId)).map((TripData) => {
                            return (
                                <>
                                    <DisplayCustomerTrip key={TripData.id} item={TripData}/>
                                </>
                            );
                        })


                        : "Trip Not Exist"}
                </div>
                </div>

            </div>


        </div>);
}/* end class Contact*/
export default DisplayListFunctionalComponent;
