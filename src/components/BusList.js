
import React, {useState}  from 'react';
import './toDoListCSS.css';

/*
SmartLuggage Application
Marek Augustyn
12 May 2022
Final Project Software Developer
*/
const BusList=({})=>{

    const [checked2, setChecked2] = useState(false);

    function toggle(){
        setChecked2(checked2=> !checked2)
    }

    return(

        //Description of the list
        <div>

            <form id="mainBodyToDoList"  action="#">

                <div id="titleElements">
                    <p >BUS</p>
                </div>
                <p>
                    <label>
                        <input type="checkbox" className="filled-in" onChange={toggle} />

                        <span> Luggage limit weight is up to 30 kg.
                <p> {checked2 ? "checked": "not checked"}</p>
            </span>

                    </label>
                </p>

                <p>
                    <label>
                        <input type="checkbox" className="filled-in" />
                        <span>Slipping pillow</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input type="checkbox" className="filled-in" />
                        <span>Small Bag keep on board with sandwiches , snakes and drinks.</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input type="checkbox" className="filled-in" />
                        <span>Tablet with a movies or books.</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input type="checkbox" className="filled-in" />
                        <span>Thin blanket</span>
                    </label>
                </p>

                <p>
                    <label>
                        <input type="checkbox" className="filled-in" />
                        <span>Comfortable clothes</span>
                    </label>
                </p>

                <p>
                    <label>
                        <input type="checkbox" className="filled-in" />
                        <span>Tissue</span>
                    </label>
                </p>

                <p>
                    <label>
                        <input type="checkbox" className="filled-in" />
                        <span>Hand sanitizer</span>
                    </label>
                </p>

            </form>
        </div>
    )//end return

}

export default BusList;