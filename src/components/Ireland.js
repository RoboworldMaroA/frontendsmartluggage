
import React, {useState}  from 'react';
import {type} from "@testing-library/user-event/dist/type";
import {checkNode} from "@testing-library/jest-dom/dist/utils";
import './toDoListCSS.css';
import {Link} from "react-router-dom";


const Ireland=({})=>{




    const [checked2, setChecked2] = useState(false);

    function toggle(){
        setChecked2(checked2=> !checked2)
    }




    return(

        //Description of the list
        <div>

            <form id="mainBodyToDoList"  action="#">

                <div id="titleElements">
                    <p>IRELAND</p>
                </div>
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
                        <span>Euro - the currency of ireland is the euro. </span>
                    </label>
                </p>
                <p>
                    <label>
                        <input type="checkbox" className="filled-in" />
                        <span>Waterproof Jacket</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input type="checkbox" className="filled-in" />
                        <span>SPRING - February, March, April</span>
                        <span>SUMMER - May, June,July</span>
                        <span>AUTUMN - August, September, October</span>
                        <span>WINTER - November, December, January</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input type="checkbox" className="filled-in" />
                        <span>zzzzz</span>
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

export default Ireland;