import React, {useContext, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import './LoginNew2.css';


/*
### KEEP ###
SmartLuggage Application
Marek Augustyn

This is working login with verification on the backend
*/

export const LoginNew2 = ({setUserData: setUser}) => {
    const navigate = useNavigate();

    // const [userPassword, setUserPassword] = useState("");
    const [isError] = useState('');
    const [passwordErrorEmpty] = useState("");
    const [passwordError] = useState(true);


    const [isErrorEmail] = useState('');
    const [emailErrorEmpty] = useState("");
    const [emailError] = useState(true);

    // const {value, setValue} = useContext(UserContext);

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const [active] = useState(true);
    const [roles] = useState("ROLE_ADMIN");

    const [userAddress] = useState("");
    const [userDob] = useState("");
    const [userEmail] = useState("");
    const [userPhoneNumber] = useState("");
    const [userSurname] = useState("");
    // const [userVerified, setUserVerified] =useState("No");

    // fetch user data from backend
    const loginUser = async () => {
        const result = await
            fetch("https://smartluggagebackend.herokuapp.com/login", {
                method: "POST",
                body: JSON.stringify({
                    userName,
                    password,
                    active,
                    roles,
                    userAddress,
                    userDob,
                    userEmail,
                    userPhoneNumber,
                    userSurname
                }),
                headers: {
                    "Content-Type": "application/json",
                }
            }).then(res=>
        {
            console.log("display response after post")  ;
            console.log(res)  ;
            if(!res.ok){
                console.log("Probably wrong login or password");
                alert("Wrong Login or Password");
                navigate("/Login");
            }
            else{
                console.log("All good")
                navigate("/createOrDisplayList");
            }
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

    function verifyName(event) {
        const em = event.target.value;
        setUserName(em);
    }

    return (
        <div id="ItemsInLoginCustomer" >
            <div className="row">
                <div className="col s12 m8 l4">
                <div id="cardModOpacity" className="card">
                    <form id="formInLoginCustomer" onSubmit={verifyAllFields}>
                        <div className="row">
                            <div id="loginInput" className="input-field col s8">
                                <input placeholder="" value={userName} type="text"
                                       onChange={(event => verifyName(event))}
                                       className="validate"/>
                                <label htmlFor="name"> Name</label>
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
                            <button disabled={password.length === 0 || userName.length === 0} id="buttonInLoginNew2"
                                    className="waves-effect waves-light btn #795548 brown "
                                    type="submit" name="action">
                                Login
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
export default LoginNew2;
