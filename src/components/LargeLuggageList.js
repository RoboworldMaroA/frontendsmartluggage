import React, {useState} from "react";
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

const LargeLuggageList=({})=>{


    const [dimensionsLargeLuggage, setDimensionsLargeLuggage] = useState("81cms (height), 119cms (width) and 119cms (depth)");

    const [checked2, setChecked2] = useState(false);

    function toggle(){
        setChecked2(checked2=> !checked2)
    }




    return(

        //Description of the list
        <div>

            <form id="mainBodyToDoList"  action="#">

                <div id="titleElements">
                    <p >LARGE LUGGAGE</p>
                </div>
                <p>
                    <label>
                        <input type="checkbox" className="filled-in" onChange={toggle} />

                        <span> Camera body.
                <p> {checked2 ? "checked": "not checked"}</p>
            </span>

                    </label>
                </p>



                <p>
                    <label>
                        <input type="checkbox" className="filled-in" />
                        <span>Size luggage : {dimensionsLargeLuggage}</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input type="checkbox" className="filled-in" />
                        <span>Check a weight: Maximum Weight is 20 Kg </span>
                    </label>
                </p>
                <p>
                    <label>
                        <input type="checkbox" className="filled-in" />
                        <span>Luggage Quantity </span>
                    </label>
                </p>



                {/*save list button subnit shoul execute function used to saving list on the computer*/}
                {/*<div className="row">*/}
                {/*    <Link to="../SaveList">*/}
                {/*        <button className="waves-effect waves-light btn #795548 brown " type="submit" name="action">*/}
                {/*            Save List(Saving not ready yet)*/}
                {/*        </button>*/}
                {/*    </Link>*/}
                {/*</div>*/}



            </form>
        </div>
    )//end return

}

export default LargeLuggageList;