// import React, {Component, useState} from "react";
// import LoginCustomerForm from './LoginCustomerForm'
// import SingleContact from './SingleContact';
// import AddStudentDetail from './AddStudentDetail';
// import DeleteContact from "./DeleteContact";
// import DeleteContactNew from "./DeleteContactNew";
// import ToDoList from "./ToDoList"
// import RegisterCustomer from "./RegisterCustomer";
// import DeleteCustomerNew from "./DeleteCustomerNew";
// import LoginCustomer from "./LoginCustomer";
// /* Class Contact uses for display and read a data from database, data is imported from other classes */
// //props are data inside the divs
// export default class Login extends Component{
//     constructor(props){
//         super(props);
//         this.state= {
//             contacts: [],
//             // email:'',
//         };
//         // this.handleChange = this.handleChange.bind(this);
//         // this.handleSubmit = this.handleSubmit.bind(this);
//         }
//
//         componentDidMount(){
//         /*fetch('http://localhost:8080/api/v1/student').then(response => response.json()).then(data => this.setState({contacts: data}));*/
//             fetch('api/v1/customer').then(response => response.json()).
//             then(data => this.setState({contacts: data})).catch(err=>console.log(err.message));
//         }
//
//
//
//
//     // handleChange(event) {
//     //     let input = this.state.input;
//     //     input[event.target.name] = event.target.value;
//     // }
//
//     render(){
//
//             return(
//             <div>
//                 <div className="row">
//                     <LoginCustomer />
//
//                 </div>
//                 {/*<div className="row">*/}
//                 {/*    {this.state.contacts.map((customerData) => <LoginCustomerForm key={customerData.id} customerData={customerData} />)}*/}
//
//                 {/*</div>*/}
//
//                 {/*<div className="row">*/}
//
//                 {/*    {this.state.contacts.map((item) =>(<LoginCustomer key={item.id} item={item} >*/}
//
//                 {/*        <div id="ItemsInLoginCustomer" className="row">*/}
//                 {/*            /!*<form className="col s12" onSubmit={() => validateCustomer()}>*!/*/}
//                 {/*            <form className="col s12" onSubmit={() => handleSubmit()}>*/}
//                 {/*                /!*<form className="col s12" onSubmit="" >*!/*/}
//                 {/*                <div className="row">*/}
//                 {/*                    <div className="input-field col s8">*/}
//                 {/*                        /!*<input placeholder="Login" value={contact.email} type="email" onChange={(event => setEmail(event.target.value))} className="validate"/>*!/*/}
//                 {/*                        <input placeholder="Login" value={item.email} type="email" onChange={(event => (event.target.value))} className="validate"/>*/}
//                 {/*                        <label htmlFor="name">Name (Email){item.email}{item.email}</label>*/}
//                 {/*                    </div>*/}
//                 {/*                </div>*/}
//
//                 {/*                <div className="row">*/}
//                 {/*                    <div className="input-field col s8">*/}
//                 {/*                        /!*<input placeholder="Password" value={contact.customerPassword} type="text" onChange={(event =>*!/*/}
//                 {/*                        /!*    setCustomerPassword(event.target.value))} className="validate"/>*!/*/}
//                 {/*                        <input placeholder="Password" value={item.customerPassword} type="text" onChange={(event =>*/}
//                 {/*                            (event.target.value))} className="validate"/>*/}
//                 {/*                        <label htmlFor="customerPassword">Password {item.customerPassword}</label>*/}
//                 {/*                    </div>*/}
//                 {/*                </div>*/}
//
//                 {/*                <div className="row">*/}
//                 {/*                    /!*<Link to="../CreateCustomerList">*!/*/}
//                 {/*                    <button className="waves-effect waves-light btn #795548 brown " type="submit" name="action">*/}
//                 {/*                        Login(Verification password not ready yet)*/}
//                 {/*                    </button>*/}
//                 {/*                    /!*</Link>*!/*/}
//                 {/*                </div>*/}
//                 {/*            </form>*/}
//                 {/*        </div>*/}
//                 {/*    </LoginCustomer>))}*/}
//
//
//
//
//                 {/*</div>*/}
//
//
//
//
//                 {/*<div className="row">*/}
//                 {/*    {this.state.contacts.map((item) =>(<SingleContact key={item.id} item={item} /> ))}*/}
//
//                 {/*</div>*/}
//
//       {/*          //display what is inside the to do list
//                 <div className="row">
//                     <ToDoList />
//
//                 </div>*/}
//
//
//             {/*    </div>*/}
//             </div>)
//
//
//     }
//
//                 }