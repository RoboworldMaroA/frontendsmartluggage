// import React, {useEffect, useState} from 'react';
// import {type} from "@testing-library/user-event/dist/type";
// import {checkNode} from "@testing-library/jest-dom/dist/utils";
// import './toDoListCSS.css';
// import {Link} from "react-router-dom";
// import './ElectronicEquipment2.css';
// import CameraList from "./CameraList";
// import ToDoListComponentsTrip from "./ToDoListComponentsTrip";
//
//
// const ElectronicEquipment2 = ({props}) => {
//
//
//
//     // const [camera, setCamera] = useState(props);
//
//
//
//
//     const [errorNewItem, setErrorNewItem] = useState(" ");
//
//     // const [items, setItems] = useState([]);
//     const [inputValue, setInputValue] = useState('');
//
//     const [items, setItems] = useState([
//         {itemName: 'Phone', quantity: 1, isSelected: false, weight: 0.3},
//         {itemName: 'Phone Charger', quantity: 1, isSelected: false, weight: 0.3},
//         {itemName: 'Earphones', quantity: 1, isSelected: false, weight: 0.3},
//         // {itemName: 'Tablet', quantity: 0, isSelected: false, weight: 0.3},
//         // {itemName: 'Photo Camera + battery', quantity: 0, isSelected: false, weight: 0.3},
//         // {itemName: 'Photo Camera Equipment', quantity: 0, isSelected: false, weight: 0.3},
//         {itemName: 'Powerbank', quantity: 1, isSelected: false, weight: 0.3},
//         // {itemName: 'Drone + battery', quantity: 0, isSelected: false, weight: 0.3},
//         // {itemName: 'Drone Equipment', quantity: 0, isSelected: false, weight: 0.3},
//         // {itemName: 'Camcorder', quantity: 0, isSelected: false, weight: 0.3},
//         // {itemName: 'Camcorder Equipment', quantity: 0, isSelected: false, weight: 0.3},
//         // {itemName: 'Additional Battery', quantity: 0, isSelected: false, weight: 0.3},
//
//
//     ]);
//
//
//     //grab data from local storage
//     useEffect(() => {
//
//             const data = window.localStorage.getItem('EQUIPMENT_DATA');
//             // if ( data !== null ) setPassportQty(JSON.parse(data));
//             setItems(JSON.parse(data));
//
//             // const data2 = window.localStorage.getItem('ITEM_CHECKED_ESSENTIAL');
//             // if ( data !== null ) setItems(JSON.parse(data));
//             // setSelected(JSON.parse(data2));
//             //     console.log('data2',data2);
//         }, []
//     )
//
//
//     //save data to local storage
//     useEffect(() => {
//             console.log(items);
//             window.localStorage.setItem('EQUIPMENT_DATA', JSON.stringify(items));
//
//         }, [items]
//         // },[passportQty]
//
//     )
//
//
//
//
//     //get trip detal ftom database
//     //
//     // const [trip, setTrip] = useState(null);
//     //
//     // useEffect(() => {
//     //     //do something when loading
//     //     console.log("yoyw yow do something from useeffect")
//     //     fetch("api/v1/trip/").then((response) => response.json()).then((dataTrip) => {
//     //         console.log("List of items in the trip", dataTrip);
//     //         setTrip(dataTrip);
//     //     });
//     // }, ["hI trip"]);
//
//
//
//
//
//     // function to add a new item
//     const handleAddItemButtonEquipment = () => {
//
//         const newItem = {
//             itemName: inputValue,
//             quantity: 1,
//             isSelected: false,
//             weight: 0.3,
//
//         };
//
//         const newItems = [...items, newItem];
//         setItems(newItems);
//         setInputValue('');
//         calculateTotal();
//         calculateTotalWeight();
//
//
//     };
//
//
//     const handleIncreaseQuantity = (index) => {
//         // alert("button increase was clicked ")
//         const newItems = [...items];
//         newItems[index].quantity++;
//         setItems(newItems);
//         calculateTotal();
//         calculateTotalWeight();
//
//         // event.preventDefault();
//
//     }
//
//     const handleDecreaseQuantity = (index) => {
//         // alert("button decrease was clicked ")
//         const newItems = [...items];
//         if (newItems[index].quantity <= 0) {
//             newItems[index].quantity++;
//             setItems(newItems);
//             calculateTotal();
//             calculateTotalWeight();
//         }
//
//         newItems[index].quantity--;
//         setItems(newItems);
//         calculateTotal();
//         calculateTotalWeight();
//
//
//     }
//
//
//     const [totalItemCount, setTotalItemCount] = useState(6);
//
//     const calculateTotal = () => {
//         const totalItemCount = items.reduce((total, item) => {
//             return total + item.quantity;
//         }, 0);
//
//         setTotalItemCount(totalItemCount);
//     };
//
//
//     const handleRemoveItem = (index) => {
//         // alert("button decrease was clicked ")
//         const newItems = [...items];
//         // newItems[index].quantity--;
//         // setItems(newItems);
//         if (index > -1) {
//             newItems.splice(index, 1);
//             setItems(newItems);
//
//         }
//
//         calculateTotal();
//         calculateTotalWeight();
//
//     }
//
//
//     const [totalItemWeight, setTotalItemWeight] = useState(1);
//
//     const calculateTotalWeight = () => {
//         const totalItemWeight = items.reduce((total, item) => {
//             return total + item.weight * item.quantity;
//         }, 0);
//
//         setTotalItemWeight(totalItemWeight);
//     };
//
//
//     const validateInputNewItem = (event) => {
//         const newItem = event.target.value;
//         if (newItem) {
//             setErrorNewItem("");
//         }
//         setInputValue(newItem);
//         setErrorNewItem(" ");
//     }
//
//
//     const validateChecked = (index) => {
//         const newItems = [...items];
//         newItems[index].isSelected = !newItems[index].isSelected;
//         setItems(newItems);
//     };
//
//
//     return (
//
//         <div id="blockEssential" className="row">
//             <div className="col m10 s10">
//                 <div className="card">
//                     <div className="card-image">
//                         <img src={require("../photo/backgroundDocuments2.jpg")}/>
//                         <span className="card-title">ELECTRONIC EQUIPMENT</span>
//                     </div>
//                     <div className="card-content">
//
//                         <form id="documents" action="#">
//                             <div className='main-container'>
//                                 <div className='item-list'>
//                                     {items.map((item, index) => (
//                                         <div className={"checkBox"}>
//                                             {item.isSelected ? (
//                                                 <>
//                                                     <p>
//                                                         <label>
//                                                             <input id="colorChecked" checked="true" type="checkbox"
//                                                                    className={"filled-in"}
//                                                                    onClick={() => validateChecked(index)}/>
//                                                             <span>{item.itemName}</span>
//                                                             <div id="toRight">
//                                                                 <button className="decreaseQuantity"
//                                                                         onClick={(event) => handleDecreaseQuantity(index, event.preventDefault())}>-
//                                                                 </button>
//                                                                 <button className="Quantity"
//                                                                         onClick={(event) => event.preventDefault()}> {item.quantity} </button>
//                                                                 <button className="increaseQuantity"
//                                                                         onClick={(event) => handleIncreaseQuantity(index, event.preventDefault())}>+
//                                                                 </button>
//                                                                 <button
//                                                                     onClick={(event) => handleRemoveItem(index, event.preventDefault())}>Remove
//                                                                 </button>
//                                                             </div>
//                                                         </label>
//                                                     </p>
//                                                 </>
//                                             ) : (
//
//                                                 <p>
//                                                     <label>
//                                                         <input id="colorChecked" type="checkbox" className="filled-in"
//                                                                onClick={() => validateChecked(index)}/>
//                                                         <span>{item.itemName}</span>
//                                                         <div id="toRight">
//                                                             <button className="decreaseQuantity"
//                                                                     onClick={(event) => handleDecreaseQuantity(index, event.preventDefault())}>-
//                                                             </button>
//                                                             <button className="Quantity"
//                                                                     onClick={(event) => event.preventDefault()}> {item.quantity} </button>
//                                                             <button className="increaseQuantity"
//                                                                     onClick={(event) => handleIncreaseQuantity(index, event.preventDefault())}>+
//                                                             </button>
//
//                                                             <button
//                                                                 onClick={(event) => handleRemoveItem(index, event.preventDefault())}>Remove
//                                                             </button>
//                                                         </div>
//                                                     </label>
//                                                 </p>
//                                             )
//                                             }
//                                         </div>
//                                     ))}
//                                 </div>
//
//                                 {/*<div className="row">*/}
//                                 {/*    {camera ?*/}
//                                 {/*        <CameraList/>*/}
//                                 {/*        : null*/}
//                                 {/*    }*/}
//                                 {/*</div>*/}
//
//
//                                 {/*<div >*/}
//                                 {/*    {trip*/}
//                                 {/*        ? trip.map((Trip) => {*/}
//                                 {/*            return (<CameraList key={Trip.id} dataTrip2={Trip}/>*/}
//                                 {/*            );*/}
//                                 {/*        }):"..... loading page"}*/}
//                                 {/*    /!*end*!/*/}
//                                 {/*</div>*/}
//
//
//                                 <input id="addItemButton" value={inputValue}
//                                        onChange={(event) => validateInputNewItem(event)}
//                                        className='add-item-input' placeholder='add your item'/>
//                                 <i className="material-icons prefix" onClick={() => handleAddItemButtonEquipment()}>add</i>
//                                 <div>{errorNewItem}</div>
//                                 <div className='total'>Total Items: {totalItemCount}</div>
//                                 <div className='total'>Total Weight: {totalItemWeight} kg.</div>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//
//         </div>
//     )//end return
//
// }
//
// export default ElectronicEquipment2;