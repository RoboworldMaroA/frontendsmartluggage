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
/*
SmartLuggage Application
Marek Augustyn
Display list of items created  base on the user preferences
*/
export const DisplayListFunctionalComponent = (props) => {

    const [tripData, setTripData] = useState([]);
    let [displayTripDetail, setDisplayTripDetail] = useState(false);
    const [displayTripDetail2, setDisplayTripDetail2] = useState(false);
    const [displayTripDetail3, setDisplayTripDetail3] = useState(false);
    const [displayTripDetail4, setDisplayTripDetail4] = useState(false);
    const [loggedCustomerId] = useState(1);
    const [tripId, setTripId] = useState("");

    // const {value,setValue} = useContext(UserContext);
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         contacts: [],
    //         tripData: [],
    //         displayDocuments: true,
    //         displayEssential: true,
    //         displayBeach: true,
    //         camera:' ',
    //         parentName2:'Parent',
    //         displayTripDetail:false,
    //         items:[
    //             {id:1, name:"Marek"},
    //             {id:2, name:"Leszek"},
    //             {id:3, name:"Augustyn"}
    //         ],
    //         loggedCustomerId:1,
    //         loggedCustomerEmail:"maugusty@o2.pl",
    //
    //     }
    //
    //     // this.greetParent2=this.greetParent2.bind(this);
    //     //this.documentList=this.documentList.bind(this);
    //
    // }

    // I am testing to get value from FormCreateList
    // greetParent2(childName2){
    //     // alert('Hello'+this.state.parentName );
    //     alert(`Hello ${this.state.parentName2} from ${childName2}`);
    // }

    // const fetchCustomerDataFromDatabase= async ()=> {
    //     fetch('api/v1/customer/').then
    //     (response => response.json()).then(data => this.setState({contacts: data}));
    //
    //
    //     document.addEventListener('DOMContentLoaded', function () {
    //         var elems = document.querySelectorAll('select');
    //         var instances = M.FormSelect.init(elems, {});
    //     });
    //
    //     document.addEventListener('DOMContentLoaded', function () {
    //         var elems = document.querySelectorAll('.datepicker');
    //         var instances = M.Datepicker.init(elems, {});
    //     });
    //
    //
    // }


    //import data from the trip and get a data trip, compare with
    //documentList

    // const fetchCustomerDataFromDatabase= async ()=>
    //     fetch('api/v1/trip/').then
    //     (response => response.json()).then(TripData => this.setState({tripData: TripData}));
    //
    // }


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



    //Fetch data from Heroku New Backend with JWT
    useEffect(() => {
        //do something when loading
        // console.log("signal to do something using useEffect")
        fetch("https://smartluggagebackendjwt-c266cf5456e9.herokuapp.com/api/v1/trip").then((response) => response.json()).then((TripData) => {
            // fetch("api/v1/trip/").then((response) => response.json()).then((TripData) => {
            // console.log("List of items in the trip", TripData);
            setTripData(TripData);
            // calculateLastTripId();
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, ["hI trip"]);


    // const calculateLastTripId=()=>{
    //     tripData.map(
    //         (TripData)=> {
    //             return(
    //                 <div> {TripData.id} </div>
    //             );
    //         }
    //     )
    //
    //
    //     // console.log("I am looking for last Id", lastId);
    //
    // }


    //this method display or not the Trip Detail
    function changeStatus() {
        //here will be logic what lit to display, depend on what customer choose in the form FormCrteteList
        // console.log("State trip List", displayTripDetail);
        setDisplayTripDetail(!displayTripDetail);


    }

    //this method display or not the Trip Detail
    function changeStatus2() {
        //here will be logic what lit to display, depend on what customer choose in the form FormCrteteList
        // console.log("State trip List", displayTripDetail2);
        setDisplayTripDetail2(!displayTripDetail2);

    }

    //this method display or not the Trip Detail
    function changeStatus3() {
        //here will be logic what lit to display, depend on what customer choose in the form FormCrteteList
        // console.log("State trip List", displayTripDetail3);
        setDisplayTripDetail3(!displayTripDetail3);

    }

    //this method display or not the Trip Detail
    function changeStatus4() {
        //here will be logic what lit to display, depend on what customer choose in the form FormCrteteList
        // console.log("State trip List", displayTripDetail4);
        setDisplayTripDetail4(!displayTripDetail4);

    }


    return (
        // First DIV
        <div id="allElementInDisplayListFunctionalComponent">

            <div id="positionDisplayStateOfCustomerList">
                <DisplayStateOfCustomerList/>
            </div>

            <div id="fourButtonsToDisplayListDetail" className="row">


                {/*#################FIRST BUTTON#######################*/}
                <div className="col s12 m6 l3">
                    <button className="waves-effect waves-light btn #795548 brown "
                            onClick={() => changeStatus()}> Details Trip 1
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


                {/*#################  2 BUTTON#######################*/}
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


                {/*################# 3 BUTTON#######################*/}
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
                        ? tripData.filter((TripData) => TripData.id === parseInt(tripId)).map((TripData) => {
                            return (
                                <>
                                    <DisplayCustomerTrip key={TripData.id} item={TripData}/>
                                </>
                            );
                        }) : ""}
                </div>
                </div>

            </div>


        </div>);
}/* end class Contact*/
export default DisplayListFunctionalComponent;
