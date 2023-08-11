
import React, {useState}  from 'react';

import './toDoListCSS.css';

/*
SmartLuggage Application
Marek Augustyn
s
*/
const Spring=({})=>{

    const [hoodiesQuantity] = useState(1);
    const [sweterQuantity] = useState(1);

    // const [jacketQuantity, setJacketQuantity] = useState(1);


    const [checked2, setChecked2] = useState(false);

    function toggle(){
        setChecked2(checked2=> !checked2)
    }




    return(

        //Description of the list
        <div>

            <form id="mainBodyToDoList"  action="#">

                <div id="titleElements">
                    <p >SPRING</p>
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
                        <span>Hoodies : {hoodiesQuantity}</span>
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
                        <span>Hat  </span>
                        <button>Add More </button>
                    </label>
                </p>
                <p>
                    <label>
                        <input type="checkbox" className="filled-in" />
                    <span> Sweater or warm blouse {sweterQuantity}</span>
                    </label>
                </p>





            </form>
        </div>
    )//end return

}

export default Spring;