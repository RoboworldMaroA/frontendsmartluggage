import React, {Component} from "react";
import DisplayCustomerTrip from "./DisplayCustomerTrip";
/*
SmartLuggage Application
Marek Augustyn

*/
export default class Trip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
        };
    }


    // Deploy Version
    componentDidMount() {
        fetch('https://smartluggagebackend.herokuapp.com/api/v1/trip').then(response => response.json()).then(data => this.setState({contacts: data}));
    }

    render() {
        return (
            <div>
                <div className="row">
                    {this.state.contacts.map((itemTrip) => (<DisplayCustomerTrip key={itemTrip.id} item={itemTrip}/>))}
                </div>
            </div>
        )

    }

}