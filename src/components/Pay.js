import React, {Component} from "react";
import './Pay.css';
/* Class Contact uses for display and read a data from database, data is imported from other classes */
//props are data inside the divs
/*
SmartLuggage Application
Marek Augustyn

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

            </div>
        )

    }

}/* end class Contact*/
