// import React, {useEffect, useState} from 'react';
//
// //const LoginCustomerNew = ({props:props},{dataCustomer2:dataCustomer2}) => {
//     const LoginCustomerNew = ({props:props}) => {
//     // const [toDoList, setToDoList] = useState(props.data2);
//    // const [loginCustomerNew, setLoginCustomerNew] = useState(props.dataCustomer2);
//     const [email, setEmail] = useState('');
//     const [customerPassword, setCustomerPassword] = useState('');
//     // const updateIsDoneTrip= () => {
//     //     setToDoListTrip({ ... toDoListTrip, camera: !toDoListTrip.camera});
//     // }
//
//     //const [irelandState, setIrelandState] = useState("1");
//     // const [irelandStatus, setIrelandStatus] = useState(false);
//     // const [yesIreland, setYesIreland] = useState("Yes");
//     // const updateIrelandStatus = (event)=> {
//     //     setIrelandStatus(irelandStatus => !irelandStatus);
//     //     //let yes = "1";
//     //     //let no = "0";
//     //     //let ireland = toDoListTrip.ireland
//     //     //setToDoListTrip.ireland(event.target.value)
//     //     setToDoListTrip({ ... toDoListTrip, ireland: !toDoListTrip.ireland});
//     //     const trip = toDoListTrip.ireland;
//     //     const irlStatus = irelandStatus;
//     //     if (trip === "1"){
//     //         setIrelandStatus(true);
//     //         //setIrelandState("0");
//     //         console.log(irlStatus);
//     //     }
//     //
//     //     if (trip=== "0") {
//     //         setIrelandStatus(false);
//     //         //setIrelandState("1");
//     //         console.log(irlStatus);//test only
//     //     }
//     // }
//
//
//     // useEffect(()=> {
//     //     console.log("item was updated state is:", toDoListTrip.camera
//     //     );},[toDoListTrip]);
//
//
//
//     const sendData =(event) => {
//         // event.preventDefault();
//         console.log("Hi I am trying to login")
//         // props.validateHandler(email);//this is sent data to Login CustomerForm Parent
//         // alert(`Email is ${email}`);//This display only error
//     }
//
//
//     return (
//         <div>
//
//             <div id="ItemsInLoginCustomer" className="row">
//                 {/*<form className="col s12" onSubmit={() => validateCustomer()}>*/}
//                 <form className="col s12" onSubmit={sendData}>
//                     {/*<form className="col s12" onSubmit="" >*/}
//                     <div className="row">
//                         <div className="input-field col s8">
//                             <input placeholder="Login" value={email} type="email" onChange={(event => setEmail(event.target.value))}
//                                    className="validate"/>
//                             <label htmlFor="name">Name (Email from database){email} This is client email{email}</label>
//                         </div>
//                     </div>
//
//                     <div className="row">
//                         <div className="input-field col s8">
//                             <input placeholder="Password" value={customerPassword} type="text" onChange={(event =>
//                                 setCustomerPassword(event.target.value))}
//                                    className="validate"/>
//                             <label htmlFor="customerPassword">Password {customerPassword}</label>
//                         </div>
//                     </div>
//
//                     <div className="row">
//                         {/*<Link to="../CreateCustomerList">*/}
//                         <button className="waves-effect waves-light btn #795548 brown " type="submit" name="action">
//                             Login(Verification password not ready yet)
//                         </button>
//                         {/*</Link>*/}
//                     </div>
//                     {/*This execute fuction in the Parent function LoginCustomerForm*/}
//                     {/*<button onClick={props.validateHandler}> Hello validator Button in LoginCustomerForm</button>*/}
//
//                     {/*If you want to pass a values from child to the parent you have to use arrow function*/}
//                     {/*<button onClick={() => props.validateHandler("This ifo is from a LoginCustomer Button")}> Hello validator Button in LoginCustomerForm</button>*/}
//                 </form>
//             </div>
//
//
//         </div>
//     );
// };
//
// export default LoginCustomerNew ;
//
//
//
