
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
const Spain=({})=>{




    const [checked2, setChecked2] = useState(false);

    function toggle(){
        setChecked2(checked2=> !checked2)
    }




    return(

        //Description of the list
        <div className="row">
            <div className="col m10 s12">
                <div id="titleElements">
                    <p>SPAIN</p>
                </div>

            <form id="spain"  action="#">


                <p>
                    <label>
                        <input type="checkbox" className="filled-in" onChange={toggle} />

                        <span> Waterproof Trousers.
                <p> {checked2 ? "checked": "not checked"}</p>
            </span>

                    </label>
                </p>



                <p>
                    <label>
                        <input type="checkbox" className="filled-in" />
                        <span>Currency - Euro  </span>
                    </label>
                </p>
                <p>
                    <label>
                        <input type="checkbox" className="filled-in" />
                        <span>Sun Glasses</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input type="checkbox" className="filled-in" />
                        <span>Shorts</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input type="checkbox" className="filled-in" />
                        <span>Polo Shirt</span>
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
        </div>
    )//end return

}

export default Spain;