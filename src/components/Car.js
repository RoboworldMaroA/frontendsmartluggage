import React, {useEffect, useState} from 'react';
import './toDoListCSS.css';

/*
SmartLuggage Application
Marek Augustyn
12 May 2022
Final Project Software Developer
*/
// eslint-disable-next-line no-empty-pattern
const Car = ({}) => {

    // eslint-disable-next-line no-unused-vars
    const [errorNewItem, setErrorNewItem] = useState("At least one character ");

    // const [items, setItems] = useState([]);
    const [, setInputValue] = useState('');

    const [items, setItems] = useState([
        {itemName: 'GPS Device', quantity: 0, isSelected: false, weight: 0.1},
        {itemName: 'Update Maps', quantity: 0, isSelected: false, weight: 0.02},
        {itemName: 'GPS Cables', quantity: 0, isSelected: false, weight: 0.02},
        {itemName: 'Phone Holder', quantity: 1, isSelected: false, weight: 0.02},

    ]);


    //grab data from local storage
    useEffect(() => {

            const carData = window.localStorage.getItem('CAR_DATA');
            setItems(JSON.parse(carData));

        }, []
    )


    //save data to local storage
    useEffect(() => {
            window.localStorage.setItem('CAR_DATA', JSON.stringify(items));

        }, [items]


    )


    const handleIncreaseQuantity = (index) => {
        // alert("button increase was clicked ")
        const newItems = [...items];
        newItems[index].quantity++;
        setItems(newItems);
        calculateTotal();
        calculateTotalWeight();

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
        <>
            <form id="camera" action="#">
                {/*<div className='row'>*/}
                {/*    <div className='item-list'>*/}
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
                    {/*</div>*/}
                {/*</div>*/}
            </form>
        </>
    )//end return

}

export default Car;