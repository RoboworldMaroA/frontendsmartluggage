
import React, {useState}  from 'react';
import {type} from "@testing-library/user-event/dist/type";
import {checkNode} from "@testing-library/jest-dom/dist/utils";
import './toDoListCSS.css';
import {Link} from "react-router-dom";
import './EssentialCSS.css';
/*
SmartLuggage Application
Marek Augustyn
12 May 2022
Final Project Software Developer
*/
const EssentialList=({})=>{


    const [checked2, setChecked2] = useState(false);
    const [maskWeight, setMaskWeight] = useState(0.02);

    function toggle(){
        setChecked2(checked2=> !checked2)
    }



    return(

        //Description of the list
        <div className="row">
            <div className="col m10 s12">
                <div id="titleElements">
                    <p>ESSENTIALS</p>
                </div>

                <form id="essential"  action="#">


       <div id="checkboxColor">

           <div className="row">
        <label>
            <div id="checkboxMask">
            <input   type="checkbox" className="filled-in" onChange={toggle} />
            <span>{checked2 ? <p id="checkboxColor">
                    "Face Mask packed"
                    </p>
                    : "Face Mask"}
                </span>
                </div>
            </label>
            <div id="quantityMask"> Quantity</div>
               {/*<div id="weightMask"> Weigh {maskWeight}</div>*/}
       </div>
        {/*<p>*/}
        {/*    <label>*/}
        {/*        <input type="checkbox" className="filled-in" onChange={toggle}/>*/}
        {/*        <span>{checked2 ? <p id="checkboxColor">*/}
        {/*                "Underwear packed"*/}
        {/*            </p>*/}
        {/*            : "Underwear"}*/}
        {/*        </span>*/}
        {/*    </label>*/}
        {/*</p>*/}

           <div className="row">

            <label>
                <div id="checkboxUnderwear">

                <input type="checkbox" className="filled-in" />
                    <span>    Underwear  </span>
                </div>
            </label>


            <div id="quantityUnderwear"> Quantity</div>
           </div>

          </div>





           <div className="row">

            <label>
                <div id="checkboxUnderwear">

                <input type="checkbox" className="filled-in" />
                <span>Tooth Brush</span>
                </div>
            </label>
               <div id="quantityUnderwear"> Quantity</div>
           </div>




               <div className="row">
            <label>
                <div id="checkboxUnderwear">
                <input type="checkbox" className="filled-in" />
                <span>Socks</span>
                </div>
            </label>
               <div id="quantityUnderwear"> Quantity</div>
               </div>


                   <div className="row">
            <label>
                <div id="checkboxUnderwear">
                <input type="checkbox" className="filled-in" />
                <span>Medications</span>
                </div>
            </label>
                       <div id="quantityUnderwear"> Quantity</div>

                   </div>



        <div className="row">
            <label>
                <div id="checkboxUnderwear">
                <input type="checkbox" className="filled-in" />
                <span>Cell Phone</span>
                </div>
            </label>
            <div id="quantityUnderwear"> Quantity</div>
        </div>



        <div className="row">
            <label>
                <div id="checkboxUnderwear">
            <input type="checkbox" className="filled-in" />
            <span>Cell Phone Charger</span>
                </div>
        </label>
            <div id="quantityUnderwear"> Quantity</div>
        </div>



        <div className="row">
            <label>
                <div id="checkboxUnderwear">
                <input type="checkbox" className="filled-in" />
                <span>Wallet</span>
                </div>
            </label>
            <div id="quantityUnderwear"> Quantity</div>
        </div>


        <div className="row">

            <label>
                <div id="checkboxUnderwear">
                <input type="checkbox" className="filled-in" />
                    <span>Cash</span>
                </div>
            </label>
        <div id="quantityUnderwear"> Quantity</div>
</div>



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

export default EssentialList;