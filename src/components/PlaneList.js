
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
const PlaneList=({})=>{




    const [checked2, setChecked2] = useState(false);

    function toggle(){
        setChecked2(checked2=> !checked2)
    }




    return(

        //Description of the list
        <div>

            <form id="mainBodyToDoList"  action="#">


                <div className="row">
                {/*    <div className="two-column-summary">*/}
                {/*<div id="iconPlane">*/}


                {/*    <i className="material-icons prefix">flight</i>*/}
                {/*</div>*/}
                    <div id="titleElements">
                        <p >PLANE</p></div>
                {/*</div>*/}

                {/*</div>*/}

                <p>
                    <label>
                        <input type="checkbox" className="filled-in" onChange={toggle} />

                        <span> The passenger may take with him liquids with a capacity not exceeding 100 ml.
                <p> {checked2 ? "checked": "not checked"}</p>
            </span>

                    </label>
                </p>



                <p>
                    <label>
                        <input type="checkbox" className="filled-in" />
                        <span>When traveling by plane, make sure you do not need a special protective mask.</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input type="checkbox" className="filled-in" />
                        <span>Power Bank</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input type="checkbox" className="filled-in" />
                        <span>Charger</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input type="checkbox" className="filled-in" />
                        <span>It is best to buy water or drinks at the airport after check-in.</span>
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

                </div>

            </form>
        </div>
    )//end return

}

export default PlaneList;