import React, {useContext, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import './LoginNew2.css';


/*
### KEEP ###
SmartLuggage Application
Marek Augustyn

This is working login with verification on the backend
*/

export const LoginJWT = ({setUserData: setUser}) => {
    const navigate = useNavigate();

    // const [userPassword, setUserPassword] = useState("");
    const [isError] = useState('');
    const [passwordErrorEmpty] = useState("");
    const [passwordError] = useState(true);


    const [isErrorEmail] = useState('');
    const [emailErrorEmpty] = useState("");
    const [emailError] = useState(true);

    // const {value, setValue} = useContext(UserContext);

    const [password, setPassword] = useState('');
    const [email,setEmail] = useState(" ");

    // const [userVerified, setUserVerified] =useState("No");

    // fetch user data from backend
    const loginUser = async () => {
        const result = await
            //Post request used for Login a user
            fetch("https://smartluggagebackendjwt-c266cf5456e9.herokuapp.com/api/v1/auth/authenticate", {
                // fetch("http://159.65.88.48:8080/api/v1/auth/authenticate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            })
                // .then((res) => res.json())
                .then((resJWT) => {
                    console.log("This is response before if statement"+resJWT);

                    if (!resJWT.ok) { // We should get a 200 (OK) status code if everything is fine/working
                        console.log("Probably wrong login or password");
                        alert("Wrong Login or Password");
                        // window.open("/login.html");
                        throw Error(`Response status ${resJWT.status} (${resJWT.statusText}): ${resJWT.message}`);
                    }
                    else{

                        resJWT.json()
                            .then(json => {
                            console.log(json)
                            let userToken = json.token;
                            console.log("Print token "+userToken);
                            localStorage.setItem('userTokenLoginForm', JSON.stringify(json.token));
                        });

                        console.log("I have got status 200 login successful:  "+resJWT.status);
                        alert("Thank You, Now Click a secured link to see a data.");
                        // window.open("/");
                    }

                })
                .catch(exception => {
                    console.log(new Map([
                        [TypeError, "There was a problem fetching the response."],
                        [SyntaxError, "There was a problem parsing the response."],
                        [Error, exception.message]
                    ]).get(exception.constructor()));
                });
    }//end fetch login function

    const verifyAllFields = (event) => {
        event.preventDefault();
        window.alert("Data will be verified!");
        return loginUser();
    }

    function verifyPass(event) {
        const pass = event.target.value;
        setPassword(pass);
    }

    function verifyEmail(event) {
        const em = event.target.value;
        setEmail(em);
    }

    return (
        <div id="ItemsInLoginCustomer" >
            <div className="row">
                <div className="col s12 m8 l4">
                    <div id="cardModOpacity" className="card">
                        <form id="formInLoginCustomer" onSubmit={verifyAllFields}>
                            <div className="row">
                                <div id="loginInput" className="input-field col s8">
                                    <input placeholder="" value={email} type="email"
                                           onChange={(event => verifyEmail(event))}
                                           className="validate"/>

                                    <label htmlFor="name"> Email</label>
                                    <p id="isErrorEmail">{email}</p>
                                    <p id="isErrorEmail">{isErrorEmail}</p>
                                    <p id="emailErrorEmpty">{emailErrorEmpty}</p>
                                    <p id="emailError">{emailError}</p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="input-field col s8">
                                    <input placeholder="" value={password} type="password"
                                           onChange={(event => verifyPass(event))}
                                           className="validate"/>
                                    <label htmlFor="name"> Password</label>
                                    <p id="isError">{isError}</p>
                                    <p id="passwordErrorEmpty">{passwordErrorEmpty}</p>
                                    <p id="passwordError">{passwordError}</p>
                                </div>
                            </div>

                            <div className="row">
                                <button disabled={password.length === 0 || email.length === 0} id="buttonInLoginNew2"
                                        className="waves-effect waves-light btn #795548 brown "
                                        type="submit" name="action">
                                    Login JWT
                                </button>
                            </div>

                            <br/>
                        </form>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
            </div>
        </div>

    );
}
export default LoginJWT;
