import React, {Component} from "react";
import ToDoList from "./ToDoList"
/* Class Contact uses for display and read a data from database, data is imported from other classes */
//props are data inside the divs
import './FormCreateList.css';
import 'materialize-css';
import M from 'materialize-css';
import DocumentsList from "./DocumentsList";
import EssentialList from "./EssentialList";
import essentialList from "./EssentialList";
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
import LoginNew2 from "./LoginNew2";
/*
SmartLuggage Application
Marek Augustyn
12 May 2022
Final Project Software Developer
*/
export default class DisplayList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
            tripData: [],
            displayDocuments: true,
            displayEssential: true,
            displayBeach: true,
            camera: ' ',
            parentName2: 'Parent',
            displayTripDetail: false,
            items: [
                {id: 1, name: "Marek"},
                {id: 2, name: "Leszek"},
                {id: 3, name: "Augustyn"}
            ],
            loggedCustomerId: 1,
            loggedCustomerEmail: "maugusty@o2.pl",

        }

        // this.greetParent2=this.greetParent2.bind(this);
        //this.documentList=this.documentList.bind(this);

    }

    // I am testing to get value from FormCreateList
    // greetParent2(childName2){
    //     // alert('Hello'+this.state.parentName );
    //     alert(`Hello ${this.state.parentName2} from ${childName2}`);
    // }

    componentDidMount() {
        fetch('https://backendsmartluggage.herokuapp.com/api/v1/customer').then
        // fetch('api/v1/customer/').then
        (response => response.json()).then(data => this.setState({contacts: data}));


        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('select');
            var instances = M.FormSelect.init(elems, {});
        });

        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.datepicker');
            var instances = M.Datepicker.init(elems, {});
        });

    }


    //import data from the trip and get a data trip, compare with
    //documentList

    componentDidMount() {
        fetch('https://backendsmartluggage.herokuapp.com/api/v1/trip').then
        // fetch('api/v1/trip/').then
        (response => response.json()).then(TripData => this.setState({tripData: TripData}));
    }

    //this method diplay or not the Trip Detail
    changeStatus() {
        //here will be logic what lit to display, depend what customer choose in the form FormCrteteList
        console.log("State trip List", this.state.displayTripDetail)
        this.setState(
            {
                displayTripDetail: !this.state.displayTripDetail
            }, () => "eecece");
    }

    render() {

        return (
            // First DIV
            <div id="wholeDisplayList">

                {/*<div className="row">*/}


                {/*    {this.state.tripData.map((TripData)=> {*/}
                {/*        return(<div >*/}
                {/*                <h1>key={TripData.id} camera {TripData.camera.toString()}</h1>*/}
                {/*        </div>*/}

                {/*        )*/}

                {/*    })}*/}
                {/*</div>*/}


                {/*Filter function to diplay only trip data from one cutomer*/}
                <div className="row">
                    {this.state.tripData.filter((TripData) => TripData.id === 1)
                        .map((TripData) => TripData.ireland)}

                </div>

                <div className="row">
                    {this.state.tripData && this.state.tripData.filter((TripData) => TripData.id === 2).map((TripData) => {
                        return (
                            <div key={TripData.id}>

                                <h1> From Trip {TripData.departureDay} {TripData.ireland.toString()}  </h1>
                            </div>
                        )
                    })
                    }
                </div>


                <div className="row">
                    {this.state.contacts.filter((data) => data.id === 1)
                        .map((data) => data.name)}

                </div>

                {/*<p> Status of the list from database </p>*/}
                {/*<div className="row">*/}
                {/*        <DisplayStateOfCustomerList/>*/}
                {/*</div>*/}


                {/*<button className="waves-effect waves-light btn #795548 brown "  onClick={()=> this.changeStatus()} >  Display Trip Detail </button>*/}
                {/* <div>*/}
                {/*     {this.state.displayTripDetail*/}
                {/*         ? this.state.tripData.map((TripData) => {*/}
                {/*                 return (<DisplayCustomerTrip key={TripData.id} item={TripData}/>);*/}
                {/*         }):"... press to see more detail about a trips"}*/}
                {/*     /!*end*!/*/}
                {/* </div>*/}

                <button className="waves-effect waves-light btn #795548 brown "
                        onClick={() => this.changeStatus()}> Display Trip Detail
                </button>
                <div>
                    {this.state.displayTripDetail
                        ? this.state.tripData.filter((TripData) => TripData.id === this.state.loggedCustomerId).map((TripData) => {
                            return (<DisplayCustomerTrip key={TripData.id} item={TripData}/>);
                        }) : "... press to see more detail about a trips"}
                    {/*end*/}
                </div>
            </div>)
    }//end

}/* end class Contact*/
