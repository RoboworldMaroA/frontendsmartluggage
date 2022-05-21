
import React, {useState}  from 'react';
import {type} from "@testing-library/user-event/dist/type";
import {checkNode} from "@testing-library/jest-dom/dist/utils";
import './toDoListCSS.css';
import 'materialize-css';
import {Link} from "react-router-dom";
// import backgroundDocuments from "../photo/backgroundDocuments2...jpg";
/*
SmartLuggage Application
Marek Augustyn
12 May 2022
Final Project Software Developer
*/
import './EssentialCSS.css';


const ElectronicEquipment=({})=>{

    const [checked2, setChecked2] = useState(false);
    const [underwearQty, setUnderwearQty] = useState(5);

    function toggle(){
        setChecked2(checked2=> !checked2)
    }

    function changeQuantity() {
        setUnderwearQty(9);
    }

    function changeQuantityMinus(event) {
        setUnderwearQty(underwearQty-1);
        event.preventDefault();
    }

    function changeQuantityPlus(event) {
        setUnderwearQty(underwearQty+1);
        event.preventDefault();
    }


    return(

        //Description of the list
<div id="blockDocuments" className="row">

    <div  className="col m10 s10">

        {/*<div id="titleElements">*/}
        {/*    <p>DOCUMENTS</p>*/}
        {/*</div>*/}


        {/*<div  className="row">*/}
        {/*    <div className="col s12 m6">*/}
                <div   className="card">
                    <div className="card-image">
                        <img src={require("../photo/backgroundDocuments2.jpg")} />
                            <span className="card-title">ELECTRONIC EQUIPMENTS</span>
                            {/*<a className="btn-floating halfway-fab waves-effect waves-light red">*/}
                            {/*    <a className="btn-floating waves-effect">*/}
                            {/*    <i className="material-icons"> add</i>*/}
                    </div>
                    <div className="card-content">
                        {/*<p>I am a very simple card. I am good at containing small bits of information. I am convenient*/}
                        {/*    because I require little markup to use effectively.</p>*/}

                        <form id="documents"  action="#">
                            <label>
                            <div id="toRight" ><button onClick={(event)=>changeQuantityMinus(event)}>-</button><button> {underwearQty} </button><button onClick={(event)=>changeQuantityPlus(event)}>+</button> </div>
                            </label>
                            <p>
                                <label>
                                    <input id="crossLine" type="checkbox" className="filled-in" />
                                    <span>Power-bank</span>
                                    <div id="toRight" ><button onClick={(event)=>changeQuantityMinus(event)}>-</button><button> {underwearQty} </button><button onClick={(event)=>changeQuantityPlus(event)}>+</button> </div>
                                </label>
                            </p>

                            <p>
                                <label>
                                    <input  type="checkbox" className="filled-in"/>
                                    <span>Smartphone</span>
                                </label>
                            </p>

                            <label>
                                <div id="toRight">
                                    <button onClick={(event) => changeQuantityMinus(event)}>-</button>
                                    <button> {underwearQty} </button>
                                    <button onClick={(event) => changeQuantityPlus(event)}>+</button>
                                </div>
                            </label>
                            <p>
                                <label>
                                    <input id="crossLine" type="checkbox" className="filled-in"/>
                                    <span>House keys</span>
                                    <div id="toRight">
                                        <button onClick={(event) => changeQuantityMinus(event)}>-</button>
                                        <button> {underwearQty} </button>
                                        <button onClick={(event) => changeQuantityPlus(event)}>+</button>
                                    </div>
                                </label>
                            </p>

                            <p>
                                <label>
                                    <input id="crossLine" type="checkbox" className="filled-in"/>
                                    <span>Cash</span>
                                    <div id="toRight">
                                        <button onClick={(event) => changeQuantityMinus(event)}>-</button>
                                        <button> {underwearQty} </button>
                                        <button onClick={(event) => changeQuantityPlus(event)}>+</button>
                                    </div>
                                </label>
                            </p>

                            <p>
                                <label>
                                    <input id="crossLine" type="checkbox" className="filled-in"/>
                                    <span>Hotel booking confirmation</span>
                                    <div id="toRight">
                                        <button onClick={(event) => changeQuantityMinus(event)}>-</button>
                                        <button> {underwearQty} </button>
                                        <button onClick={(event) => changeQuantityPlus(event)}>+</button>
                                    </div>
                                </label>
                            </p>

                            <p>
                                <label>
                                    <input type="checkbox" className="filled-in"/>
                                    <span> Plane Ticket </span>
                                </label>
                            </p>

                            {/*???*/}


                            {/*??*/}

                            <label>
                                <div id="toRight">
                                    <button onClick={(event) => changeQuantityMinus(event)}>-</button>
                                    <button> {underwearQty} </button>
                                    <button onClick={(event) => changeQuantityPlus(event)}>+</button>
                                </div>
                            </label>
                            <p>
                                <label>
                                    <input id="crossLine" type="checkbox" className="filled-in"/>
                                    <span>Driving Licence</span>
                                    <div id="toRight">
                                        <button onClick={(event) => changeQuantityMinus(event)}>-</button>
                                        <button> {underwearQty} </button>
                                        <button onClick={(event) => changeQuantityPlus(event)}>+</button>
                                    </div>
                                </label>
                            </p>


                            <p>
                                <label>
                                    <input id="crossLine" type="checkbox" className="filled-in"/>
                                    <span>Certificate of Vaccination for COVID 19</span>
                                    <div id="toRight">
                                        <button onClick={(event) => changeQuantityMinus(event)}>-</button>
                                        <button> {underwearQty} </button>
                                        <button onClick={(event) => changeQuantityPlus(event)}>+</button>
                                    </div>
                                </label>
                            </p>

                            <p>
                                <label>
                                    <input id="crossLine" type="checkbox" className="filled-in"/>
                                    <span>Travel Insurance</span>
                                    <div id="toRight">
                                        <button onClick={(event) => changeQuantityMinus(event)}>-</button>
                                        <button> {underwearQty} </button>
                                        <button onClick={(event) => changeQuantityPlus(event)}>+</button>
                                    </div>
                                </label>
                            </p>

                            <p>
                                <label>
                                    <input type="checkbox" className="filled-in"/>
                                    <span>Boarding Pass</span>
                                </label>
                            </p>

                            {/*???*/}






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
                {/*</div>*/}
            {/*</div>*/}

        </div>












    {/*<form id="documents"  action="#">*/}



    {/*    <p>*/}
    {/*        <label>*/}
    {/*            <input id="crossLine" type="checkbox" className="filled-in" />*/}
    {/*            <span>Passport</span>*/}
    {/*        </label>*/}
    {/*    </p>*/}

    {/*          <p>*/}
    {/*        <label>*/}
    {/*            <input  type="checkbox" className="filled-in"/>*/}
    {/*            <span>ID</span>*/}
    {/*        </label>*/}
    {/*    </p>*/}
    {/*    <p>*/}
    {/*        <label>*/}
    {/*            <input type="checkbox" className="filled-in" />*/}
    {/*            <span>Driver Licence</span>*/}
    {/*        </label>*/}
    {/*    </p>*/}
    {/*    <p>*/}
    {/*        <label>*/}
    {/*            <input type="checkbox" className="filled-in" />*/}
    {/*            <span>Certificate of vaccination</span>*/}
    {/*        </label>*/}
    {/*    </p>*/}
    {/*    <p>*/}
    {/*        <label>*/}
    {/*            <input type="checkbox" className="filled-in" />*/}
    {/*            <span>Travel Insurance</span>*/}
    {/*        </label>*/}
    {/*    </p>*/}
    {/*    <p>*/}
    {/*        <label>*/}
    {/*            <input type="checkbox" className="filled-in" />*/}
    {/*            <span>Insurance Card</span>*/}
    {/*        </label>*/}
    {/*    </p>*/}
    {/*    <p>*/}
    {/*        <label>*/}
    {/*            <input type="checkbox" className="filled-in" />*/}
    {/*            <span>Boarding pass</span>*/}
    {/*        </label>*/}
    {/*    </p>*/}


        {/*save list button subnit shoul execute function used to saving list on the computer*/}
        {/*<div className="row">*/}
        {/*    <Link to="../SaveList">*/}
        {/*        <button className="waves-effect waves-light btn #795548 brown " type="submit" name="action">*/}
        {/*            Save List(Saving not ready yet)*/}
        {/*        </button>*/}
        {/*    </Link>*/}
        {/*</div>*/}
    {/*</form>*/}





    </div>
</div>
    )

}

export default ElectronicEquipment;