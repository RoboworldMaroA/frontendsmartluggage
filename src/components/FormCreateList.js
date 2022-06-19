import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {mdiQuadcopter} from '@mdi/js';
import Icon from "@mdi/react";
import 'materialize-css';
/* useState is used to set a value  */
//this  function add customer detail during a registration
import './FormCreateList.css';
import {mdiAccount, mdiBagCarryOn} from "@mdi/js/commonjs/mdi";
// Unhidden this import and autocomplete for Google search
import PlacesAutocomplete from 'react-places-autocomplete';
/*
SmartLuggage Application
Marek Augustyn
12 May 2022
Final Project Software Developer
*/

const AddCreateListDetail = ({props: props}, {setCreateListInfo: setCreateListInfo}) => {

    const [adminPrivileges, setAdminPrivileges] = useState(false);
    const [autumn, setAutumn] = useState(false);
    const [beachListStatus, setBeachListStatus] = useState(false);
    const [bus, setBus] = useState(false);
    const [camcorder, setCamcorder] = useState(false);
    const [camera, setCamera] = useState(false);
    const [car, setCar] = useState(false);
    const [departureDay, setDepartureDay] = useState('2022-02-12');
    const [description, setDescription] = useState('');
    const [ireland, setIreland] = useState(" ");
    const [listId, setListId] = useState('');
    const [largeLuggage, setLargeLuggage] = useState(false);
    const [mediumLuggage, setMediumLuggage] = useState(false);
    const [smallLuggage, setSmallLuggage] = useState(false);
    const [drone, setDrone] = useState(false);//it is drone
    const [payStatus, setPayStatus] = useState(false);
    const [returnDay, setReturnDay] = useState('2022-03-01');
    const [tripName, setTripName] = useState('');
    const [tripPassword, setTripPassword] = useState('');
    const [weatherId, setWeatherId] = useState('');
    const [ski, setSki] = useState(false);
    const [trekking, setTrekking] = useState(false);
    const [documentListStatus, setDocumentListStatus] = useState(true);
    const [essentialListStatus, setEssentialListStatus] = useState(true);
    const [plane, setPlane] = useState(false);
    const [poland, setPoland] = useState(false);
    const [spain, setSpain] = useState(false);
    const [summer, setSummer] = useState(false);
    const [winter, setWinter] = useState(false);
    const [spring, setSpring] = useState(false);
    const [train, setTrain] = useState(false);
    const [id, setId] = useState('');
    const [destination, setDestination] = useState('Spain');
    // const [displayListState , setDisplayListState] = useState(true);
    // const [displayListState , setDisplayListState] = useState(true);

    const [sex, setSex] = useState('');
    const [laptop, setLaptop] = useState(false);
    const [tablet, setTablet] = useState(false);
    const [numbersOfDaysOnTrip, setNumbersOfDaysOnTrip] = useState(null);

    //Calculation days on the trip
    // const differenceInDays = () =>{
    // //     const days= Math.floor(
    // //     (departureDay.getTime()-returnDay.getTime()) / (1000 * 60 * 60 * 24)
    // //
    // //
    // // )
    // return setNumbersOfDaysOnTrip(daysValue);}

    const [address, setAddress] = useState("");

    //fetch for trip
    const validateCreateList = async (event) => {
        alert("Thank you for creating list")

        const result = await fetch("https://backendsmartluggage.herokuapp.com/api/v1/trip", {
            // const result = await fetch("api/v1/trip", {
            method: "POST",
            body: JSON.stringify({
                adminPrivileges, autumn,
                beachListStatus, bus,
                camcorder, camera,car,
                departureDay, description, destination, documentListStatus, drone,
                essentialListStatus,
                ireland,
                laptop, largeLuggage, listId,
                mediumLuggage,
                payStatus, plane, poland,
                returnDay,
                sex, ski, smallLuggage, // smartphone,spain,spring,summer,
                tablet, train, trekking, tripName, tripPassword, weatherId, winter,
                id
            }),
            headers: {
                "Content-Type": "application/json",
            }
        })

        const body = await result.json();

        event.preventDefault();
        setCreateListInfo(body);
        //getHowManyDaysTrips();
        //console.log(numbersOfDaysOnTrip);
        //updateDestinationStatus();
        // const changeHandler = (event) => {
        //     this.setState({ camcorder: event ? event.value : '' });
        // };
        ///displayList();
    }

    // function FormCreateList(props){
    //     return(
    //
    //         <div>
    //             <p>Test greet Parent pass data from FormCreateList to the DisplayList</p>
    //             <button onClick={()=>props.greetHandler('child')}>Greet Parent</button>
    //
    //         </div>
    //
    //         )
    //
    // }


    //checked element change state
    const [irelandState, setIrelandState] = useState(false);

    const toggleIreland = () => {

        setIrelandState(irelandState => !irelandState);
        if (!irelandState) {
            setIreland("1");
            console.log(ireland);//test only
        }
        if (irelandState) {
            setIreland("0");
            console.log(ireland);//test only
        }


    }


    //It is working checked element change state
    const [spainState, setSpainState] = useState(false);

    const toggleSpain = () => {
        setSpainState(spainState => !spainState);
        if (!spainState) {
            setSpain(true);
            console.log(spain);//test only
        }
        if (spainState) {
            setSpain(false);
            console.log(spain);//test only
        }
    }


    //It is working checked element change state
    const [polandState, setPolandState] = useState(false);

    const togglePoland = () => {
        setPolandState(polandState => !polandState);
        if (!polandState) {
            setPoland(true);
            console.log(poland);//test only
        }
        if (polandState) {
            setPoland(false);
            console.log(poland);//test only
        }
    }


    // checked element change state
    const [cameraState, setCameraState] = useState(false);

    const toggleCamera = () => {
        setCameraState(cameraState => !cameraState);
        if (!cameraState) {
            setCamera(true);
            console.log("Camera: "+ camera);//test only
        }
        if (cameraState) {
            setCamera(false);
            console.log("Camera: "+ camera);//test only
        }
    }


    //It is working checked element change state
    const [camcorderState, setCamcorderState] = useState(false);

    const toggleCamcorder = () => {
        setCamcorderState(camcorderState => !camcorderState);
        if (!camcorderState) {
            setCamcorder(true);
            console.log("Camcorder: "+camcorder);//test only
        }
        if (camcorderState) {
            setCamcorder(false);
            console.log("Camcorder: "+ camcorder);//test only
        }
    }


    //It is working checked element change state
    const [droneState, setDroneState] = useState(false);

    const toggleDrone = () => {
        setDroneState(droneState => !droneState);
        if (!droneState) {
            setDrone(true);
            console.log(drone);//test only
        }
        if (droneState) {
            setDrone(false);
            console.log(drone);//test only
        }
    }


    //Tablet checked element change state
    const [tabletState, setTabletState] = useState(false);

    const toggleTablet = () => {
        setTabletState(tabletState => !tabletState);
        if (!tabletState) {
            setTablet(true);
            console.log(tablet);//test only
        }
        if (tabletState) {
            setTablet(false);
            console.log(tablet);//test only
        }
    }

    //Laptop checked element change state
    const [laptopState, setLaptopState] = useState(false);

    const toggleLaptop = () => {
        setLaptopState(laptopState => !laptopState);
        if (!laptopState) {
            setLaptop(true);
            console.log(laptop);//test only
        }
        if (laptopState) {
            setLaptop(false);
            console.log(laptop);//test only
        }
    }


    //It is working checked element change state
    const [largeLuggageState, setLargeLuggageState] = useState(false);

    const toggleLargeLuggage = () => {
        setLargeLuggageState(largeLuggageState => !largeLuggageState);
        if (!largeLuggageState) {
            setLargeLuggage(true);
            console.log(largeLuggage);//test only
        }
        if (largeLuggageState) {
            setLargeLuggage(false);
            console.log(largeLuggage);//test only
        }
    }


    //It is working checked element change state
    const [mediumLuggageState, setMediumLuggageState] = useState(false);

    const toggleMediumLuggage = () => {
        setMediumLuggageState(mediumLuggageState => !mediumLuggageState);
        if (!mediumLuggageState) {
            setMediumLuggage(true);
            console.log(mediumLuggage);//test only
        }
        if (mediumLuggageState) {
            setMediumLuggage(false);
            console.log(mediumLuggage);//test only
        }
    }


    //It is working checked element change state
    const [smallLuggageState, setSmallLuggageState] = useState(false);

    const toggleSmallLuggage = () => {
        setSmallLuggageState(smallLuggageState => !smallLuggageState);
        if (!smallLuggageState) {
            setSmallLuggage(true);
            console.log(smallLuggage);//test only
        }
        if (smallLuggageState) {
            setSmallLuggage(false);
            console.log(smallLuggage);//test only
        }
    }


    //beachListStatus function to change state when clicked
    const [sunbathingState, setSunbathingState] = useState(false);

    const toggleSunbathing = () => {
        setSunbathingState(sunbathingState => !sunbathingState);
        if (!sunbathingState) {
            setBeachListStatus(true);
            console.log(beachListStatus);//test only
        }
        if (sunbathingState) {
            setBeachListStatus(false);
            console.log(beachListStatus);//test only
        }
    }


    //ski function to change state when clicked
    const [skiState, setSkiState] = useState(false);

    const toggleSki = () => {
        setSkiState(skiState => !skiState);
        if (!skiState) {
            setSki(true);
            console.log(ski);//test only
        }
        if (skiState) {
            setSki(false);
            console.log(ski);//test only
        }
    }


    //beachListStatus function to change state when clicked
    const [trekkingState, setTrekkingState] = useState(false);

    const toggleTrekking = () => {
        setTrekkingState(trekkingState => !trekkingState);
        if (!trekkingState) {
            setTrekking(true);
            console.log(trekking);//test only
        }
        if (trekkingState) {
            setTrekking(false);
            console.log(trekking);//test only
        }
    }


    //beachListStatus function to change state when clicked
    const [planeState, setPlaneState] = useState(false);

    const togglePlane = () => {
        setPlaneState(planeState => !planeState);
        if (!planeState) {
            setPlane(true);
            console.log(plane);//test only
        }
        if (planeState) {
            setPlane(false);
            console.log(plane);//test only
        }
    }

    //bus function to change state when clicked
    const [busState, setBusState] = useState(false);

    const toggleBus = () => {
        setBusState(busState => !busState);
        if (!busState) {
            setBus(true);
            console.log(bus);//test only
        }
        if (busState) {
            setBus(false);
            console.log(bus);//test only
        }
    }


    const [trainState, setTrainState] = useState(false);
    const toggleTrain = () => {
        setTrainState(trainState => !trainState);
        if (!trainState) {
            setTrain(true);
            console.log(train);//test only
        }
        if (trainState) {
            setTrain(false);
            console.log(train);//test only
        }
    }

    const [carState, setCarState] = useState(false);
    const toggleCar = () => {
        setCarState(carState => !carState);
        if (!carState) {
            setCar(true);
            console.log(car);//test only
        }
        if (carState) {
            setCar(false);
            console.log(car);//test only
        }
    }


    // function handleChange(event) {
    //     this.setState({value: event.target.value});
    // }
    //

    const [isErrorSex, setIsErrorSex] = useState('');
    const [sexError, setSexError] = useState(true);
    const [sexErrorEmpty, setSexErrorEmpty] = useState("");


    const validateSex = (event) => {
        const sx = event.target.value;
        console.log(sx)
        setSex(sx);
        const male = "male";
        const female = "female"
        if (sx !== male && sx !== female) {
            if (sx === " ") {
                setSexErrorEmpty("");
            } else {
                setIsErrorSex("Must be \"male\" or \"female\".");
            }
        } else {
            setIsErrorSex("");
            setSexError(false);
            setSex(sx);
        }
    }


    // Function for autocomplete
    const handleChange2 = (value) => {
        setDestination(value);
    }
    const handleSelect = (value) => {
        setDestination(value);
    }




    //
    // function getHowManyDaysTrips(departureDay, returnDay) {
    //     const diffInMs = Math.abs(returnDay - departureDay);
    //     setNumbersOfDaysOnTrip(diffInMs / (1000 * 60 * 60 * 24));
    //     console.log(numbersOfDaysOnTrip);
    // }
    // const  getHowManyDaysTrips = (daysValue)=> {
    //    // const back =setReturnDay(returnDay);
    //    // const go = setDepartureDay(departureDay);
    //    //  const diffInMonth = Math.abs(back - go);
    //    //  setNumbersOfDaysOnTrip(diffInMonth / (1000 * 60 * 60 * 24));
    //     // console.log(numbersOfDaysOnTrip);
    //     setNumbersOfDaysOnTrip(daysValue);
    // }






    return (
        <div id="elementInFormCreateList" className="row">


            {/*<div className="row">*/}
            {/*    <p>Test greet Parent pass data from FormCreateList to the DisplayList</p>*/}
            {/*    <button onClick={()=>props.greetHandler2('child')}>Greet Parent</button>*/}

            {/*</div>*/}


            <form className="col s12" onSubmit={(event) => validateCreateList(event)}>
                <div className="row">
                    <div className="input-field col s10">
                        <i className="material-icons prefix">title</i>
                        <input placeholder="" value={tripName} type="text"
                               onChange={(event => setTripName(event.target.value))}
                               className="validate"/>
                        <label htmlFor="List Name">Trip Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s10">
                        <i className="material-icons prefix">notes</i>
                        <input placeholder="" value={listId} type="text"
                               onChange={(event => setListId(event.target.value))}
                               className="validate"/>
                        <label htmlFor="List Name">Trip Description</label>
                    </div>
                </div>


                {/*implementation search box*/}
                {/* Unhidden this import and autocomplete for Google search*/}
                <div className="row">
                    {/*<i className="material-icons prefix">target</i>*/}
                    <div className="input-field col s10">
                        <i className="material-icons prefix">target</i>
                        <label><p id="destinationInFormCreateList"> </p></label>
                        <p>
                        <PlacesAutocomplete value={destination} onChange={handleChange2} onSelect={handleSelect}>
                            {({getInputProps, suggestions, getSuggestionItemProps, loading}) => (
                                <div>
                                    <input   {...getInputProps({
                                        placeholder: 'Search Places ...',
                                        // className: 'location-search-input',
                                    })}
                                    />
                                    <div>
                                        {loading && <div>Loading...</div>}
                                        {suggestions.map((suggestion) => {
                                            const style = suggestion.active ?
                                                {backgroundColor: "#FFFFFF", cursor: "pointer "} :
                                                {backgroundColor: "#9bc4ca", cursor: "pointer "}
                                            return (
                                                <div
                                                    {...getSuggestionItemProps(suggestion, {style})}>
                                                    {suggestion.description}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>)}
                        </PlacesAutocomplete>
                        </p>
                    </div>
                </div>


                {/*<div className="row">*/}
                {/*    <div className="input-field col s10">*/}
                {/*        <i className="material-icons prefix">target</i>*/}
                {/*        <label><p id="destinationInFormCreateList">DESTINATION:</p></label>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<div className="row">*/}
                {/*    <div className="input-field col s10">*/}
                {/*        <p>*/}
                {/*            <label>*/}
                {/*                <input type="checkbox" className="filled-in" value={ireland.toString()}*/}
                {/*                       onClick={toggleIreland}/>*/}
                {/*                <span>Ireland</span>*/}
                {/*                /!*<div>{ireland}</div>*!/*/}
                {/*            </label><br/>*/}
                {/*            <label>*/}
                {/*                <input type="checkbox" className="filled-in" value={spain.toString()}*/}
                {/*                       onClick={toggleSpain}/>*/}
                {/*                <span>Spain</span>*/}
                {/*                /!*<div>{spain.toString()}</div>*!/*/}
                {/*            </label><br/>*/}
                {/*            <label>*/}
                {/*                <input type="checkbox" className="filled-in" value={poland.toString()}*/}
                {/*                       onClick={togglePoland}/>*/}
                {/*                <span>Poland</span>*/}
                {/*                /!*<div>{poland.toString()}</div>*!/*/}
                {/*            </label>*/}
                {/*        </p>*/}
                {/*    </div>*/}
                {/*</div>*/}


                <div className="row">
                    <div className="input-field col s10">
                        <i className="material-icons prefix">calendar_month</i>
                        <input value={departureDay} type="date" onChange={(event =>
                            setDepartureDay(event.target.value))}
                               className="validate"/>
                        <label htmlFor="departureDay">Departure day</label>
                        {/*<div>  Trip departure day is: {departureDay} </div>*/}
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s10">
                        <i className="material-icons prefix">date_range</i>
                        <input value={returnDay} type="date" onChange={(event =>
                            setReturnDay(event.target.value))}
                               className="validate"/>
                        <label htmlFor="returnDay">Return day</label>
                        {/*<div> return day is: {returnDay} </div>*/}
                        {/*<div> Trip length is: {returnDay-departureDay} </div>*/}
                        {/*<div> Trip length is: {numbersOfDaysOnTrip} </div>*/}
                        {/*<button onClick={()=>differenceInDays}>Calculate </button>*/}
                    </div>
                </div>

                {/*<div className="row">*/}
                {/*    <div className="input-field col s10">*/}
                {/*        <i className="material-icons prefix">title</i>*/}
                {/*        <input placeholder="" value={numbersOfDaysOnTrip} type="text"*/}
                {/*               onChange={(event => setNumbersOfDaysOnTrip(event.target.value))}*/}
                {/*               className="validate"/>*/}
                {/*        <label htmlFor="Days">How many days</label>*/}
                {/*    </div>*/}
                {/*</div>*/}



                <div className="row">
                    <div className="input-field col s10">
                        <p>
                            <i className="material-icons prefix">photo_camera</i>
                            <label>
                                <input type="checkbox" className="filled-in" value={camera.toString()}
                                       onClick={toggleCamera}/>
                                <span>Camera</span>
                                {/*Hide this div it is for testing only*/}
                                <div>{camera.toString()}</div>
                            </label>
                        </p>
                    </div>

                    <div className="input-field col s10">
                        <p>
                            <i className="material-icons prefix"> videocam </i>
                            <label>
                                <input type="checkbox" className="filled-in" value={camcorder.toString()}
                                       onClick={toggleCamcorder}/>
                                <span>Camcorder</span>
                                {/*Hide this div it is for testing only*/}
                                <div>{camcorder.toString()}</div>
                            </label>
                        </p>
                    </div>

                    <div className="input-field col s10">
                        <p>
                            <i className="material-icons prefix"> computer </i>
                            <label>
                                <input type="checkbox" className="filled-in" value={laptop.toString()}
                                       onClick={toggleLaptop}/>
                                <span>Laptop</span>
                                <div>{laptop.toString()}</div>
                            </label>
                        </p>
                    </div>

                    <div className="input-field col s10">
                        <p>
                            <i className="material-icons prefix"> tablet </i>
                            <label>
                                <input type="checkbox" className="filled-in" value={tablet.toString()}
                                       onClick={toggleTablet}/>
                                <span>Tablet</span>
                                <div>{tablet.toString()}</div>
                            </label>
                        </p>
                    </div>


                    <div className="input-field col s10">
                        <p id={"drone1"}>
                            {/*<i className="material-icons prefix"></i>*/}

                            <Icon path={mdiQuadcopter}
                                  title=""
                                  size={1}
                                  horizontal
                                  vertical
                                  rotate={90}
                                  color="black"
                            />
                            {/*<div id="drone">*/}

                            <label>

                                <input type="checkbox" className="filled-in" value={drone.toString()}
                                       onClick={toggleDrone}/>
                                <span>Drone</span>
                                <div>{drone.toString()}</div>
                            </label>
                            {/*</div>*/}
                        </p>


                    </div>
                </div>


                <div className="row">

                    <div className="input-field col s8">
                        <i className="material-icons prefix">{sex}</i>

                        <input placeholder="" value={sex} type="text" onChange={(event => validateSex(event))}
                               className="validate"/>
                        <label htmlFor="sex">Sex</label>
                        <div>{isErrorSex}</div>
                        <div>{sexErrorEmpty}</div>
                        <div>{sexError}</div>
                    </div>
                </div>


                <div className="row" id="luggage"> LUGGAGE OPTIONS</div>
                <div className="row">
                    <div className="input-field col s10">
                        <p id={"largeLuggage"}>
                            {/*<i className="material-icons prefix">luggage </i>*/}


                            <Icon path={mdiBagCarryOn}
                                  title=""
                                  size={2}
                                  horizontal
                                  vertical
                                  rotate={180}
                                  color="black"
                            />


                            <label>
                                <input type="checkbox" className="filled-in" value={largeLuggage.toString()}
                                       onClick={toggleLargeLuggage}/>
                                <span>Large Luggage</span>
                                {/*<div>{largeLuggage.toString()}</div>*/}
                            </label>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s10">
                        <p>
                            <i className="material-icons prefix">luggage</i>
                            <label>
                                <input type="checkbox" className="filled-in" value={mediumLuggage.toString()}
                                       onClick={toggleMediumLuggage}/>
                                <span>Medium Luggage</span>
                                {/*<div>{mediumLuggage.toString()}</div>*/}
                            </label>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s10">
                        <p>
                            <i className="material-icons prefix">cases</i>
                            <label>
                                <input type="checkbox" className="filled-in" value={smallLuggage.toString()}
                                       onClick={toggleSmallLuggage}/>
                                <span>Small Luggage</span>
                                {/*<div>{smallLuggage.toString()}</div>*/}
                            </label>
                        </p>
                    </div>
                </div>


                <div className="row" id="activities"> ACTIVITIES</div>


                <div className="row">
                    <div className="input-field col s10">
                        <p>
                            <i className="material-icons prefix">beach_access</i>
                            <label>
                                <input type="checkbox" className="filled-in" value={beachListStatus.toString()}
                                       onClick={toggleSunbathing}/>
                                <span>Sunbathing</span>
                                {/*<div>{beachListStatus.toString()}</div>*/}
                            </label>
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s10">
                        <p>
                            <i className="material-icons prefix">downhill_skiing</i>
                            <label>
                                <input type="checkbox" className="filled-in" value={ski.toString()}
                                       onClick={toggleSki}/>
                                <span>Ski</span>
                                {/*<div>{ski.toString()}</div>*/}
                            </label>
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s10">
                        <p>
                            <i className="material-icons prefix">hiking</i>
                            <label>
                                <input type="checkbox" className="filled-in" value={trekking.toString()}
                                       onClick={toggleTrekking}/>
                                <span>Trekking</span>
                                {/*<div>{trekking.toString()}</div>*/}
                            </label>
                        </p>

                    </div>
                </div>


                <div className="row" id="transport"> Transport</div>


                <div className="row">
                    <div className="input-field col s10">
                        <p>
                            <i className="material-icons prefix">flight</i>
                            <label>
                                <input type="checkbox" className="filled-in" value={plane.toString()}
                                       onClick={togglePlane}/>
                                <span>Plane</span>
                                {/*<div>{plane.toString()}</div>*/}
                            </label>
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s10">
                        <p>
                            <i className="material-icons prefix">directions_car</i>
                            <label>
                                <input type="checkbox" className="filled-in" value={car.toString()}
                                       onClick={toggleCar}/>
                                <span>Car</span>
                                {/*<div>{car.toString()}</div>*/}
                            </label>
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s10">
                        <p>
                            <i className="material-icons prefix">train</i>
                            <label>
                                <input type="checkbox" className="filled-in" value={train.toString()}
                                       onClick={toggleTrain}/>

                                <span>Train</span>
                                {/*<div>{train.toString()}*/}
                                {/*</div> <div id="squareWithNumber"> 1 </div>*/}
                            </label>
                        </p>

                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s10">
                        <p>
                            <i className="material-icons prefix">directions_bus</i>
                            <label>
                                <input type="checkbox" className="filled-in" value={bus.toString()}
                                       onClick={toggleBus}/>
                                <span>Bus</span>
                                {/*<div>{bus.toString()}</div>*/}
                            </label>
                        </p>

                    </div>
                </div>


                {/*/!*BUTTONS*!/*/}
                {/*<div  className="row">*/}
                {/*    <div id="ButtonAddItemInFormCreateList" className="input-field col s10">*/}
                {/*        <Link to="../CreateCustomerList">*/}
                {/*            <button  className="waves-effect waves-light btn #795548 brown " type="submit" name="action">*/}
                {/*                Add Item(not ready yet)*/}
                {/*            </button>*/}
                {/*        </Link>*/}
                {/*    </div>*/}
                {/*</div>*/}


                <div className="row">
                    <div id="ButtonCreateListInFormCreateList" className="input-field col s10">
                        <button disabled={tripName.length === 0 || listId.length === 0}
                                className="waves-effect waves-light btn #795548 brown " type="submit" name="action">
                            Generate List
                        </button>
                    </div>
                </div>


                {/*!!!!!!!zrobic w tym miejcu tak ze zbiera dana liste id albo name i wyswietla tylko ta liste po wcicnieniu display list*/}
                <div className="row">
                    <div id="ButtonCreateListInFormCreateList" className="input-field col s10">
                        <Link to="../DisplayList">
                            <button className="waves-effect waves-light btn #795548 brown " type="submit" name="action">
                                Display List
                            </button>
                        </Link>
                    </div>
                </div>


            </form>


            {/*//pass a values of the list that will be displayed for cutomer*/}
            {/*<div className="row">*/}
            {/*    {displayList ?*/}
            {/*        <Link to="../DisplayList"></Link>*/}
            {/*        : "Wrong"*/}
            {/*    }*/}
            {/*</div>*/}
        </div>


    )

}

export default AddCreateListDetail;


