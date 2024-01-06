import React, { useState} from 'react';
/* useState is used to set a value  */
//this  function send customer details to database during a registration
//css to make a style on this class
import './RegisterCustomer.css';
import {useNavigate} from "react-router-dom";
/*
SmartLuggage Application
Marek Augustyn

*/
const AddDetail = ({setCustomerInfo: setInfo}) => {

    //variable USER
    const navigateRegister = useNavigate();
    const [userName, setUserName] = useState('');
    const [userSurname, setUserSurname] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPhoneNumber, setUserPhoneNumber] = useState('');
    const [userDob, setUserDob] = useState('');
    const [userAddress, setUserAddress] = useState('');
    const [password, setPassword] = useState('');
    const [customerPasswordAgain, setCustomerPasswordAgain] = useState('');
    const [isError, setIsError] = useState('');
    const [isErrorFetchMethod, setIsErrorFetchMethod] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
    const [passwordErrorEmpty, setPasswordErrorEmpty] = useState("");


    const [roles] = useState("ROLE_USER");
    const [active] = useState(true);


    // const verifyAllFields = (event) => {
    //     if (!passwordError) {
    //         window.alert("Thank You for registration. !")
    //         navigateRegister("/Login");
    //         return addCustomer();
    //
    //     }
    //     if (passwordError) {
    //         setPasswordErrorEmpty("CAN NOT BE EMPTY");
    //         event.preventDefault();
    //     }
    // }


    //Fetch data from USER Development Version
    // const addCustomer = async () => {
    //     const result = await fetch("https://smartluggagebackend.herokuapp.com/addUser", {
    //         method: "POST",
    //         body: JSON.stringify({
    //             userName,
    //             password,
    //             userSurname,
    //             userEmail,
    //             userPhoneNumber,
    //             roles,
    //             active,
    //             userDob,
    //             userAddress
    //
    //         }),
    //         headers: {
    //             "Content-Type": "application/json",
    //         }
    //     }).catch((err) => {
    //         setIsErrorFetchMethod(err.message)
    //         console.log(err.response);
    //     })
    //     const body = await result.json().catch(err => console.log(err.response));
    //     setInfo(body).catch(err => console.log(err.response));
    // }


    //USER validation
    const validatePassword = (event) => {
        const pass = event.target.value;
        setCustomerPasswordAgain(pass);
        if (password !== pass) {
            if (password === " ") {
                setPasswordErrorEmpty("Can NOT be empty!");
            } else {
                setIsError("Passwords do NOT match!");
            }
        } else {
            setIsError("Password OK");
            setPasswordError(false);
            setPasswordErrorEmpty(" ")
        }
    }


    const validateEmail = (event) => {
        const em = event.target.value;
        setUserEmail(em);
        // setValue(em);
    }


    return (

        // USER
        <div id="itemsInRegisterCustomer" className="row">

            {/*<form className="col s12" onSubmit={(event) => verifyAllFields(event)}>*/}
            {/*    <div className="row">*/}
            {/*        <div className="input-field col s10">*/}
            {/*            {isErrorFetchMethod && <div>{isErrorFetchMethod}</div>}*/}
            {/*            <div>{isErrorFetchMethod}</div>*/}
            {/*            <i className="material-icons prefix">account_circle</i>*/}
            {/*            <input placeholder="" value={userName} type="text"*/}
            {/*                   onChange={(event => setUserName(event.target.value))} className="validate"/>*/}
            {/*            <label htmlFor="name">First Name</label>*/}
            {/*        </div>*/}
            {/*    </div>*/}

                <div className="row">
                    <div className="input-field col s10">
                        <i className="material-icons prefix">account_circle</i>
                        <input placeholder="" value={userSurname} type="text"
                               onChange={(event => setUserSurname(event.target.value))} className="validate"/>
                        <label htmlFor="surname">Surname</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s10">
                        <i className="material-icons prefix">email</i>
                        <input placeholder="" value={userEmail} type="email" onChange={(event => validateEmail(event))}
                               className="validate"/>
                        <label htmlFor="email">Email</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s10">
                        <i className="material-icons prefix">phone</i>
                        <input placeholder="" value={userPhoneNumber} type="tel"
                               onChange={(event => setUserPhoneNumber(event.target.value))}
                               className="validate"/>
                        <label htmlFor="phoneNumber">Phone Number</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s10">
                        <i className="material-icons prefix">cake</i>
                        <input value={userDob} type="date" onChange={(event => setUserDob(event.target.value))}
                               className="validate"/>
                        <label htmlFor="dob">Day of Birth</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s10">
                        <i className="material-icons prefix">home</i>
                        <input placeholder="" value={userAddress} type="text"
                               onChange={(event => setUserAddress(event.target.value))} className="validate"/>
                        <label htmlFor="surname">Address</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s10">
                        <i className="material-icons prefix">password</i>
                        <input placeholder="" value={password} type="password"
                               onChange={(event => setPassword(event.target.value))}
                               className="validate"/>
                        <label htmlFor="customerPassword">Password</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s10">
                        <i className="material-icons prefix">password</i>
                        <input placeholder="" value={customerPasswordAgain} type="password"
                               onChange={(event => validatePassword(event))}
                               className="validate"/>
                        <label htmlFor="customerPasswordAgain">Repeat the Password</label>
                        <div>{isError}</div>
                        <div>{passwordErrorEmpty}</div>
                        <div>{passwordError}</div>
                    </div>
                </div>

                <div className="row">
                    <button
                        disabled={userEmail.length === 0 || customerPasswordAgain.length === 0 || password.length === 0 || userDob.length === 0}
                        id="buttonRegister"
                        className="waves-effect waves-light btn #795548 brown"
                        type="submit"
                        name="action">
                        Register
                    </button>
                </div>
            {/*</form>*/}
        </div>
    );
}

export default AddDetail;


