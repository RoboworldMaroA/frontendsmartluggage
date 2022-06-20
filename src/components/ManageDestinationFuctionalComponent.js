import React, {Component, useContext, useState} from "react";
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
12 May 2022
Final Project Software Developer
*/
export const ManageDestinationFunctionalComponent = () =>{

    const [tripData, setTripData] = useState(null);
    const [displayTripDetail, setDisplayTripDetail] = useState(false);
    const [loggedCustomerId, setLoggedCustomerId] = useState(1);

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
        });
    }, ["hI trip"]);



    //this method display or not the Trip Detail
    function changeStatus() {
        //here will be logic what lit to display, depend on what customer choose in the form FormCrteteList
        console.log("State trip List", displayTripDetail);
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
export default ManageDestinationFunctionalComponent;
