
import React, {useState}  from 'react';
import './toDoListCSS.css';

/*
SmartLuggage Application
Marek Augustyn

*/
const Poland=({})=>{

const [exchangeRate, setExchangeRate]= useState(4.5)


    const [checked2, setChecked2] = useState(false);

    function toggle(){
        setChecked2(checked2=> !checked2)
    }




    return(

        //Description of the list
        <div>

            <form id="mainBodyToDoList"  action="#">

                <div id="titleElements">
                    <p>POLAND</p>
                </div>
                <p>
                    <label>
                        <input type="checkbox" className="filled-in" onChange={toggle} />

                        <span> WINTER COLD, SUMMER RATHER HOT WITH OCCASIONAL RAIN AND STORMS.
                <p> {checked2 ? "checked": "not checked"}</p>
            </span>

                    </label>
                </p>



                <p>
                    <label>
                        <input type="checkbox" className="filled-in" />
                        <span>PLN - the currency of POLAND  is the POLISH ZŁOTY. </span>
                        <span>EXCHANGE RATE IS : {exchangeRate} for 1 Euro </span>
                    </label>
                </p>
                <p>
                    <label>
                        <input type="checkbox" className="filled-in" />
                        <span>I</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input type="checkbox" className="filled-in" />
                        <span>zzzzz</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input type="checkbox" className="filled-in" />
                        <span>zzzzz</span>
                    </label>
                </p>



            </form>
        </div>
    )//end return

}

export default Poland;