import React, {Component} from "react";
import './Pay.css';
/* Class Contact uses for display and read a data from database, data is imported from other classes */
//props are data inside the divs
/*
SmartLuggage Application
Marek Augustyn
12 May 2022
Final Project Software Developer
*/

export default class Pay extends Component{
    constructor(props){
        super(props);
        this.state= {
            contacts: [],
        };
        }

        componentDidMount(){
        /*fetch('http://localhost:8080/api/v1/student').then(response => response.json()).then(data => this.setState({contacts: data}));*/
            // fetch('api/v1/customer').then(response => response.json()).then(data => this.setState({contacts: data}));
            fetch('https://backendsmartluggage.herokuapp.com/api/v1/customer').then(response => response.json()).then(data => this.setState({contacts: data}));

        }


        render(){
        return(
            <div id = "payButton">
                <div  className="row">
                    <a href="https://www.paypal.com/">
                        <button className="waves-effect waves-light btn #795548 brown " type="submit" name="action">
                            PayPal
                        </button>
                    </a>
                </div>

                <div className="row">
                    <a href="https://www.stripe.com/">
                        <button className="waves-effect waves-light btn #795548 brown " type="submit" name="action">
                            Stripe
                        </button>
                    </a>
                </div>

                {/*<div className="row">*/}
                {/*    <LoginCustomer />*/}

                {/*</div>*/}

                {/*<div className="row">*/}

                {/*    {this.state.contacts.map((item) =>(<DeleteCustomerNew key={item.id} item={item} /> ))}*/}

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
