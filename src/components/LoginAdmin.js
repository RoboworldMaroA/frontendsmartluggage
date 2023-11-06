import React, {Component, useState} from "react";
import DeleteCustomerNew from "./DeleteCustomerNew";

//Import Style for display user list
import "./CSS/LoginAdmin.css";

/* Class Contact used for display and read a data from database */


const STATUS = document.getElementById('status');

export default class LoginAdmin extends Component{
    constructor(props){
        super(props);
        this.state= {
            contacts: [],
            contactsWasLoaded: false,
        };
        }


    componentDidMount(){
        fetch('https://smartluggagebackend.herokuapp.com/displayUsers')
            .then(response => {
                console.log("display response after post");
                console.log(response);
                if (!response.ok) {
                    console.log("Waiting for data from the backend");
                    STATUS.innerText = 'Something went wrong try refresh website';
                    this.contactsWasLoaded=false;

                } else {
                    console.log("All good when tried to display users")
                    this.contactsWasLoaded=true;
                    //save fetched data to the memory in the contacts array
                    response.json().then((data) => {
                        this.setState({contacts: data});
                    });

                }
            })
    }



        render(){
        return(

                <div id="positionDisplayStateOfTheUserData">

                    {this.contactsWasLoaded ? <div> {this.state.contacts.map((item) =>(<DeleteCustomerNew key={item.id} item={item} /> ))}</div>:    <p id="status"> Awaiting for load data from the backend. </p>

                    }
                </div>
        )

    }

}/* end class Contact*/
