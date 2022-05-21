import React, {useEffect, useState} from 'react';
import DocumentsList from "./DocumentsList";
import BeachList from "./BeachList";
//i moved data from a component Display state component, and
// I can add here what I want to do when I click a checkboxes
/*
SmartLuggage Application
Marek Augustyn
12 May 2022
Final Project Software Developer
*/
const ToDoListComponents = (props) => {
    const [toDoList, setToDoList] = useState(props.data2);
    // const [toDoListTrip, setToDoListTrip] = useState(props.dataTrip2);


    //not updating
    function updateIsDone() {
       setToDoList({ ... toDoList, documentsList: !toDoList.documentsList});
    }


    useEffect(()=> {
        console.log("item was updated state is:", toDoList.documentsList );},[toDoList]);



    return (
        <div>


            {/*<p> User ID {toDoList.id} Name: {toDoList.name} LISTS OF ITEAMS</p>*/}
            <div>
                <input type="checkbox" checked={toDoList.documentsList}
                       onClick={updateIsDone}/>
                <span> Display documents for user  user {toDoList.id} {toDoList.name} </span>
            </div>

            <div>
                <input type="checkbox" checked={toDoList.beachList}
                       onClick={updateIsDone}/>
                <span> Display Beach List for user  user {toDoList.id} {toDoList.name} </span>
            </div>

            {/*<div>*/}
            {/*    <input type="checkbox" checked={toDoListTrip.camera}*/}
            {/*           onClick={updateIsDoneTrip}/>*/}
            {/*    <span> Display documents for user  user {toDoListTrip.id} {toDoListTrip.name} </span>*/}
            {/*</div>*/}


            <p> Display LIST for USER: ID {toDoList.id} NAME: {toDoList.name}</p>
            <div className="row">
                {toDoList.documentsList ?
                    <DocumentsList/>
                    : null
                }
            </div>

            <div className="row">
                {toDoList.beachList ?
                    <BeachList/>
                    : null
                }
            </div>
















        </div>
    );
};

export default ToDoListComponents;



