import React, {Component} from "react";
import SingleContact from './SingleContact';
import DeleteContact from "./DeleteContact";
import DeleteContactNew from "./DeleteContactNew";
import ToDoList from "./ToDoList"
import RegisterCustomer from "./RegisterCustomer";
import DeleteCustomerNew from "./DeleteCustomerNew";
import LoginCustomer from "./LoginCustomer";
import LoginAdminDetail from "./LoginAdminDetail";
import * as PropTypes from "prop-types";
import DisplayCustomerTrip from "./DisplayCustomerTrip";
import Trip from "./Trip";
import DisplayList from "./DisplayList";
/* Class Contact uses for display and read a data from database, data is imported from other classes */


// function DisplayCustomerTrip(itemTrip,item) {
//     return (
//
//         <div className="row">
//             <div className="col s12 m6">
//                 <div className="card blue-grey darken-1">
//                     <div className="card-content white-text">
//                                 <span className="card-title">
//                                     <p>Trip details for Customer with ID: {item.id}</p>
//                                     Name: {itemTrip.name}
//                                     <p> Destination:  {itemTrip.destination}  </p>
//                                     {/*<p> Email: {item.email} </p>*/}
//                                     {/*<p> Phone Number: {item.phoneNumber} </p>*/}
//                                     {/*<p> Date of birth: {item.dob} </p>*/}
//                                     {/*<p> Sex: {item.sex} </p>*/}
//                                     {/*<p>Age: {item.age}</p>*/}
//                                     {/*    Password: {item.customerPassword}   */}
//                                 </span>
//
//                     </div>
//                 </div>
//             </div>
//         </div>
//
//
//     );
// }
//
// DisplayCustomerTrip.propTypes = {itemTrip: PropTypes.any};
//props are data insie the divs
export default class LoginAdmin extends Component{
    constructor(props){
        super(props);
        this.state= {
            contacts: [],
        };


        }

        componentDidMount(){
        /*fetch('http://localhost:8080/api/v1/student').then(response => response.json()).then(data => this.setState({contacts: data}));*/
            // fetch('https://backendsmartluggage.herokuapp.com/api/v1/customer').then(response => response.json()).
            // fetch('displayUsers').then(response => response.json()).
            fetch('https://backendsmartluggage.herokuapp.com/displayUsers').then(response => response.json()).
            then(data => this.setState({contacts: data}));

        }


        render(){
        return(
            <div>


                {/*<div className="row">*/}
                {/*    <LoginAdminDetail />*/}

                {/*</div>*/}

                <div className="row">

                    {this.state.contacts.map((item) =>(<DeleteCustomerNew key={item.id} item={item} /> ))}

                </div>


                {/*<div className="row">*/}
                {/*<DisplayCustomerTrip />*/}

                {/*</div>*/}

                {/*<div className="row">*/}

                {/*    <Trip />*/}

                {/*</div>*/}





                {/*<div className="row">*/}
                {/*    {this.state.contacts.map((item) =>(<SingleContact key={item.id} item={item} /> ))}*/}

                {/*</div>*/}

      {/*          //display what is inside the to do list
                <div className="row">
                    <ToDoList />

                </div>*/}




            </div>
        )

    }

}/* end class Contact*/
