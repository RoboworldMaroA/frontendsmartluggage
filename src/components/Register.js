import React, {Component} from "react";
import RegisterCustomer from "./RegisterCustomer";

/*
SmartLuggage Application
Marek Augustyn

*/
/* Class Contact uses for display and read a data from database, data is imported from other classes */
//props are data inside the divs
export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
        };
    }

    componentDidMount() {
        fetch('https://smartluggagebackend.herokuapp.com/displayUsers')
            .then(response => response.json()).then(data => this.setState({contacts: data}));
    }



    render() {
        return (
            <div className="row">
                <RegisterCustomer/>
            </div>
        )

    }

}/* end class Contact*/
