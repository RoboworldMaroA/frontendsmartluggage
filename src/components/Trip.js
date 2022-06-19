import React, {Component} from "react";
import LoginAdminDetail from "./LoginAdminDetail";
import DeleteCustomerNew from "./DeleteCustomerNew";
import DisplayCustomerTrip from "./DisplayCustomerTrip";
/*
SmartLuggage Application
Marek Augustyn
12 May 2022
Final Project Software Developer
*/
export default class Trip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
        };
    }


    // Deploy Version
    componentDidMount(){
        fetch('https://backendsmartluggage.herokuapp.com/api/v1/trip/').then(response => response.json()).
        then(data => this.setState({contacts: data}));
    }


    //Development Version
    // componentDidMount(){
    //     fetch('api/v1/trip').then(response => response.json()).
    //     then(data => this.setState({contacts: data}));
    // }


    render(){
        return(
            <div>
                <div className="row">
                    {this.state.contacts.map((itemTrip) =>(<DisplayCustomerTrip key={itemTrip.id} item={itemTrip} /> ))}
                </div>
            </div>
        )

    }

}