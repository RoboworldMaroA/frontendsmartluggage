
import React, {useEffect, useState} from 'react';
import './toDoListCSS.css';

/*
SmartLuggage Application
Marek Augustyn

*/
const LaptopEquipmentsList=()=>{

    const [, setErrorNewItem] = useState("At least one character ");
    const [inputValue, setInputValue] = useState('');
    const [items, setItems] = useState([
        {itemName: 'Laptop', quantity: 1, isSelected: false, weight: 1.1},
        {itemName: 'Lap Charger', quantity: 1, isSelected: false, weight: 1.1},

    ]);


    //grab data from local storage
    useEffect(() => {

            const cameraData = window.localStorage.getItem('LAPTOP_EQUIPMENTS_DATA');
            // if ( data !== null ) setPassportQty(JSON.parse(data));
            setItems(JSON.parse(cameraData));

            // const data2 = window.localStorage.getItem('ITEM_CHECKED_ESSENTIAL');
            // if ( data !== null ) setItems(JSON.parse(data));
            // setSelected(JSON.parse(data2));
            //     console.log('data2',data2);
        }, []
    )


    //save data to local storage
    useEffect(() => {
            // console.log(items);
            window.localStorage.setItem('LAPTOP_EQUIPMENTS_DATA', JSON.stringify(items));

        }, [items]

    )




    // function to add a new item
    const handleAddItemButton = () => {

        const newItem = {
            itemName: inputValue,
            quantity: 1,
            isSelected: false,
            weight: 0.1,

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




    return(

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

export default LaptopEquipmentsList;