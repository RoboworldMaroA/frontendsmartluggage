import React, {useEffect, useState} from 'react';

import './toDoListCSS.css';


/*
SmartLuggage Application
Marek Augustyn

*/
const TrekkingListAccessories = () => {
    const [items, setItems] = useState([
        {itemName: 'Backpack', quantity: 1, isSelected: false, weight: 0.1},
        {itemName: 'Sleeping Bag', quantity: 1, isSelected: false, weight: 0.12},
        {itemName: 'Water', quantity: 1, isSelected: false, weight: 0.12},
        {itemName: 'Flashlight', quantity: 1, isSelected: false, weight: 0.12},
        {itemName: 'Fire Starter', quantity: 1, isSelected: false, weight: 0.12},
        // {itemName: 'Mosquito Repellent Lotion', quantity: 1, isSelected: false, weight: 0.12},

    ]);


    //grab data from local storage
    useEffect(() => {

            const trekkingClothesData = window.localStorage.getItem('TREKKING_ACCESSORIES_DATA');
            setItems(JSON.parse(trekkingClothesData));

        }, []
    )


    //save data to local storage
    useEffect(() => {
            // console.log(items);
            window.localStorage.setItem('TREKKING_ACCESSORIES_DATA', JSON.stringify(items));

        }, [items]

    )


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


    const [, setTotalItemCount] = useState(6);

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


    const [, setTotalItemWeight] = useState(1);

    const calculateTotalWeight = () => {
        const totalItemWeight = items.reduce((total, item) => {
            return total + item.weight * item.quantity;
        }, 0);

        setTotalItemWeight(totalItemWeight);
    };
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

export default TrekkingListAccessories;