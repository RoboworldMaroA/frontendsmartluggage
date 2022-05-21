
import React, {useState}  from 'react';
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
const SmallLuggageList=({})=>{


    const [dimensionsSmallLuggage, setDimensionsSmallLuggage] = useState("Passengers bring 1 small cabin bag which must fit under the seat in front of them (40cm x 20cm x 25cm)");

    const [smallLuggageQuantity, setSmallLuggageQuantity] = useState(1);
    const [checked2, setChecked2] = useState(false);

    function toggle(){
        setChecked2(checked2=> !checked2)
    }




    return(

        //Description of the list
        <div>

            <form id="mainBodyToDoList"  action="#">

                <div id="titleElements">
                    <p >SMALL LUGGAGE - ON BOARD UNDER THE SIT</p>
                </div>
                <p>
                    <label>
                        <input type="checkbox" className="filled-in" onChange={toggle} />

                        <span> Some airlines check if you not exceed more then 1 bag so if you have  shopping on TAX Free zone try to put the all item to the one bag
                <p> {checked2 ? "checked": "not checked"}</p>
            </span>

                    </label>
                </p>



                <p>
                    <label>
                        <input type="checkbox" className="filled-in" />
                        <span>Size luggage : {dimensionsSmallLuggage}</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input type="checkbox" className="filled-in" />
                        <span>Check a weight: Maximum Weight is 5 Kg </span>
                    </label>
                </p>
                <p>
                    <label>
                        <input type="checkbox" className="filled-in" />
                        <span>Luggage Quantity {smallLuggageQuantity} </span>
                        <button>Add More Luggage</button>
                    </label>
                </p>
                <p>
                    <label>
                        <input type="checkbox" className="filled-in" />
                        <span>Small luggage is allowed for all airlines bot make sure that exceeded more then 1 small bag per person </span>
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

export default SmallLuggageList;