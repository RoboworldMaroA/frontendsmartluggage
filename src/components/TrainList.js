import React, {useState} from 'react';
import {type} from "@testing-library/user-event/dist/type";
import {checkNode} from "@testing-library/jest-dom/dist/utils";
import './toDoListCSS.css';
import {Link} from "react-router-dom";

/*
SmartLuggage Application
Marek Augustyn
12 May 2022
Final Project Software Developer
*/
const TrainList = ({}) => {

    const [checked2, setChecked2] = useState(false);

    // function toggle() {
    //     setChecked2(checked2 => !checked2)
    // }


    return (
        //Description of the list
        <div>

            <form id="mainBodyToDoList" action="#">

                <div id="titleElements">
                    <p>Train</p>
                </div>
                {/*    <p>*/}
                {/*        <label>*/}
                {/*            <input type="checkbox" className="filled-in" onChange={toggle} />*/}

                {/*            <span> Camera body.*/}
                {/*    <p> {checked2 ? "checked": "not checked"}</p>*/}
                {/*</span>*/}

                {/*        </label>*/}
                {/*    </p>*/}


                <p>
                    <label>
                        <input type="checkbox" className="filled-in"/>
                        <span>Bottle of water</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input type="checkbox" className="filled-in"/>
                        <span>Power Bank</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input type="checkbox" className="filled-in"/>
                        <span>Phone Charger</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input type="checkbox" className="filled-in"/>
                        <span>Food</span>
                    </label>
                </p>

                <p>
                    <label>
                        <input type="checkbox" className="filled-in"/>
                        <span>Food</span>
                    </label>
                </p>



            </form>
        </div>
    )//end return

}

export default TrainList;