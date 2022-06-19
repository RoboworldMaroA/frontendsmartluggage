import React, {Component, useState} from "react";
import ToDoList from "./ToDoList"
/* Class Contact uses for display and read a data from database, data is imported from other classes */
//props are data inside the divs
import './FormCreateList.css';
import 'materialize-css';
import M from 'materialize-css';
import DocumentsList from "./DocumentsList";
import BeachList from "./BeachList";
import DisplayCustomerTrip from "./DisplayCustomerTrip";
import displayCustomerTrip from "./DisplayCustomerTrip";
import FormCreateList from "./FormCreateList";
import ParentComponent from "./ParentComponent";
import LoginCustomerForm from "./LoginCustomerForm";
import {useEffect} from "react";
import DisplayStateOfCustomerList from "../DisplayStateOfCustomerList";
import {Link} from "react-router-dom";
import ToDoListComponentsTrip from "./ToDoListComponentsTrip";
import Trip from "./Trip";
// import {UserContext} from "../UserContext";
import './DisplayListComponent.css';
/*
SmartLuggage Application
Marek Augustyn
12 May 2022
Final Project Software Developer
*/
export const DisplayListFunctionalComponent = (props) =>{

    const [tripData, setTripData] = useState([]);
    const [displayTripDetail, setDisplayTripDetail] = useState(false);
    const [displayTripDetail2, setDisplayTripDetail2] = useState(false);
    const [displayTripDetail3, setDisplayTripDetail3] = useState(false);
    const [displayTripDetail4, setDisplayTripDetail4] = useState(false);
    const [loggedCustomerId, setLoggedCustomerId] = useState(1);
    const [tripId, setTripId] = useState([]);

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

    useEffect(() => {
        //do something when loading
        console.log("signal to do something using useEffect")
        fetch("https://backendsmartluggage.herokuapp.com/api/v1/trip").then((response) => response.json()).then((TripData) => {
            // fetch("api/v1/trip/").then((response) => response.json()).then((TripData) => {
            console.log("List of items in the trip", TripData);
            setTripData(TripData);
            // calculateLastTripId();
        });
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
        console.log("State trip List", displayTripDetail);
        setDisplayTripDetail(!displayTripDetail);


    }

    //this method display or not the Trip Detail
    function changeStatus2() {
        //here will be logic what lit to display, depend on what customer choose in the form FormCrteteList
        console.log("State trip List", displayTripDetail2);
        setDisplayTripDetail2(!displayTripDetail2);

    }

    //this method display or not the Trip Detail
    function changeStatus3() {
        //here will be logic what lit to display, depend on what customer choose in the form FormCrteteList
        console.log("State trip List", displayTripDetail3);
        setDisplayTripDetail3(!displayTripDetail3);

    }

    //this method display or not the Trip Detail
    function changeStatus4() {
        //here will be logic what lit to display, depend on what customer choose in the form FormCrteteList
        console.log("State trip List", displayTripDetail4);
        setDisplayTripDetail4(!displayTripDetail4);

    }


        return (
            // First DIV
            <div id="allElementInDisplayListFunctionalComponent">

                {/*<div>*/}


                {/*    tripData.map((TripData)=> {*/}
                {/*        return(<div >*/}
                {/*                <h1>key={TripData.id} camera {TripData.camera.toString()}</h1>*/}
                {/*        </div>*/}

                {/*        );*/}
                {/*};*/}
                {/*</div>*/}




                {/*    {this.state.tripData.map((TripData)=> {*/}
                {/*        return(<div >*/}
                {/*                <h1>key={TripData.id} camera {TripData.camera.toString()}</h1>*/}
                {/*        </div>*/}

                {/*        )*/}

                {/*    })}*/}
                {/*</div>*/}


                {/*Filter function to diplay only trip data from one cutomer*/}
                {/*<div className="row">*/}
                {/*    {tripData.filter((TripData)=>TripData.id===1)*/}
                {/*        .map((TripData)=> TripData.ireland)}*/}

                {/*</div>*/}

                {/*<div className="row">*/}
                {/*    {trip && trip.filter((TripData) => TripData.id===2).*/}
                {/*    map((TripData) => {return (*/}
                {/*        <div key={TripData.id} >*/}

                {/*            <h1> From Trip   {TripData.departureDay} {TripData.ireland.toString()}  </h1>*/}
                {/*        </div>*/}
                {/*    )})*/}

                {/*    }*/}

                {/*</div>*/}





                {/*<div className="row">*/}
                {/*    {this.state.contacts.filter((data)=>data.id===1)*/}
                {/*        .map((data)=> data.name)}*/}

                {/*</div>*/}





                {/*<p> Status of the list from database </p>*/}
                <div id="positionDisplayStateOfCustomerList">
                        <DisplayStateOfCustomerList/>
                </div>

                {/*IN THIS LINE IS VISIBLE VALUE FROM THE ANOTHER COMPONENT THAT YOU CAN SHARE*/}
                {/*<div className="row"> <h2>Element from useContext {value}</h2></div>*/}

                {/*<div> Trip ID {tripId.length}</div>*/}





                <div id= "fourButtonsToDisplayListDetail" className="row">


                    {/*#################FIRST BUTTON#######################*/}
                    <div className="col s12 m6 l3">
                <button className="waves-effect waves-light btn #795548 brown "  onClick={()=> changeStatus()} >  Details Trip 1 </button>
                 {/*<div>*/}
                 {/*    {displayTripDetail*/}
                 {/*        ? tripData.map((TripData) => {*/}
                 {/*                return (<DisplayCustomerTrip key={TripData.id} item={TripData}/>);*/}
                 {/*        }):"... press to see more detail about a trips"}*/}
                 {/*    /!*end*!/*/}
                 {/*</div>*/}
                {/*<div className="row">*/}
                {/*<button className="waves-effect waves-light btn #795548 brown "  onClick={()=> changeStatus()} >  Display Trip Detail </button>*/}
                {/*</div>*/}

                    </div>
                <div>
                    {displayTripDetail
                        ? tripData.filter((TripData) => TripData.id===loggedCustomerId).map((TripData) => {
                            return (
                                <>
                                <DisplayCustomerTrip key={TripData.id} item={TripData}/>


                                </>

                                );
                        }):""}
                    {/*end*/}
                </div>




                    {/*#################  2 BUTTON#######################*/}
                        <div className="col s12 m6 l3">
                <button  className="waves-effect waves-light btn #795548 brown "  onClick={()=> changeStatus2()} > Details Trip 2  </button>
                {/*<div>*/}
                {/*    {displayTripDetail*/}
                {/*        ? tripData.map((TripData) => {*/}
                {/*                return (<DisplayCustomerTrip key={TripData.id} item={TripData}/>);*/}
                {/*        }):"... press to see more detail about a trips"}*/}
                {/*    /!*end*!/*/}
                {/*</div>*/}
                {/*<div className="row">*/}
                {/*<button className="waves-effect waves-light btn #795548 brown "  onClick={()=> changeStatus()} >  Display Trip Detail </button>*/}
                {/*</div>*/}


                        </div>
                <div>
                    {displayTripDetail2
                        ? tripData.filter((TripData) => TripData.id===2).map((TripData) => {
                            return (
                                <>
                                    <DisplayCustomerTrip key={TripData.id} item={TripData}/>


                                </>

                            );
                        }):""}
                    {/*end*/}
                </div>




                    {/*################# 3 BUTTON#######################*/}
                            <div className="col s12 m6 l3">
                <button className="waves-effect waves-light btn #795548 brown "  onClick={()=> changeStatus3()} >  Details Trip 3 </button>
                {/*<div>*/}
                {/*    {displayTripDetail*/}
                {/*        ? tripData.map((TripData) => {*/}
                {/*                return (<DisplayCustomerTrip key={TripData.id} item={TripData}/>);*/}
                {/*        }):"... press to see more detail about a trips"}*/}
                {/*    /!*end*!/*/}
                {/*</div>*/}
                {/*<div className="row">*/}
                {/*<button className="waves-effect waves-light btn #795548 brown "  onClick={()=> changeStatus()} >  Display Trip Detail </button>*/}
                {/*</div>*/}

                            </div>

                <div>
                    {displayTripDetail3
                        ? tripData.filter((TripData) => TripData.id===3).map((TripData) => {
                            return (
                                <>
                                    <DisplayCustomerTrip key={TripData.id} item={TripData}/>


                                </>

                            );
                        }):""}
                    {/*end*/}
                </div>



                    {/*################# 4 BUTTON#######################*/}
                                <div className="col s12 m6 l3">

                <button className="waves-effect waves-light btn #795548 brown "  onClick={()=> changeStatus4()} >  Details Trip 4 </button>
                {/*<div>*/}
                {/*    {displayTripDetail*/}
                {/*        ? tripData.map((TripData) => {*/}
                {/*                return (<DisplayCustomerTrip key={TripData.id} item={TripData}/>);*/}
                {/*        }):"... press to see more detail about a trips"}*/}
                {/*    /!*end*!/*/}
                {/*</div>*/}
                {/*<div className="row">*/}
                {/*<button className="waves-effect waves-light btn #795548 brown "  onClick={()=> changeStatus()} >  Display Trip Detail </button>*/}
                {/*</div>*/}
                                </div>
                <div >
                    {displayTripDetail4
                        ? tripData.filter((TripData) => TripData.id===4).map((TripData) => {
                            return (
                                <>
                                    <DisplayCustomerTrip key={TripData.id} item={TripData}/>


                                </>

                            );
                        }):""}
                    {/*end*/}
                </div>








                {/*<div className="row">*/}
                {/*    {displayTripDetail*/}
                {/*        ? tripData.filter((TripData) => TripData.id===3).map((TripData) => {*/}
                {/*            return (*/}
                {/*                <>*/}
                {/*                    <DisplayCustomerTrip key={TripData.id} item={TripData}/>*/}


                {/*                </>*/}

                {/*            );*/}
                {/*        }):"... press to see more detail about a trips"}*/}
                {/*    /!*end*!/*/}
                {/*</div>*/}

                </div>




            </div>);
}/* end class Contact*/
export default DisplayListFunctionalComponent;
