import React from "react";
/*
SmartLuggage Application
Marek Augustyn
12 May 2022
Final Project Software Developer
*/
function ChildComponent(props){
    return(
        <div>
            <p>Test greet Parent pass data from FormCreateList to the DisplayList</p>
            <button onClick={()=>props.greetHandler('child')}>Greet Parent</button>
        </div>

    )
}
export default ChildComponent;