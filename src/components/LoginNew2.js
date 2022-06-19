
import React, {useContext, useEffect, useState} from 'react';
import Register from "./Register";
import {useNavigate} from "react-router-dom";
// import {UserContext} from "../UserContext";
import './LoginNew2.css';
import {use} from "bcrypt/promises";
import {getValue} from "@testing-library/user-event/dist/utils";

/*
SmartLuggage Application
Marek Augustyn
12 May 2022
Final Project Software Developer
*/
//function LoginNew2() {
export const LoginNew2 = ({setUserData: setUser}) => {
    const navigate = useNavigate();
    //database
    //test only one object
    // const adminUser = {
    //
    //     name: "Marek",
    //     email: "maugusty@o2.pl",
    //     password: "1234"
    // };

    //test multiple objects
    // const usersArrayLocalMemory = [
    //     {
    //         name: "Janek",
    //         email: "maugusty@o2.pl",
    //         passUser: "1234"
    //
    //     },
    //
    //     {
    //         name: "Wojtek",
    //         email: "Leszek@o2.pl",
    //         passUser: "abcd",
    //
    //     }
    //     ,
    //
    //     {
    //         name: "Marek",
    //         email: "Zenek@o2.pl",
    //         passUser: "qwerty",
    //
    //     }
    //     ,
    //
    //     {
    //         name: "Marek",
    //         email: "maugusty2@o2.pl",
    //         passUser: "1234",
    //
    //     }
    //
    // ];


    // Login
    // const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");


    const [isError, setIsError] = useState('');
    const [passwordErrorEmpty, setPasswordErrorEmpty] = useState("");
    const [passwordError, setPasswordError] = useState(true);


    const [isErrorEmail, setIsErrorEmail] = useState('');
    const [emailErrorEmpty, setEmailErrorEmpty] = useState("");
    const [emailError, setEmailError] = useState(true);


    // const {value, setValue} = useContext(UserContext);



    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const [active, setActive] = useState(true);
    const [roles, setRoles] = useState("ROLE_ADMIN");

    const [userAddress, setUserAddress] = useState("");
    const [userDob, setUserDob] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPhoneNumber, setUserPhoneNumber] = useState("");
    const [userSurname, setUserSurname] = useState("");

    // fetch user data, for Testing Purposes
    const loginUser = async () => {
        const result = await


            // fetch("login", {
            fetch("https://backendsmartluggage.herokuapp.com/login", {
            method: "POST",
            body: JSON.stringify({userName,password,active,roles,userAddress,userDob,userEmail,userPhoneNumber, userSurname}),
            headers: {
                "Content-Type": "application/json",
            }
        })
        ;

        const userBody = await result.json();
        console.log("This is user body from loginUser"+userBody);
        // navigate("/createOrDisplayList");
        setUser(userBody).catch(error => console.log("Display error" + error));


        // if (result.status===500){
        //     console.log("IT is w=something wrong")
        // }
        // console.log("All good")
        // navigate("/createOrDisplayList");
    }









    // const validatePassword=(event)=>{
    //     const pass =event.target.value;
    //     setCustomerPasswordAgain(pass);
    //     if(customerPassword!=pass) {
    //         if(customerPassword===" "){
    //             setPasswordErrorEmpty("CAN NOT BE EMPTY");
    //         }
    //         else{setIsError("password mus be the same!!!!");}
    //     }
    //
    //     else{
    //         setIsError("Password OK");
    //         setPasswordError(false);
    //     }
    // }
    //


    const verifyAllFields = (event) => {


            console.log("data user name in if statement: "+userName)
             // console.log("user body in verify all fields"+ this.result.value.status);//not working
            event.preventDefault();

        window.alert("Thank You for registration. !")
        navigate("/createOrDisplayList");

            return loginUser();

        // if (!passwordError) {
        //
        //     if (!emailError) {
        //         console.log("i want to go to the registration page")
        //         // navigate("/CreateCustomerList");
        //         // navigate("/createOrDisplayList");
        //         return loginUser();
        //
        //     }
        //
        //
        // }
        //
        // if (passwordError || emailError) {
        //     setPasswordErrorEmpty("CAN NOT BE EMPTY");
        //     return loginUser();
        //     event.preventDefault();
        // }


    }

    // //only one user in database
    // function verifyName(event) {
    //     const pass = event.target.value;
    //     setUserPassword(pass);
    //     if (adminUser.password !== pass) {
    //         if (userPassword === " ") {
    //             setPasswordErrorEmpty("CAN NOT BE EMPTY");
    //         } else {
    //             setIsError("Passwords do not match!");
    //         }
    //     } else {
    //         setIsError("");
    //         setPasswordError(false);
    //     }
    // }


    // //function used to search array object with login and password
    // //is search by name and display all object with this name
    // const [searchedArray, setSearchedArray] = React.useState(usersArrayLocalMemory);
    // //this variable keep user input data
    // const [searchString, setSearchString] = React.useState("");
    //
    // //it is rendering a data that is in array users`arraysLocalMemory
    // useEffect(() => {
    //     if(searchString.length === 0){
    //         //if is empty array then set object usersArrayLocalMemory
    //         setSearchedArray(usersArrayLocalMemory)
    //     } else {
    //         //set temporary empty array
    //         //in this place we keep new data that is sorted
    //         const searchedObjects = [];
    //         //
    //         usersArrayLocalMemory.forEach((singleUserObject, index) => {
    //             //using Object method looping all elements and return values
    //             Object.values(singleUserObject).every((onlyValues, valIndex) => {
    //                 if(onlyValues.toLowerCase().includes(searchString.toLowerCase())){
    //                     searchedObjects.push(singleUserObject)
    //                     return;
    //                 }
    //             })
    //         })
    //         setSearchedArray(searchedObjects)
    //     }
    // }, [searchString])


    //function used to search array object with login and password
    //It is search all fields and if there is a data in one of this 3 elements in the object then display all object
    // const [searchedArray, setSearchedArray] = React.useState(usersArrayLocalMemory);
    //this variable keep user input data
    // const [searchString, setSearchString] = React.useState("");

    //it is rendering a data that is in array users`arraysLocalMemory
    // useEffect(() => {
    //     if (searchString.length === 0) {
    //         //if is empty array then set object usersArrayLocalMemory
    //         setSearchedArray(usersArrayLocalMemory)
    //     } else {
    //         //set temporary empty array
    //         //in this place we keep new data that is sorted
    //         const searchedObjects = usersArrayLocalMemory.filter((singleUserObject, index) => {
    //             //using Object method looping all elements and return values
    //             return Object.values(singleUserObject).join('').toLowerCase().includes(searchString.toLowerCase())
    //
    //
    //         })
    //         setSearchedArray(searchedObjects)
    //     }
    // }, [searchString])


    //MMultiple objects validation in local memory
    function verifyPass(event) {
        const pass = event.target.value;
        // setUserPassword(pass);
        setPassword(pass);
        // let i =0;
        // setIsError("");
        // for(i===0;i <= usersArrayLocalMemory.length;i++) {
        //    console.log(usersArrayLocalMemory[i]);
        //    if(usersArrayLocalMemory[i].passUser!==pass){
        //        console.log("not equal" + pass );
        //        setIsError("Passwords do not match!");
        //
        //
        //    }
        //     if(usersArrayLocalMemory[i].passUser===pass) {
        //         console.log("I have found in the library" + pass);
        //         setIsError("");
        //         setPasswordError(false);
        //
        //     }

        //
        // }
    }


    // //email is a login one user
    // function verifyEmail(event) {
    //     const em = event.target.value;
    //     setUserEmail(em);
    //     if (adminUser.email !== em) {
    //         if (userEmail === " ") {
    //             setEmailErrorEmpty("CAN NOT BE EMPTY");
    //         } else {
    //             setIsErrorEmail("Email does not match.!");
    //         }
    //     } else {
    //         setIsErrorEmail("Email OK");
    //         setEmailError(false);
    //     }
    // }


    //email is a login multiple object local memory
    //i change to the database
    function verifyName(event) {
        const em = event.target.value;
        // setUserEmail(em);
        setUserName(em);
        // if (usersArrayLocalMemory.email !== em) {
        //     // if (userEmail === " ") {
        //         if (userName === " ") {
        //         setEmailErrorEmpty("CAN NOT BE EMPTY");
        //     } else {
        //         setIsErrorEmail("Email does not match.!");
        //     }
        // } else {
        //     setIsErrorEmail("Email OK");
        //     setEmailError(false);
        // }
    }


    return (


        <div id="ItemsInLoginCustomer">
            {/*<form className="col s12" onSubmit={() => validateCustomer()}>*/}

            <div className="col s8 m3">

                <div id="cardModOpacity" className="card ">

                    {/*<form id="formInLoginCustomer" onSubmit={verifyAllFields}>*/}
                    <form id="formInLoginCustomer" onSubmit={verifyAllFields}>

                        <div className="row">

                            <div id="loginInput" className="input-field col s8">
                                {/*<input placeholder="" value={userEmail} type="email"*/}
                                {/*       onChange={(event => verifyEmail(event))}*/}
                                {/*       className="validate"/>*/}

                                <input placeholder="" value={userName} type="text"
                                       onChange={(event => verifyName(event))}
                                       className="validate"/>


                                <label htmlFor="name"> Name</label>
                                {/*<p>Email (Email from database){adminUser.email}.  User nAme that is writing{userEmail}</p>*/}
                                {/*<p>Is error login :{isErrorEmail}</p>*/}

                                {/*<p>Login error is empty : {emailErrorEmpty}</p>*/}
                                {/*<p>Login Error :{emailError}</p>*/}
                                {/*<p id="smallerText">{adminUser.email}</p>*/}
                                {/*<p>{userName}</p>*/}
                                <p id="isErrorEmail">{isErrorEmail}</p>

                                <p id="emailErrorEmpty">{emailErrorEmpty}</p>
                                <p id="emailError">{emailError}</p>
                                {/*<p id="emailError"> Email: {userEmail}</p>*/}

                            </div>
                        </div>


                        <div className="row">
                            <div className="input-field col s8">
                                {/*<input placeholder="" value={userPassword} type="password"*/}
                                {/*       onChange={(event => verifyName(event))}*/}
                                {/*       className="validate"/>*/}


                                <input placeholder="" value={password} type="password"
                                       onChange={(event => verifyPass(event))}
                                       className="validate"/>

                                <label htmlFor="name"> Password</label>
                                {/*    <p>Name (Name from database){adminUser.password}.  Username that is writing{userPassword}</p>*/}
                                {/*<p>Is error password :{isError}</p>*/}

                                {/*    <p>Login error is empty : {passwordErrorEmpty}</p>*/}
                                {/*    <p>Login Error :{passwordError}</p>*/}
                                {/*<p id="smallerPassText">{adminUser.password}</p>*/}
                                {/*<p>This is password : {password}</p>*/}
                                <p id="isError">{isError}</p>
                                <p id="passwordErrorEmpty">{passwordErrorEmpty}</p>
                                <p id="passwordError">{passwordError}</p>
                                {/*<p id="emailError">Password: {userPassword}</p>*/}
                            </div>


                            {/*<p>*/}
                            {/*    <input*/}
                            {/*        type="text"*/}
                            {/*        value={searchString}*/}
                            {/*        onChange={(e) => setSearchString(e.target.value)}*/}
                            {/*        placeholder="search here.."*/}
                            {/*    />*/}
                            {/*</p>*/}

                            {/*<pre>*/}
                            {/*  {JSON.stringify(searchedArray, null, '    ')}*/}
                            {/* </pre>*/}


                        </div>


                        <div className="row">
                            {/*<Link to="../CreateCustomerList">*/}
                            <button disabled={password.length===0||userName.length===0} id="buttonInLoginNew2" className="waves-effect waves-light btn #795548 brown "
                                    type="submit" name="action">
                                Login
                            </button>
                            {/*</Link>*/}
                        </div>

                        <br/>
                        {/*<br/>*/}

                        {/*This execute fuction in the Parent function LoginCustomerForm*/}
                        {/*<button onClick={props.validateHandler}> Hello validator Button in LoginCustomerForm</button>*/}

                        {/*If you want to pass a values from child to the parent you have to use arrow function*/}
                        {/*<button onClick={() => props.validateHandler("This ifo is from a LoginCustomer Button")}> Hello validator Button in LoginCustomerForm</button>*/}
                    </form>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                < br/>
                <br/>

            </div>
        </div>

    );
}

export default LoginNew2;













// import React, {useContext, useEffect, useState} from 'react';
// import Register from "./Register";
// import {useNavigate} from "react-router-dom";
// // import {UserContext} from "../UserContext";
// import './LoginNew2.css';
// // import {use} from "bcrypt/promises";
//
// /*
// SmartLuggage Application
// Marek Augustyn
// 12 May 2022
// Final Project Software Developer
// */
// //function LoginNew2() {
// export const LoginNew2 = () => {
//     const navigate = useNavigate();
//     //database
//     //test only one object
//     // const adminUser = {
//     //
//     //     name: "Marek",
//     //     email: "maugusty@o2.pl",
//     //     password: "1234"
//     // };
//
//     //test multiple objects
//     const usersArrayLocalMemory = [
//         {
//             name: "Janek",
//             email: "maugusty@o2.pl",
//             passUser: "1234"
//
//         },
//
//         {
//             name: "Wojtek",
//             email: "Leszek@o2.pl",
//             passUser: "abcd",
//
//         }
//         ,
//
//         {
//             name: "Marek",
//             email: "Zenek@o2.pl",
//             passUser: "qwerty",
//
//         }
//         ,
//
//         {
//             name: "Marek",
//             email: "maugusty2@o2.pl",
//             passUser: "1234",
//
//         }
//
//     ];
//
//
//     // Login
//     const [userEmail, setUserEmail] = useState("");
//     const [userPassword, setUserPassword] = useState("");
//
//
//     const [isError, setIsError] = useState('');
//     const [passwordErrorEmpty, setPasswordErrorEmpty] = useState("");
//     const [passwordError, setPasswordError] = useState(true);
//
//
//     const [isErrorEmail, setIsErrorEmail] = useState('');
//     const [emailErrorEmpty, setEmailErrorEmpty] = useState("");
//     const [emailError, setEmailError] = useState(true);
//
//
//     // const {value, setValue} = useContext(UserContext);
//
//     // const validatePassword=(event)=>{
//     //     const pass =event.target.value;
//     //     setCustomerPasswordAgain(pass);
//     //     if(customerPassword!=pass) {
//     //         if(customerPassword===" "){
//     //             setPasswordErrorEmpty("CAN NOT BE EMPTY");
//     //         }
//     //         else{setIsError("password mus be the same!!!!");}
//     //     }
//     //
//     //     else{
//     //         setIsError("Password OK");
//     //         setPasswordError(false);
//     //     }
//     // }
//     //
//
//
//     const verifyAllFields = (event) => {
//         if (!passwordError) {
//
//             if (!emailError) {
//                 console.log("i want to go to the registration page")
//                 // navigate("/CreateCustomerList");
//                 navigate("/createOrDisplayList");
//
//
//             }
//
//
//         }
//
//         if (passwordError || emailError) {
//             setPasswordErrorEmpty("CAN NOT BE EMPTY");
//             event.preventDefault();
//         }
//
//
//     }
//
//     // //only one user in database
//     // function verifyName(event) {
//     //     const pass = event.target.value;
//     //     setUserPassword(pass);
//     //     if (adminUser.password !== pass) {
//     //         if (userPassword === " ") {
//     //             setPasswordErrorEmpty("CAN NOT BE EMPTY");
//     //         } else {
//     //             setIsError("Passwords do not match!");
//     //         }
//     //     } else {
//     //         setIsError("");
//     //         setPasswordError(false);
//     //     }
//     // }
//
//
//     // //function used to search array object with login and password
//     // //is search by name and display all object with this name
//     // const [searchedArray, setSearchedArray] = React.useState(usersArrayLocalMemory);
//     // //this variable keep user input data
//     // const [searchString, setSearchString] = React.useState("");
//     //
//     // //it is rendering a data that is in array users`arraysLocalMemory
//     // useEffect(() => {
//     //     if(searchString.length === 0){
//     //         //if is empty array then set object usersArrayLocalMemory
//     //         setSearchedArray(usersArrayLocalMemory)
//     //     } else {
//     //         //set temporary empty array
//     //         //in this place we keep new data that is sorted
//     //         const searchedObjects = [];
//     //         //
//     //         usersArrayLocalMemory.forEach((singleUserObject, index) => {
//     //             //using Object method looping all elements and return values
//     //             Object.values(singleUserObject).every((onlyValues, valIndex) => {
//     //                 if(onlyValues.toLowerCase().includes(searchString.toLowerCase())){
//     //                     searchedObjects.push(singleUserObject)
//     //                     return;
//     //                 }
//     //             })
//     //         })
//     //         setSearchedArray(searchedObjects)
//     //     }
//     // }, [searchString])
//
//
//     //function used to search array object with login and password
//     //It is search all fields and if there is a data in one of this 3 elements in the object then display all object
//     const [searchedArray, setSearchedArray] = React.useState(usersArrayLocalMemory);
//     //this variable keep user input data
//     const [searchString, setSearchString] = React.useState("");
//
//     //it is rendering a data that is in array users`arraysLocalMemory
//     useEffect(() => {
//         if (searchString.length === 0) {
//             //if is empty array then set object usersArrayLocalMemory
//             setSearchedArray(usersArrayLocalMemory)
//         } else {
//             //set temporary empty array
//             //in this place we keep new data that is sorted
//             const searchedObjects = usersArrayLocalMemory.filter((singleUserObject, index) => {
//                 //using Object method looping all elements and return values
//                 return Object.values(singleUserObject).join('').toLowerCase().includes(searchString.toLowerCase())
//
//
//             })
//             setSearchedArray(searchedObjects)
//         }
//     }, [searchString])
//
//
//     //MMultiple objects validation in local memory
//     function verifyName(event) {
//         const pass = event.target.value;
//         setUserPassword(pass);
//         let i =0;
//         setIsError("");
//         for(i===0;i <= usersArrayLocalMemory.length;i++) {
//            console.log(usersArrayLocalMemory[i]);
//            if(usersArrayLocalMemory[i].passUser!==pass){
//                console.log("not equal" + pass );
//                setIsError("Passwords do not match!");
//
//
//            }
//             if(usersArrayLocalMemory[i].passUser===pass) {
//                 console.log("I have found in the library" + pass);
//                 setIsError("");
//                 setPasswordError(false);
//
//             }
//
//
//         }
//     }
//
//
//     // //email is a login one user
//     // function verifyEmail(event) {
//     //     const em = event.target.value;
//     //     setUserEmail(em);
//     //     if (adminUser.email !== em) {
//     //         if (userEmail === " ") {
//     //             setEmailErrorEmpty("CAN NOT BE EMPTY");
//     //         } else {
//     //             setIsErrorEmail("Email does not match.!");
//     //         }
//     //     } else {
//     //         setIsErrorEmail("Email OK");
//     //         setEmailError(false);
//     //     }
//     // }
//
//
//     //email is a login multiple object local memory
//     function verifyEmail(event) {
//         const em = event.target.value;
//         setUserEmail(em);
//         if (usersArrayLocalMemory.email !== em) {
//             if (userEmail === " ") {
//                 setEmailErrorEmpty("CAN NOT BE EMPTY");
//             } else {
//                 setIsErrorEmail("Email does not match.!");
//             }
//         } else {
//             setIsErrorEmail("Email OK");
//             setEmailError(false);
//         }
//     }
//
//
//     return (
//
//
//         <div id="ItemsInLoginCustomer">
//             {/*<form className="col s12" onSubmit={() => validateCustomer()}>*/}
//
//             <div className="col s8 m3">
//
//                 <div id="cardModOpacity" className="card ">
//
//                     <form id="formInLoginCustomer" onSubmit={verifyAllFields}>
//
//                         <div className="row">
//
//                             <div id="loginInput" className="input-field col s8">
//                                 <input placeholder="" value={userEmail} type="email"
//                                        onChange={(event => verifyEmail(event))}
//                                        className="validate"/>
//                                 <label htmlFor="name"> Email</label>
//                                 {/*<p>Email (Email from database){adminUser.email}.  User nAme that is writing{userEmail}</p>*/}
//                                 {/*<p>Is error login :{isErrorEmail}</p>*/}
//
//                                 {/*<p>Login error is empty : {emailErrorEmpty}</p>*/}
//                                 {/*<p>Login Error :{emailError}</p>*/}
//                                 {/*<p id="smallerText">{adminUser.email}</p>*/}
//                                 <p id="isErrorEmail">{isErrorEmail}</p>
//
//                                 <p id="emailErrorEmpty">{emailErrorEmpty}</p>
//                                 <p id="emailError">{emailError}</p>
//                                 <p id="emailError"> Email: {userEmail}</p>
//
//                             </div>
//                         </div>
//
//
//                         <div className="row">
//                             <div className="input-field col s8">
//                                 <input placeholder="" value={userPassword} type="password"
//                                        onChange={(event => verifyName(event))}
//                                        className="validate"/>
//                                 <label htmlFor="name"> Password</label>
//                                 {/*    <p>Name (Name from database){adminUser.password}.  Username that is writing{userPassword}</p>*/}
//                                 {/*<p>Is error password :{isError}</p>*/}
//
//                                 {/*    <p>Login error is empty : {passwordErrorEmpty}</p>*/}
//                                 {/*    <p>Login Error :{passwordError}</p>*/}
//                                 {/*<p id="smallerPassText">{adminUser.password}</p>*/}
//                                 <p id="isError">{isError}</p>
//
//                                 <p id="passwordErrorEmpty">{passwordErrorEmpty}</p>
//                                 <p id="passwordError">{passwordError}</p>
//                                 <p id="emailError">Password: {userPassword}</p>
//                             </div>
//
//
//                             <p>
//                                 <input
//                                     type="text"
//                                     value={searchString}
//                                     onChange={(e) => setSearchString(e.target.value)}
//                                     placeholder="search here.."
//                                 />
//                             </p>
//
//                             <pre>
//                               {JSON.stringify(searchedArray, null, '    ')}
//                              </pre>
//
//
//                         </div>
//
//
//                         <div className="row">
//                             {/*<Link to="../CreateCustomerList">*/}
//                             <button id="buttonInLoginNew2" className="waves-effect waves-light btn #795548 brown "
//                                     type="submit" name="action">
//                                 Login
//                             </button>
//                             {/*</Link>*/}
//                         </div>
//
//                         <br/>
//                         {/*<br/>*/}
//
//                         {/*This execute fuction in the Parent function LoginCustomerForm*/}
//                         {/*<button onClick={props.validateHandler}> Hello validator Button in LoginCustomerForm</button>*/}
//
//                         {/*If you want to pass a values from child to the parent you have to use arrow function*/}
//                         {/*<button onClick={() => props.validateHandler("This ifo is from a LoginCustomer Button")}> Hello validator Button in LoginCustomerForm</button>*/}
//                     </form>
//                 </div>
//                 <br/>
//                 <br/>
//                 <br/>
//                 <br/>
//                 < br/>
//                 <br/>
//
//             </div>
//         </div>
//
//     );
// }
//
// export default LoginNew2;



