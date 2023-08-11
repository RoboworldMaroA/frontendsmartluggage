
import React, {useState}  from 'react';
import './toDoListCSS.css';


const MediumLuggageList=({})=>{


    const [dimensionsMediumLuggage] = useState("Passengers with Priority & 2 Cabin Bags, a Regular Fare/Flexi Plus or a connecting flight ticket can bring 1 small cabin bag which must fit under the seat in front of them (40cm x 20cm x 25cm). Priority customers can also bring an additional 10kg bag on board which must fit into the baggage sizer " +
        "(not exceeding 10kg and dimensions 55cm x 40cm x 20cm) and will be stored in the overhead locker.");

    const [mediumLuggageQuantity] = useState(1)
    const [checked2, setChecked2] = useState(false);

    function toggle(){
        setChecked2(checked2=> !checked2)
    }


    return(

        //Description of the list
        <div>

            <form id="mainBodyToDoList"  action="#">

                <div id="titleElements">
                    <p >MEDIUM LUGGAGE</p>
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
                        <span>Size luggage : {dimensionsMediumLuggage}</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input type="checkbox" className="filled-in" />
                        <span>Check a weight: Maximum Weight is 10 Kg </span>
                    </label>
                </p>
                <p>
                    <label>
                        <input type="checkbox" className="filled-in" />
                        <span>Luggage Quantity {mediumLuggageQuantity} </span>
                        <button>Add More Luggage</button>
                    </label>
                </p>
                <p>
                    <label>
                        <input type="checkbox" className="filled-in" />
                        <span>Did you purchased proper option that allows you to take a : {mediumLuggageQuantity} luggage(s) </span>
                    </label>
                </p>



            </form>
        </div>
    )//end return

}

export default MediumLuggageList;