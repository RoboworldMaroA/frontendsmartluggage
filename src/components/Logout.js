import React, {useContext, useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import './CSS/Logout.css'


/*
### KEEP THIS ###
SmartLuggage Application
Marek Augustyn
2023
This is working logout component with the button that will be visible when user was successfully logged in

*/

export const Logout = ({loginStatus1}) => {
    const navigate = useNavigate();
    const [jwtToken, setJwtToken] = useState(localStorage.getItem("userTokenLoginForm"));
    const [loginStatus, setLoginStatus] = useState(localStorage.getItem("userLoginStatus"));


    //function used for logout, it cleans the JWT token
    function logout(event){
        // event.preventDefault();//For test only
        let token1 = localStorage.getItem("userTokenLoginForm");
        if(token1 !== " "){
            localStorage.setItem('userTokenLoginForm', " ");
            localStorage.setItem('userLoginStatus', "Not verified");
            navigate("/Login");
            // alert("Logout successful.");
        }
        else{
            alert("User is already logged out");
        }
    }


    return (
        <div>
            {/*logout button appear only if user is verified*/}
            <form id="formInLogout" onSubmit={logout}>
                {loginStatus==="verified" ? <button  id="buttonInLogout"
            className="waves-effect waves-light btn #795548 brown "
            type="submit" name="action">
                Logout user
            </button> : <div id="notLoggedUser"> "No one is logged in, please log in first. Thank you." </div>}
            </form>


        </div>


    );
}
export default Logout;
