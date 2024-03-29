import React, {useState} from 'react';
import './toDoListCSS.css';
// import backgroundDocuments from "../photo/backgroundDocuments2...jpg";
/*
SmartLuggage Application
Marek Augustyn
12 May 2022
Final Project Software Developer
*/
// eslint-disable-next-line no-empty-pattern
const DocumentsList = ({}) => {

    // const [, setChecked2] = useState(false);
    //
    // // function toggle() {
    // //     setChecked2(checked2 => !checked2)
    // // }


    return (

        //Description of the list
        <div className="row">

            <div className="col m11 s10">

                <div id="titleElements">
                    <p>DOCUMENTS</p>
                </div>

                <form id="documents" action="#">


                    <p>
                        <label>
                            <input id="crossLine" type="checkbox" className="filled-in"/>
                            <span>Passport</span>
                        </label>
                    </p>

                    <p>
                        <label>
                            <input type="checkbox" className="filled-in"/>
                            <span>ID</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input type="checkbox" className="filled-in"/>
                            <span>Driver Licence</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input type="checkbox" className="filled-in"/>
                            <span>Certificate of vaccination</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input type="checkbox" className="filled-in"/>
                            <span>Travel Insurance</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input type="checkbox" className="filled-in"/>
                            <span>Insurance Card</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input type="checkbox" className="filled-in"/>
                            <span>Boarding pass</span>
                        </label>
                    </p>

                </form>

            </div>
        </div>
    )//end return

}

export default DocumentsList;