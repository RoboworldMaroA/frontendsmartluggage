import React, {useState} from "react";
import {Link} from "react-router-dom"
import './allPages.css';
import CreateList from "./components/CreateList";
import Register from "./components/Register";
import LoginAdmin from "./components/LoginAdmin";
import Pay from "./components/Pay";
import LoginNew2 from "./components/LoginNew2";
// import {UserContext} from "./UserContext";
import DisplayListFunctionalComponent from "./components/DisplayListFuctionalComponent";
import Help from "./components/Help";
import ManageDestinationFunctionalComponent from "./components/ManageDestinationFuctionalComponent";
import backgroundHome from "./photo/backgroundHomePage3.jpg";
import HomeButtons from "./components/HomeButtons";
import CustomerCreateOrDisplayList from "./components/CustomerCreateOrDisplayList";
import CustomerPickListToDisplay from "./components/CustomerPickListToDisplay";

/*
SmartLuggage Application
Marek Augustyn
12 May 2022
Final Project Software Developer
*/

export function Home() {
    return(

        <div id="homePage"  className="container-fluid"
            style={{ backgroundImage: `url(${backgroundHome})`,
                        backgroundRepeat: 'repeat-no',
                        // backgroundSize:'950px',
                backgroundSize:"cover",
                opacity:0.98,

                   }}

        >


            <nav>
                <div className="nav-wrapper #5d4037 brown darken-2">
                    <a id="TitleHomePage" href="/" className="brand-logo">SmartLuggage</a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i
                        className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><Link to="displayList"> My Travel List</Link></li>
                        <li>  <Link to="/help"> Help</Link></li>
                        <li><Link to="LoginAdminPage"> Administrator</Link></li>
                        {/*<li>  <a href="http://localhost:8080/logout"> Logout</a></li>*/}
                        <li>  <a href="https://backendsmartluggage.herokuapp.com/logout"> Logout</a></li>
                    </ul>
                </div>
            </nav>


            <ul className="sidenav" id="mobile-demo">
                <li><Link to="displayList"> My Travel List</Link></li>
                <li>  <Link to="/help"> Help</Link></li>
                <li><Link to="LoginAdminPage"> Administrator</Link></li>
                {/*<li>  <a href="http://localhost:8080/logout"> Logout</a></li>*/}
                <li>  <a href="https://backendsmartluggage.herokuapp.com/logout"> Logout</a></li>
            </ul>

            <div className="row">
                <HomeButtons />
            </div>




         <br/>
            <br/>
            <br/>

        </div>

    );

}







export function LoginPage() {
    const[value,setValue] = useState("");
    return(
        <body>
        <div id="loginPage"
            // style={{ backgroundImage: `url(${backgroundLogin})`,
            //     backgroundRepeat: 'repeat-no',
            //     backgroundSize:"cover",
            //     opacity:0.96,
            // }}
            className="container-fluid">
            <nav>
                <div className="nav-wrapper #5d4037 brown darken-2">
                    <a href="/" className="brand-logo">SmartLuggage </a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i
                        className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">

                        <li><Link to="../">Home</Link></li>
                        <li><Link to="../LoginAdminPage"> Administrator </Link></li>
                        <li>  <Link to="../Help"> Help</Link></li>
                        <li>  <a href="http://localhost:8080/logout"> Logout</a></li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">

                <li><Link to="../">Home</Link></li>
                <li><Link to="../LoginAdminPage"> Administrator </Link></li>
                <li>  <Link to="../Help"> Help</Link></li>
                <li>  <a href="http://localhost:8080/logout"> Logout</a></li>
            </ul>


            <div id="loginContainer" >

                {/*<UserContext.Provider value ={{value,setValue}}>*/}
                <LoginNew2 />

                {/*</UserContext.Provider>*/}

            </div>
            <br/>
        </div>
        </body>
    );

}


export function RegisterPage() {
    const[value,setValue] = useState("Hello from context");
    return(
        <div id= "registerPage" className="container-fluid"
            //  style={
            // { backgroundImage: `url(${background})`,
            // backgroundRepeat: 'repeat-no',
            //     backgroundPositionX:-100,
            // backgroundSize:'1250px',
            //     opacity:0.92,
            //
            //
            // }}
        >
            <nav>
                <div className="nav-wrapper #5d4037 brown darken-2">
                    <a href="/" className="brand-logo">SmartLuggage </a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i
                        className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li> <Link to="../"> Home</Link></li>
                        <li>  <Link to="../help"> Help</Link></li>
                        <li>  <a href="http://localhost:8080/logout"> Logout</a></li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li> <Link to="../"> Home</Link></li>
                <li>  <Link to="../help"> Help</Link></li>
                <li>  <a href="http://localhost:8080/logout"> Logout</a></li>
            </ul>


            <div className="container">
                <div className="row">
                    <div className="col s2"></div>
                    <div className="col s8">
                        <p id="PageTitleRegister"> CREATE ACCOUNT</p>
                        {/*<p> Please complete all mandatory fields.</p>*/}
                    </div>
                    <div className="col s2"></div>
                </div>
            </div>

            <div className="row">

                {/*<UserContext.Provider value ={{value,setValue}}>*/}
                <Register />
                {/*</UserContext.Provider>*/}

            </div>
        </div>
    );
}








export function CustomerCreateOrDisplay() {

    return(
        <div id="CustomerCreateOrDisplayListPage" className="container-fluid">
            <nav>
                <div className="nav-wrapper #5d4037 brown darken-2">
                    <a href="/" className="brand-logo">SmartLuggage </a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i
                        className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li> <Link to="../"> Home</Link></li>
                        <li>  <Link to="../Pay"> Pay</Link></li>
                        <li>  <Link to="../Help"> Help</Link></li>
                        <li>  <a href="http://localhost:8080/logout"> Logout</a></li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li> <Link to="../"> Home</Link></li>
                <li>  <Link to="../Pay"> Pay</Link></li>
                <li>  <Link to="../Help"> Help</Link></li>
                <li>  <a href="http://localhost:8080/logout"> Logout</a></li>
            </ul>

            <div className="row">
                <CustomerCreateOrDisplayList />
            </div>

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    );
}


export function CustomerPickListsToDisplay() {

    return(
        <div id="CustomerCreateOrDisplayListPage" className="container-fluid">
            <nav>
                <div className="nav-wrapper #5d4037 brown darken-2">
                    <a href="/" className="brand-logo">SmartLuggage </a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i
                        className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li> <Link to="../"> Home</Link></li>
                        <li>  <Link to="../Pay"> Pay</Link></li>
                        <li>  <Link to="../Help"> Help</Link></li>
                        <li>  <a href="http://localhost:8080/logout"> Logout</a></li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li> <Link to="../"> Home</Link></li>
                <li>  <Link to="../Pay"> Pay</Link></li>
                <li>  <Link to="../Help"> Help</Link></li>
                <li>  <a href="http://localhost:8080/logout"> Logout</a></li>
            </ul>

            <div className="row">
                <CustomerPickListToDisplay/>
            </div>

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    );
}







export function CreateCustomerList() {

    return(
        <div id="createCustomerListPackYourLuggage"className="container-fluid">
            <nav>
                <div className="nav-wrapper #5d4037 brown darken-2">
                    <a href="/" className="brand-logo">SmartLuggage </a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i
                        className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li> <Link to="../"> Home</Link></li>
                        <li>  <Link to="../displayList"> Display Trips</Link></li>
                        <li>  <Link to="../Pay"> Pay</Link></li>
                        <li>  <Link to="../Help"> Help</Link></li>
                        <li>  <a href="http://localhost:8080/logout"> Logout</a></li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li> <Link to="../"> Home</Link></li>
                <li>  <Link to="../displayList"> Display Trips</Link></li>
                <li>  <Link to="../Pay"> Pay</Link></li>
                <li>  <Link to="../Help"> Help</Link></li>
                <li>  <a href="http://localhost:8080/logout"> Logout</a></li>
            </ul>

            <div className="container">
                <div className="row">
                    <div className="col s2"></div>
                    <div className="col s8">
                        <p id="PageTitle"> PACK YOUR LUGGAGE</p>
                    </div>
                    <div className="col s2"></div>
                </div>
            </div>
            <div className="row">
                <CreateList />
            </div>
        </div>
    );
}



export function DisplayTravelerList() {

    const[value,setValue] = useState("Hello from context");

    return(
        <div id={"DisplayListFirstPage"}>
        <div className="container-fluid">
            <nav>
                <div className="nav-wrapper #5d4037 brown darken-2">
                    <a href="/" className="brand-logo">SmartLuggage </a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i
                        className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li> <Link to="../"> Home</Link></li>
                        <li>  <a href="https://www.nytimes.com/guides/travel/how-to-pack-a-suitcase"> Travel Guide</a></li>
                        <li>  <a href="https://www.accuweather.com/"> Weather</a></li>
                        <li>  <Link to="../Pay"> Pay</Link></li>
                        <li>  <Link to="../help"> Help</Link></li>
                        <li>  <a href="http://localhost:8080/logout"> Logout</a></li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li> <Link to="../"> Home</Link></li>
                <li>  <a href="https://www.nytimes.com/guides/travel/how-to-pack-a-suitcase"> Travel Guide</a></li>
                <li>  <a href="https://www.accuweather.com/"> Weather</a></li>
                <li>  <Link to="../Pay"> Pay</Link></li>
                <li>  <Link to="../help"> Help</Link></li>
                <li>  <a href="http://localhost:8080/logout"> Logout</a></li>
            </ul>

            <div className="container">
                <div className="row">
                    <div className="col s2"></div>
                    <div className="col s8">
                        <p id="PageTitle"> YOUR LUGGAGE</p>
                    </div>
                    <div className="col s2"></div>
                </div>
            </div>
            <div className="row">


                {/*<UserContext.Provider value ={{value,setValue}}>*/}
                    <DisplayListFunctionalComponent />
                    {/*<DisplayList />*/}

                {/*</UserContext.Provider>*/}

            </div>
        </div>

        </div>
    );

}


// zamiast w app w tej funkcji powinienem zaimplementowac prawdopodobnie, jaka zaleta nie jestem pewny
// ponoc wszystko mialo sie wyswietlac wtedy w jednym oknie, pororbic testy
export function PayPage() {
    return(
        <body>
        <div className="container-fluid">
            <nav>
                <div className="nav-wrapper #5d4037 brown darken-2">
                    <a href="/" className="brand-logo">SmartLuggage </a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i
                        className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li> <Link to="../"> Home</Link></li>
                        <li> <Link to="../displayList"> My Travel List</Link></li>
                        <li>  <Link to="../Register"> Register</Link></li>
                        <li>  <Link to="../CreateCustomerList"> Pack Your Luggage</Link></li>
                        <li><Link to="../LoginAdminPage"> Administrator</Link></li>
                        <li>  <Link to="../help"> Help</Link></li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li> <Link to="../"> Home</Link></li>
                <li> <Link to="../displayList"> My Travel List</Link></li>
                <li><Link to="../Register">Register</Link></li>
                <li><Link to="../LoginAdminPage"> Administrator </Link></li>
                <li><Link to="../CreateCustomerList"> Pack Your Luggage  </Link> </li>
                <li>  <a href="http://localhost:8080/logout"> Logout</a></li>
            </ul>


            <div className="container">
                <div className="row">
                    <div className="col s2"></div>
                    <div className="col s8">
                        <p id="PageTitle"> PAYMENT</p>
                    </div>
                    <div className="col s2"></div>
                </div>
            </div>

            <div className="row">
                <Pay />
            </div>
        </div>
        </body>

    );

}


export function LoginAdminPage() {
    return(
        <body>
        <div className="container-fluid">
            <nav>
                <div className="nav-wrapper #5d4037 brown darken-2">
                    <a href="/" className="brand-logo">SmartLuggage </a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i
                        className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li> <Link to="../"> Home</Link></li>
                        <li><Link to="../destination">Manage Destination</Link></li>
                        <li><Link to="../help"> Help  </Link> </li>
                        <li>  <a href="http://localhost:8080/logout"> Logout</a></li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li> <Link to="../"> Home</Link></li>
                <li><Link to="../destination">Manage Destination</Link></li>
                <li><Link to="../help"> Help  </Link> </li>
                <li>  <a href="http://localhost:8080/logout"> Logout</a></li>
            </ul>


            <div className="container">
                <div className="row">
                    <div className="col s2"></div>
                    <div className="col s8">
                        <p id="PageTitle"> MANAGE USERS</p>
                    </div>
                    <div className="col s2"></div>
                </div>
            </div>

            <div className="row">
                <LoginAdmin />
            </div>
        </div>
        </body>
    );

}






export function HelpPage() {
    return(
        <body>
        <div className="container-fluid">
            <nav>
                <div className="nav-wrapper #5d4037 brown darken-2">
                    <a href="/" className="brand-logo">SmartLuggage </a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i
                        className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li> <Link to="../"> Home</Link></li>
                        <li>  <Link to="../Register"> Register</Link></li>
                        <li>  <Link to="../CreateCustomerList"> Pack You Luggage</Link></li>
                        <li> <Link to="../displayList"> My Travel List</Link></li>
                        <li><Link to="../LoginAdminPage"> Administrator </Link></li>
                        <li>  <a href="http://localhost:8080/logout"> Logout</a></li>
                        {/*<li>  <Link to="../help"> Help</Link></li>*/}
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li> <Link to="../"> Home</Link></li>
                <li> <Link to="../displayList"> My Travel List</Link></li>
                <li><Link to="../Register">Register</Link></li>
                <li><Link to="../LoginAdminPage"> Administrator Account </Link></li>
                <li><Link to="../CreateCustomerList"> Create List  </Link> </li>
                <li>  <a href="http://localhost:8080/logout"> Logout</a></li>
            </ul>


            <div className="container">
                <div className="row">
                    <div className="col s2"></div>
                    <div className="col s8">
                        <p id="PageTitle"> FAQ</p>
                    </div>
                    <div className="col s2"></div>
                </div>
            </div>

            <div className="row">
                <Help />
            </div>
        </div>
        </body>

    );

}


export function DestinationPage() {


    const[value,setValue] = useState();
    return(
        <body>
        <div className="container-fluid">
            <nav>
                <div className="nav-wrapper #5d4037 brown darken-2">
                    <a href="/" className="brand-logo">SmartLuggage </a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i
                        className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li> <Link to="../"> Home</Link></li>
                        {/*<li><Link to="../destination">Manage Destination</Link></li>*/}
                        <li><Link to="../LoginAdminPage"> Display Users </Link></li>
                        <li><Link to="../help"> Help  </Link> </li>
                        {/*<li>  <a href="http://localhost:8080/logout"> Logout</a></li>*/}
                        <li>  <a href="https://frontendsmartluggage.herokuapp.com/logout"> Logout</a></li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li> <Link to="../"> Home</Link></li>
                {/*<li><Link to="../destination">Manage Destination</Link></li>*/}
                <li><Link to="../LoginAdminPage"> Display Users </Link></li>
                <li><Link to="../help"> Help  </Link> </li>
                {/*<li>  <a href="http://localhost:8080/logout"> Logout</a></li>*/}
                <li>  <a href="https://frontendsmartluggage.herokuapp.com/logout"> Logout</a></li>
            </ul>


            <div className="container">
                <div className="row">
                    <div className="col s2"></div>
                    <div className="col s8">
                        <p id="PageTitle"> MANAGE DESTINATION </p>
                    </div>
                    <div className="col s2"></div>
                </div>
            </div>

            <div className="row">


                {/*<UserContext.Provider value ={{value,setValue}}>*/}
                <ManageDestinationFunctionalComponent />
                {/*</UserContext.Provider>*/}

            </div>
        </div>
        </body>
    );

}

export function PageNotExist() {
    return(
        <div>
            <h1> This page not exist!!! </h1>
        </div>
    );

}





