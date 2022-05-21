import React, {useEffect, useState} from 'react';
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
const EssentialList = ({props}) => {


    const [checked2, setChecked2] = useState(false);
    const [maskWeight, setMaskWeight] = useState(0.02);
    const [underwearQty, setUnderwearQty] = useState(5);
    const [passportQty, setPassportQty] = useState(1);
    const [errorNewItem, setErrorNewItem] = useState("At least one character ");

    // const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const [items, setItems] = useState([
        {itemName: 'Passport', quantity: 1, isSelected: false, weight: 0.1},
        {itemName: 'Identity Card', quantity: 1, isSelected: false, weight: 0.02},
        {itemName: 'Boarding Pass', quantity: 1, isSelected: false, weight: 0.02},
        {itemName: 'Payment Card', quantity: 1, isSelected: false, weight: 0.02},
        {itemName: 'Driving  Licence', quantity: 1, isSelected: false, weight: 0.02},
        {itemName: 'Wallet', quantity: 1, isSelected: false, weight: 0.02},
        {itemName: 'House Key', quantity: 1, isSelected: false, weight: 0.02},
        {itemName: 'Cash', quantity: 1, isSelected: false, weight: 0.02},
        {itemName: 'Travel Insurance', quantity: 0, isSelected: false, weight: 0.02},
        {itemName: 'Hotel booking confirmation', quantity: 1, isSelected: false, weight: 0.02},
        {itemName: 'Vaccination Certificate COVID-19 ', quantity: 0, isSelected: false, weight: 0.02},

    ]);


    //grab data from local storage
    useEffect(() => {

            const data = window.localStorage.getItem('ESSENTIAL_DATA');
            // if ( data !== null ) setPassportQty(JSON.parse(data));
            setItems(JSON.parse(data));

            // const data2 = window.localStorage.getItem('ITEM_CHECKED_ESSENTIAL');
            // if ( data !== null ) setItems(JSON.parse(data));
            // setSelected(JSON.parse(data2));
            //     console.log('data2',data2);
        }, []
    )


    //save data to local storage
    useEffect(() => {
            console.log(items);
            window.localStorage.setItem('ESSENTIAL_DATA', JSON.stringify(items));

        }, [items]
        // },[passportQty]

    )












    // function to add a new item
    const handleAddItemButton = () => {

        const newItem = {
            itemName: inputValue,
            quantity: 1,
            isSelected: false,
            weight: 0.3,

        };

        const newItems = [...items, newItem];
        setItems(newItems);
        setInputValue('');
        calculateTotal();
        calculateTotalWeight();


    };


    const handleIncreaseQuantity = (index) => {
        // alert("button increase was clicked ")
        const newItems = [...items];
        newItems[index].quantity++;
        setItems(newItems);
        calculateTotal();
        calculateTotalWeight();

        // event.preventDefault();

    }

    const handleDecreaseQuantity = (index) => {
        // alert("button decrease was clicked ")
        const newItems = [...items];
        if (newItems[index].quantity <= 0) {
            newItems[index].quantity++;
            setItems(newItems);
            calculateTotal();
            calculateTotalWeight();
        }

        newItems[index].quantity--;
        setItems(newItems);
        calculateTotal();
        calculateTotalWeight();


    }


    const [totalItemCount, setTotalItemCount] = useState(6);

    const calculateTotal = () => {
        const totalItemCount = items.reduce((total, item) => {
            return total + item.quantity;
        }, 0);

        setTotalItemCount(totalItemCount);
    };


    const handleRemoveItem = (index) => {
        // alert("button decrease was clicked ")
        const newItems = [...items];
        // newItems[index].quantity--;
        // setItems(newItems);
        if (index > -1) {
            newItems.splice(index, 1);
            setItems(newItems);

        }

        calculateTotal();
        calculateTotalWeight();

    }


    const [totalItemWeight, setTotalItemWeight] = useState(1);

    const calculateTotalWeight = () => {
        const totalItemWeight = items.reduce((total, item) => {
            return total + item.weight * item.quantity;
        }, 0);

        setTotalItemWeight(totalItemWeight);
    };


    const validateInputNewItem = (event) => {
        const newItem = event.target.value;
        if (newItem) {
            setErrorNewItem("");
        }
        setInputValue(newItem);
        setErrorNewItem(" ");
    }


    const validateChecked = (index) => {
        const newItems = [...items];
        newItems[index].isSelected = !newItems[index].isSelected;
        setItems(newItems);
    };


    return (

        <div id="blockEssential" className="row">
            <div className="col m10 s10">
                <div className="card">
                    <div className="card-image">
                        <img src={require("../photo/backgroundEssential5.jpg")}/>
                        <span className="card-title">ESSENTIALS</span>
                    </div>
                    <div className="card-content">

                        <form id="documents" action="#">
                            {/*<label>*/}
                            {/*    <div id="toRight">*/}
                            {/*        <button onClick={(event) => changeQuantityMinusPassport(event)}>-</button>*/}
                            {/*        <button onClick={(event)=>event.preventDefault()}> {passportQty} </button>*/}
                            {/*        <button onClick={(event) => changeQuantityPlusPassport(event)}>+</button>*/}
                            {/*    </div>*/}
                            {/*</label>*/}
                            {/*<p>*/}
                            {/*    <label>*/}
                            {/*        <input id="crossLine" type="checkbox" className="filled-in"/>*/}
                            {/*        <span>Passport</span>*/}
                            {/*        <div id="toRight">*/}
                            {/*            <button onClick={(event) => changeQuantityMinus(event)}>-</button>*/}
                            {/*            <button onClick={(event)=>event.preventDefault()}> {underwearQty} </button>*/}
                            {/*            <button onClick={(event) => changeQuantityPlus(event)}>+</button>*/}
                            {/*        </div>*/}
                            {/*    </label>*/}
                            {/*</p>*/}


                            <div className='main-container'>
                                <div className='item-list'>
                                    {items.map((item, index) => (
                                        <div className={"checkBox"}>
                                            {item.isSelected ? (
                                                <>
                                                    <p>
                                                        <label>
                                                            <input id="colorChecked" checked="true" type="checkbox"
                                                                   className={"filled-in"}
                                                                   onClick={() => validateChecked(index)}/>
                                                            <span>{item.itemName}</span>
                                                            <div id="toRight">
                                                                <button className="decreaseQuantity"
                                                                        onClick={(event) => handleDecreaseQuantity(index, event.preventDefault())}>-
                                                                </button>
                                                                <button className="Quantity"
                                                                        onClick={(event) => event.preventDefault()}> {item.quantity} </button>
                                                                <button className="increaseQuantity"
                                                                        onClick={(event) => handleIncreaseQuantity(index, event.preventDefault())}>+
                                                                </button>
                                                                <button
                                                                    onClick={(event) => handleRemoveItem(index, event.preventDefault())}>Remove
                                                                </button>
                                                            </div>
                                                        </label>
                                                    </p>
                                                </>
                                            ) : (

                                                <p>
                                                    <label>
                                                        <input id="colorChecked" type="checkbox" className="filled-in"
                                                               onClick={() => validateChecked(index)}/>
                                                        <span>{item.itemName}</span>
                                                        <div id="toRight">
                                                            <button className="decreaseQuantity"
                                                                    onClick={(event) => handleDecreaseQuantity(index, event.preventDefault())}>-
                                                            </button>
                                                            <button className="Quantity"
                                                                    onClick={(event) => event.preventDefault()}> {item.quantity} </button>
                                                            <button className="increaseQuantity"
                                                                    onClick={(event) => handleIncreaseQuantity(index, event.preventDefault())}>+
                                                            </button>

                                                            <button
                                                                onClick={(event) => handleRemoveItem(index, event.preventDefault())}>Remove
                                                            </button>
                                                        </div>
                                                    </label>
                                                </p>
                                            )
                                            }
                                        </div>
                                    ))}
                                </div>

                                <input id="addItemButton" value={inputValue}
                                       onChange={(event) => validateInputNewItem(event)}
                                       className='add-item-input' placeholder='add your item'/>
                                <i className="material-icons prefix" onClick={() => handleAddItemButton()}>add</i>
                                <div>{errorNewItem}</div>
                                <div className='total'>Total Items: {totalItemCount}</div>
                                <div className='total'>Total Weight: {totalItemWeight} kg.</div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )//end return

}

export default EssentialList;