import React, {useState} from 'react';
import './toDoListCSS.css';
/*
SmartLuggage Application
Marek Augustyn

*/
const PlaneList = () => {


    const [checked2, setChecked2] = useState(false);

    function toggle() {
        setChecked2(checked2 => !checked2)
    }


    return (

        //Description of the list
        <div>

            <form id="mainBodyToDoList" action="#">


                <div className="row">

                    <div id="titleElements">
                        <p>PLANE</p></div>

                    <p>
                        <label>
                            <input type="checkbox" className="filled-in" onChange={toggle}/>

                            <span> The passenger may take with him liquids with a capacity not exceeding 100 ml.
                <p> {checked2 ? "checked" : "not checked"}</p>
            </span>

                        </label>
                    </p>


                    <p>
                        <label>
                            <input type="checkbox" className="filled-in"/>
                            <span>When traveling by plane, make sure you do not need a special protective mask.</span>
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
                            <span>Charger</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input type="checkbox" className="filled-in"/>
                            <span>It is best to buy water or drinks at the airport after check-in.</span>
                        </label>
                    </p>

                </div>

            </form>
        </div>
    )//end return

}

export default PlaneList;