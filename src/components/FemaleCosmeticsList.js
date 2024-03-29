
import React, {useEffect, useState} from 'react';
import './toDoListCSS.css';


/*
SmartLuggage Application
Marek Augustyn
12 May 2022
Final Project Software Developer
*/
const FemaleCosmeticsList=({})=>{


    const [, setErrorNewItem] = useState("At least one character ");

    // const [items, setItems] = useState([]);
    const [, setInputValue] = useState('');

    const [items, setItems] = useState([
        {itemName: 'Foundation', quantity: 1, isSelected: false, weight: 0.21},
        {itemName: 'Cream BB', quantity: 1, isSelected: false, weight: 0.21},
        {itemName: 'Bronzer', quantity: 1, isSelected: false, weight: 0.15},
        // {itemName: 'Make-up removing products', quantity: 1, isSelected: false, weight: 0.32},
        {itemName: 'Cotton Pads', quantity: 1, isSelected: false, weight: 0.32},
        // {itemName: 'Eye concealer', quantity: 1, isSelected: false, weight: 0.02},
        {itemName: 'Highlighter', quantity: 1, isSelected: false, weight: 0.02},
        {itemName: 'Mascara', quantity: 1, isSelected: false, weight: 0.02},
        // {itemName: 'Lipstick/Lip-Gloss/Lip Pencil', quantity: 1, isSelected: false, weight: 0.02},
        {itemName: 'Lipstick', quantity: 1, isSelected: false, weight: 0.02},
        {itemName: 'Face Powder', quantity: 1, isSelected: false, weight: 0.02},
        {itemName: 'Eye Shadows', quantity: 1, isSelected: false, weight: 0.02},
        {itemName: 'Gel', quantity: 1, isSelected: false, weight: 0.02},
        {itemName: 'Eyebrow pencil', quantity: 1, isSelected: false, weight: 0.02},
        {itemName: 'Brushes', quantity: 1, isSelected: false, weight: 0.02},
        {itemName: 'Eyeliner', quantity: 1, isSelected: false, weight: 0.02},
        // {itemName: 'Vaccination Certificate COVID-19 ', quantity: 1, isSelected: false, weight: 0.02},

    ]);


    //grab data from local storage
    useEffect(() => {

            const femaleCosmeticsData = window.localStorage.getItem('FEMALE_COSMETICS_DATA');
            // if ( data !== null ) setPassportQty(JSON.parse(data));
            setItems(JSON.parse(femaleCosmeticsData));

        }, []
    )


    //save data to local storage
    useEffect(() => {
            // console.log(items);
            window.localStorage.setItem('FEMALE_COSMETICS_DATA', JSON.stringify(items));

        }, [items]
        // },[passportQty]

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


    // const validateInputNewItem = (event) => {
    //     const newItem = event.target.value;
    //     if (newItem) {
    //         setErrorNewItem("");
    //     }
    //     setInputValue(newItem);
    //     setErrorNewItem(" ");
    // }


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

export default FemaleCosmeticsList;