import React, {Component} from "react";
import DeleteCustomerNew from "./DeleteCustomerNew";
/* Class Contact uses for display and read a data from database, data is imported from other classes */


//props are data inside the divs
export default class LoginAdmin extends Component{
    constructor(props){
        super(props);
        this.state= {
            contacts: [],
        };
        }

        componentDidMount(){
            fetch('https://smartluggagebackend.herokuapp.com/displayUsers').then(response => response.json()).
            then(data => this.setState({contacts: data}));
        }

        render(){
        return(
            <div>

                <div className="row">

                    {this.state.contacts.map((item) =>(<DeleteCustomerNew key={item.id} item={item} /> ))}

                </div>
            </div>
        )

    }

}/* end class Contact*/
