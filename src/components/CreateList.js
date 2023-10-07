import React, {Component} from "react";
import FormCreateList from "./FormCreateList";
/* Class Contact uses for display and read a data from database, data is imported from other classes */
//props are data inside the divs
import './FormCreateList.css';
import 'materialize-css';
import M from 'materialize-css';

/*
SmartLuggage Application
Marek Augustyn

*/
export default class CreateList extends Component{
    constructor(props){
        super(props);
        this.state= {
            trips: [],
            value: '',
        };
        }

        componentDidMount(){

            // fetch('https://smartluggagebackend.herokuapp.com/api/v1/trip').then
            // (response => response.json()).then(data => this.setState({trips: data}));

            //new database JWT
            fetch('https://smartluggagebackendjwt-c266cf5456e9.herokuapp.com/api/v1/trip').then
            (response => response.json()).then(data => this.setState({trips: data}));

            document.addEventListener('DOMContentLoaded', function() {
                const elems = document.querySelectorAll('select');
                const instances = M.FormSelect.init([],elems,this.options);
            });

            document.addEventListener('DOMContentLoaded', function() {
                const elems = document.querySelectorAll('.datepicker');
                const instances = M.Datepicker.init([],elems, this.options);
            });
        }



    render() {
        return (
            <>
                <div className="row">
                    <FormCreateList/>
                </div>

            </>

        )
    }

}/* end class Contact*/
