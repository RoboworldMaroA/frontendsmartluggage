import React, {Component} from "react";
import SingleContact from './SingleContact';
import DeleteContact from "./DeleteContact";
import DeleteContactNew from "./DeleteContactNew";
import ToDoList from "./ToDoList"
import RegisterCustomer from "./RegisterCustomer";
import DeleteCustomerNew from "./DeleteCustomerNew";
import {Link} from "react-router-dom";
import './Pay.css';
/* Class Contact uses for display and read a data from database, data is imported from other classes */
//props are data inside the divs
export default class Help extends Component{
    constructor(props){
        super(props);
        this.state= {
            contacts: [],
        };
        }

        componentDidMount(){
        /*fetch('http://localhost:8080/api/v1/student').then(response => response.json()).then(data => this.setState({contacts: data}));*/
            fetch('api/v1/customer').then(response => response.json()).then(data => this.setState({contacts: data}));
            // fetch('https://backendsmartluggage.herokuapp.com/api/v1/customer').then(response => response.json()).then(data => this.setState({contacts: data}));

        }


        render(){
        return(
            <div id = "payButton">
                <div  className="row">
                    <a href="https://www.nytimes.com/guides/travel/how-to-pack-a-suitcase">
                        <button className="waves-effect waves-light btn #795548 brown " type="submit" name="action">
                            Packing Guides
                        </button>
                    </a>
                </div>

                <div className="row">
                    <a href="https://www.nytimes.com/guides/travel/how-to-fly">
                        <button className="waves-effect waves-light btn #795548 brown " type="submit" name="action">
                            Travel by Plane
                        </button>
                    </a>
                </div>


            </div>
        )

    }

}/* end class Contact*/
