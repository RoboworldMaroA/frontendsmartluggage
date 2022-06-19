import React, {Component} from "react";
import SingleContact from './SingleContact';
import AddSDetail from './AddSDetail';
import DeleteContact from "./DeleteContact";
import DeleteContactNew from "./DeleteContactNew";
import ToDoList from "./ToDoList"
/* Class Contact uses for display and read a data from database, data is imported from other classes */
//props are data inside the divs
export default class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
        };
    }

    componentDidMount() {
        // /*fetch('http://localhost:8080/api/v1/student').then(response => response.json()).then(data => this.setState({contacts: data}));*/
        // fetch('api/v1/student').then(response => response.json()).then(data => this.setState({contacts: data}));
    }


    render() {
        return (
            <div>
                <div className="row">
                    <AddSDetail/>
                </div>

                <div className="row">
                    {this.state.contacts.map((item) => (<DeleteContactNew key={item.id} item={item}/>))}
                </div>

                //display what is inside the to do list
                <div className="row">
                    <ToDoList/>
                </div>

            </div>
        )
    }
}/* end class Contact*/
