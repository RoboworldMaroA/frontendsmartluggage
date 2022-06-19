import React, {useEffect, useState} from 'react';

import BeachList from "./BeachList";
import CameraList from "./CameraList";
import Car from "./Car";
import CamcorderList from "./CamcorderList";
import './ToDoListComponentTrip.css';
import EssentialList2 from "./EssentialList2";
import './toDoListCSS.css';
import './EssentialCSS.css';
import BeachListCosmetics from "./BeachListCosmetics";
import BeachListAccessories from "./BeachListAccessories";
import FemaleClothesList from "./FemaleClothesList";
import TrekkingListClothes from "./TrekkingListClothes";
import TrekkingListAccessories from "./TrekkingListAccessories";
import FemaleCosmeticsList from "./FemaleCosmeticsList";
import CameraEquipmentsList from "./CameraEquipmentsList";
import CamcorderEquipmentsList from "./CamcorderEquipmentsList";
import TabletEquipmentsList from "./TabletEquipmentsList";
import LaptopEquipmentsList from "./LaptopEquipmentsList";
import LaptopList from "./LaptopList";
/*
SmartLuggage Application
Marek Augustyn
12 May 2022
Final Project Software Developer
*/
//i moved data from a component Display state component, and
// I can add here what I want to do when I click a checkboxes
export const ToDoListComponentsTrip = (props) => {
    // const [toDoList, setToDoList] = useState(props.data2);
    const [toDoListTrip, setToDoListTrip] = useState(props.dataTrip2);
    const [ireland, setIreland] = useState(props.dataTrip2.ireland);
    const [spain, setSpain] = useState(props.dataTrip2.spain);
    const [poland, setPoland] = useState(props.dataTrip2.poland);
    const [camera, setCamera] = useState(props.dataTrip2.poland);

    // const [userData, setUserData] = useState(props.dataCustomer);

    const[tripDays,setTripDays]=useState(7);


    const updateIsDoneTrip = () => {
        setToDoListTrip({...toDoListTrip, camera: !toDoListTrip.camera});
    }

    //grab data from database on the beginning of the loading page and update everytime is change something on the list.
    useEffect(() => {
        console.log("item was updated ireland value is:", toDoListTrip.ireland, updateIrelandStatus());
    }, [toDoListTrip]);




    const [irelandStatus, setIrelandStatus] = useState(false);
    const updateIrelandStatus = (event) => {
        const trip = ireland;
        const irlStatus = irelandStatus;
        if (trip === "1") {
            setIrelandStatus(true);
            console.log("irlStatus is:(in if trip =1) ", irlStatus);
        }

        if (trip === "0") {
            setIrelandStatus(false);
            //setIrelandState("1");
            console.log("irlStatus is:(in if trip =0) ", irlStatus);//test only
        }
    }

    useEffect(() => {
        console.log("Camera was updated state is:", toDoListTrip.camera
        );
    }, [toDoListTrip]);




    // ******************** ELECTRONIC EQUIPMENT LIST ***************************
    const [errorNewItemEquipments, setErrorNewItemEquipments] = useState(" ");

    // const [items, setItems] = useState([]);
    const [inputValueEquipments, setInputValueEquipments] = useState('');

    const [itemsEquipments, setItemsEquipments] = useState([
        {itemName: 'Phone', quantity: 1, isSelected: false, weight: 0.35},
        {itemName: 'Phone Charger', quantity: 1, isSelected: false, weight: 0.1},
        {itemName: 'Earphones', quantity: 0, isSelected: false, weight: 0.05},
        {itemName: 'Powerbank', quantity: 1, isSelected: false, weight: 0.1},



    ]);


    //grab data from local storage
    useEffect(() => {

            const dataEquipments = window.localStorage.getItem('EQUIPMENTS_DATA');
            // if ( data !== null ) setPassportQty(JSON.parse(data));
            setItemsEquipments(JSON.parse(dataEquipments));

            // const data2 = window.localStorage.getItem('ITEM_CHECKED_ESSENTIAL');
            // if ( data !== null ) setItems(JSON.parse(data));
            // setSelected(JSON.parse(data2));
            //     console.log('data2',data2);
        }, []
    )


    //save data to local storage
    useEffect(() => {
            console.log(itemsEquipments);
            window.localStorage.setItem('EQUIPMENTS_DATA', JSON.stringify(itemsEquipments));

        }, [itemsEquipments]
        // },[passportQty]

    )

    // function to add a new item
    const handleAddItemButtonEquipments = () => {

        const newItem = {
            itemName: inputValueEquipments,
            quantity: 1,
            isSelected: false,
            weight: 0.3,

        };

        const newItems = [...itemsEquipments, newItem];
        setItemsEquipments(newItems);
        setInputValueEquipments('');
        calculateTotalEquipments();
        calculateTotalWeightEquipments();


    };


    const handleIncreaseQuantityEquipments = (index) => {
        // alert("button increase was clicked ")
        const newItems = [...itemsEquipments];
        newItems[index].quantity++;
        setItemsEquipments(newItems);
        calculateTotalEquipments();
        calculateTotalWeightEquipments();

        // event.preventDefault();

    }

    const handleDecreaseQuantityEquipments = (index) => {
        // alert("button decrease was clicked ")
        const newItems = [...itemsEquipments];
        if (newItems[index].quantity <= 0) {
            newItems[index].quantity++;
            setItemsEquipments(newItems);
            calculateTotalEquipments();
            calculateTotalWeightEquipments();
        }

        newItems[index].quantity--;
        setItemsEquipments(newItems);
        calculateTotalEquipments();
        calculateTotalWeightEquipments();


    }


    const [totalItemCountEquipments, setTotalItemCountEquipments] = useState(6);

    const calculateTotalEquipments = () => {
        const totalItemCountEquipments = itemsEquipments.reduce((total, itemEquipments) => {
            return total + itemEquipments.quantity;
        }, 0);

        setTotalItemCountEquipments(totalItemCountEquipments);
    };


    const handleRemoveItemEquipments = (index) => {
        // alert("button decrease was clicked ")
        const newItems = [...itemsEquipments];
        // newItems[index].quantity--;
        // setItems(newItems);
        if (index > -1) {
            newItems.splice(index, 1);
            setItemsEquipments(newItems);

        }

        calculateTotalEquipments();
        calculateTotalWeightEquipments();

    }


    const [totalItemWeightEquipments, setTotalItemWeightEquipments] = useState(1);

    const calculateTotalWeightEquipments = () => {
        const totalItemWeightEquipments = itemsEquipments.reduce((total, itemsEquipments) => {
            return total + itemsEquipments.weight * itemsEquipments.quantity;
        }, 0);

        setTotalItemWeightEquipments(totalItemWeightEquipments);
    };


    const validateInputNewItemEquipments = (event) => {
        const newItem = event.target.value;
        if (newItem) {
            setErrorNewItemEquipments("");
        }
        setInputValueEquipments(newItem);
        setErrorNewItemEquipments(" ");
    };


    const validateCheckedEquipments = (index) => {
        const newItems = [...itemsEquipments];
        newItems[index].isSelected = !newItems[index].isSelected;
        setItemsEquipments(newItems);
    }

    // ************ END ELECTRONIC EQUIPMENTS LIST  ***************














    // ************ Accessories ***************
    // const [camera, setCamera] = useState(props);




    const [errorNewItem, setErrorNewItem] = useState(" ");

    // const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const [items, setItems] = useState([
        {itemName: 'Travel Pillow', quantity: 0, isSelected: false, weight: 0.4},
        {itemName: 'Luggage Tag', quantity: 0, isSelected: false, weight: 0.03},
        {itemName: 'Backpack', quantity: 0, isSelected: false, weight: 0.5},
        {itemName: 'Book/ eBook', quantity: 0, isSelected: false, weight: 0.3},
        {itemName: 'Watch', quantity: 0, isSelected: false, weight: 0.2},
        {itemName: 'Maps', quantity: 0, isSelected: false, weight: 0.2},
        {itemName: 'Umbrella', quantity: 0, isSelected: false, weight: 0.5},
        {itemName: 'Earplugs', quantity: 0, isSelected: false, weight: 0.01},
        // {itemName: 'Drone Equipment', quantity: 1, isSelected: false, weight: 0.3},
        // {itemName: 'Camcorder', quantity: 1, isSelected: false, weight: 0.3},
        // {itemName: 'Camcorder Equipment', quantity: 1, isSelected: false, weight: 0.3},
        // {itemName: 'Additional Battery', quantity: 1, isSelected: false, weight: 0.3},


    ]);


    //grab data from local storage
    useEffect(() => {

            const data = window.localStorage.getItem('ACCESSORIES_DATA');
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
            window.localStorage.setItem('ACCESSORIES_DATA', JSON.stringify(items));

        }, [items]
        // },[passportQty]

    )

    // function to add a new item
    const handleAddItemButtonAccessories = () => {

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

    // ************ END Accessories mod From electronic equipment  ***************





    // ******************** CLOTHES  ***************************
    const [errorNewItemClothes, setErrorNewItemClothes] = useState(" ");
    const [inputValueClothes, setInputValueClothes] = useState('');
    //create data for the clothes
    const [itemsClothes, setItemsClothes] = useState([
        {itemName: 'Pants', quantity: 1, isSelected: false, weight: 0.05},
        {itemName: 'Shirt', quantity: 1, isSelected: false, weight: 0.2},
        {itemName: 'Socks', quantity: 1, isSelected: false, weight: 0.1},
        {itemName: 'Jeans/Trousers', quantity: 0, isSelected: false, weight: 0.5},
        {itemName: 'Pyjamas', quantity: 0, isSelected: false, weight: 0.2},
        {itemName: 'Hoodies/Sweater', quantity: 1, isSelected: false, weight: 0.5},
        {itemName: 'Jacket', quantity: 1, isSelected: false, weight: 0.8},
        {itemName: 'Shoes', quantity: 1, isSelected: false, weight: 0.3}

    ]);

    //grab data from local storage
    useEffect(() => {
            const dataClothes = window.localStorage.getItem('CLOTHES_DATA');
            setItemsClothes(JSON.parse(dataClothes));
        }, []
    )

    //save data to local storage
    useEffect(() => {
            console.log(itemsClothes);
            window.localStorage.setItem('CLOTHES_DATA', JSON.stringify(itemsClothes));
        }, [itemsClothes]
    )

    // function to add a new item
    const handleAddItemButtonClothes = () => {
        const newItem = {
            itemName: inputValueClothes,
            quantity: 1,
            isSelected: false,
            weight: 0.3,
        };
        const newItems = [...itemsClothes, newItem];
        setItemsClothes(newItems);
        setInputValueClothes('');
        calculateTotalClothes();
        calculateTotalWeightClothes();
    };

    // function to validate input field for new cloth
    const validateInputNewItemClothes = (event) => {
        const newItem = event.target.value;
        if (newItem) {
            setErrorNewItemClothes("");
        }
        setInputValueClothes(newItem);
        setErrorNewItemClothes(" ");
    };








    // function to handle increase items
    const handleIncreaseQuantityClothes = (index) => {
        // alert("button increase was clicked ")
        const newItems = [...itemsClothes];
        newItems[index].quantity++;
        setItemsClothes(newItems);
        calculateTotalClothes();
        calculateTotalWeightClothes();
    }

    // function to handle decrease items
    const handleDecreaseQuantityClothes = (index) => {
        // alert("button decrease was clicked ")
        const newItems = [...itemsClothes];
        if (newItems[index].quantity <= 0) {
            newItems[index].quantity++;
            setItemsClothes(newItems);
            calculateTotalClothes();
            calculateTotalWeightClothes();
        }
        newItems[index].quantity--;
        setItemsClothes(newItems);
        calculateTotalClothes();
        calculateTotalWeightClothes();
    }

    //validation if the item is packed
    const validateCheckedClothes = (index) => {
        const newItems = [...itemsClothes];
        newItems[index].isSelected = !newItems[index].isSelected;
        setItemsClothes(newItems);
    }






    // function to count the clothes
    const [totalItemCountClothes, setTotalItemCountClothes] = useState(6);
    const calculateTotalClothes = () => {
        const totalItemCountClothes = itemsClothes.reduce((total, itemClothes) => {
            return total + itemClothes.quantity;
        }, 0);
        setTotalItemCountClothes(totalItemCountClothes);
    };



    // function to remove item
    const handleRemoveItemClothes = (index) => {
        // alert("button decrease was clicked ")
        const newItems = [...itemsClothes];
        if (index > -1) {
            newItems.splice(index, 1);
            setItemsClothes(newItems);
        }
        calculateTotalClothes();
        calculateTotalWeightClothes();
    }

    // function to check a total weight
    const [totalItemWeightClothes, setTotalItemWeightClothes] = useState(1);
    const calculateTotalWeightClothes = () => {
        const totalItemWeightClothes = itemsClothes.reduce((total, itemsClothes) => {
            return total + itemsClothes.weight * itemsClothes.quantity;
        }, 0);
        setTotalItemWeightClothes(totalItemWeightClothes);
    };







    // ************ END CLOTHES LIST  ***************


















    // ******************** COSMETICS AND FIRST AID  ***************************
    // const [camera, setCamera] = useState(props);


    const [errorNewItemCosmetics, setErrorNewItemCosmetics] = useState(" ");

    // const [items, setItems] = useState([]);
    const [inputValueCosmetics, setInputValueCosmetics] = useState('');

    const [itemsCosmetics, setItemsCosmetics] = useState([
        {itemName: 'Pain Killers', quantity: 1, isSelected: false, weight: 0.04},
        {itemName: 'Hand Cream', quantity: 1, isSelected: false, weight: 0.1},
        {itemName: 'Toothbrush', quantity: 1, isSelected: false, weight: 0.03},
        {itemName: 'ToothPaste', quantity: 1, isSelected: false, weight: 0.15},
        {itemName: 'Perfumes', quantity: 1, isSelected: false, weight: 0.15},
        {itemName: 'Antiperspirant', quantity: 0, isSelected: false, weight: 0.1},
        {itemName: 'Nail File', quantity: 0, isSelected: false, weight: 0.03},
        {itemName: 'Dental Floss', quantity: 0, isSelected: false, weight: 0.02},
        {itemName: 'Lipstick/ Lip Balm', quantity: 0, isSelected: false, weight: 0.02},
        {itemName: 'Contact Lenses', quantity: 0, isSelected: false, weight: 0.05},
        {itemName: 'Glasses', quantity: 0, isSelected: false, weight: 0.05},
        {itemName: 'Shampoo', quantity: 0, isSelected: false, weight: 0.25},
        {itemName: 'Soap/Shower Gel', quantity: 0, isSelected: false, weight: 0.25},


    ]);


    //grab data from local storage
    useEffect(() => {

            const dataCosmetics = window.localStorage.getItem('COSMETICS_DATA');
            // if ( data !== null ) setPassportQty(JSON.parse(data));
            setItemsCosmetics(JSON.parse(dataCosmetics));

            // const data2 = window.localStorage.getItem('ITEM_CHECKED_ESSENTIAL');
            // if ( data !== null ) setItems(JSON.parse(data));
            // setSelected(JSON.parse(data2));
            //     console.log('data2',data2);
        }, []
    )


    //save data to local storage
    useEffect(() => {
            console.log(itemsCosmetics);
            window.localStorage.setItem('COSMETICS_DATA', JSON.stringify(itemsCosmetics));

        }, [itemsCosmetics]
        // },[passportQty]

    )

    // function to add a new item
    const handleAddItemButtonCosmetics = () => {

        const newItem = {
            itemName: inputValueCosmetics,
            quantity: 1,
            isSelected: false,
            weight: 0.1,

        };

        const newItems = [...itemsCosmetics, newItem];
        setItemsCosmetics(newItems);
        setInputValueCosmetics('');
        calculateTotalClothes();
        calculateTotalWeightClothes();


    };


    const handleIncreaseQuantityCosmetics = (index) => {
        // alert("button increase was clicked ")
        const newItems = [...itemsCosmetics];
        newItems[index].quantity++;
        setItemsCosmetics(newItems);
        calculateTotalCosmetics();
        calculateTotalWeightCosmetics();

        // event.preventDefault();

    }

    const handleDecreaseQuantityCosmetics = (index) => {
        // alert("button decrease was clicked ")
        const newItems = [...itemsCosmetics];
        if (newItems[index].quantity <= 0) {
            newItems[index].quantity++;
            setItemsCosmetics(newItems);
            calculateTotalCosmetics();
            calculateTotalWeightCosmetics();
        }

        newItems[index].quantity--;
        setItemsCosmetics(newItems);
        calculateTotalCosmetics();
        calculateTotalWeightCosmetics();


    }


    const [totalItemCountCosmetics, setTotalItemCountCosmetics] = useState(6);

    const calculateTotalCosmetics = () => {
        const totalItemCountCosmetics = itemsCosmetics.reduce((total, itemCosmetics) => {
            return total + itemCosmetics.quantity;
        }, 0);

        setTotalItemCountCosmetics(totalItemCountCosmetics);
    };


    const handleRemoveItemCosmetics = (index) => {
        // alert("button decrease was clicked ")
        const newItems = [...itemsCosmetics];
        // newItems[index].quantity--;
        // setItems(newItems);
        if (index > -1) {
            newItems.splice(index, 1);
            setItemsCosmetics(newItems);

        }

        calculateTotalCosmetics();
        calculateTotalWeightCosmetics();

    }


    const [totalItemWeightCosmetics, setTotalItemWeightCosmetics] = useState(1);

    const calculateTotalWeightCosmetics = () => {
        const totalItemWeightCosmetics = itemsCosmetics.reduce((total, itemsCosmetics) => {
            return total + itemsCosmetics.weight * itemsCosmetics.quantity;
        }, 0);

        setTotalItemWeightCosmetics(totalItemWeightCosmetics);
    };


    const validateInputNewItemCosmetics = (event) => {
        const newItem = event.target.value;
        if (newItem) {
            setErrorNewItemCosmetics("");
        }
        setInputValueCosmetics(newItem);
        setErrorNewItemCosmetics(" ");
    };


    const validateCheckedCosmetics = (index) => {
        const newItems = [...itemsCosmetics];
        newItems[index].isSelected = !newItems[index].isSelected;
        setItemsCosmetics(newItems);
    }

    // ************ END COSMETICS LIST  ***************







    return (


        <div>
            <div className="row">
                <div id="titleListToDoListID" className="col s10 m6">

                    <p id="listOfItemsInToDoListComponent">
                        {/*Hi {props.dataCustomer.name}*/}
                        {/*{toDoListTrip.ireland === "1" ? "Ireland" : ""}*/}
                        {/*{toDoListTrip.spain === true ? "Spain" : " "}*/}
                        {/*{toDoListTrip.poland === true ? "Poland" : " "}*/}
                        {toDoListTrip.destination===0 ? toDoListTrip.description : toDoListTrip.destination}
                        {/*{toDoListTrip.name}<br/>*/}
                        {/*{toDoListTrip.destination}<br/>*/}
                        {/*{toDoListTrip.description}<br/>*/}
                        : {toDoListTrip.departureDay} to {toDoListTrip.returnDay}</p>

                </div>
            </div>

            {/*<p> Display LIST for USER: ID {toDoList.id} NAME: {toDoList.name}</p>*/}
            <div className="row">
                {toDoListTrip.essentialListStatus ?
                    <EssentialList2/>
                    : null
                }
            </div>




            {/*<div className="row">*/}
            {/*    {toDoListTrip.essentialListStatus ?*/}
            {/*    <>*/}
            {/*        <ElectronicEquipment2 />*/}


            {/*    </>*/}
            {/*        : null*/}
            {/*    }*/}
            {/*</div>*/}



            {/*#########################################################################*/}
            {/*  #######################  Electronic Equipment  ################################*/}
            <div className={"electronicEquipment"}>

                <div id="blockEssential" className="row">
                    <div className="col m10 s10">
                        <div className="card">
                            <div className="card-image">
                                <img src={require("../photo/backgroundElectronicEquipments3.jpg")}/>
                                <span className="card-title">ELECTRONIC EQUIPMENT</span>
                            </div>
                            <div className="card-content">

                                <form id="documents" action="#">
                                    <div className='main-container'>


                                        <div>
                                            {toDoListTrip.camera ?
                                                <CameraEquipmentsList/>
                                                : null
                                            }
                                        </div>



                                        <div>
                                            {toDoListTrip.camcorder ?
                                                <CamcorderEquipmentsList/>
                                                : null
                                            }
                                        </div>

                                        <div>
                                            {toDoListTrip.tablet ?
                                                <TabletEquipmentsList/>
                                                : null
                                            }
                                        </div>

                                        <div>
                                            {toDoListTrip.laptop ?
                                                <LaptopEquipmentsList/>
                                                : null
                                            }
                                        </div>


                                        {/*Clothes additional items*/}
                                        <div className='item-list'>
                                            {itemsEquipments.map((itemEquipments, index) => (
                                                <div className={"checkBox"}>
                                                    {itemEquipments.isSelected ? (
                                                        <>
                                                            <p>
                                                                <label>
                                                                    <input id="colorChecked" checked="true" type="checkbox"
                                                                           className={"filled-in"}
                                                                           onClick={() => validateCheckedEquipments(index)}/>
                                                                    <span>{itemEquipments.itemName}</span>
                                                                    <div id="toRight">
                                                                        <button className="decreaseQuantity"
                                                                                onClick={(event) => handleDecreaseQuantityEquipments(index, event.preventDefault())}>-
                                                                        </button>
                                                                        <button className="Quantity"
                                                                                onClick={(event) => event.preventDefault()}> {itemEquipments.quantity} </button>
                                                                        <button className="increaseQuantity"
                                                                                onClick={(event) => handleIncreaseQuantityEquipments(index, event.preventDefault())}>+
                                                                        </button>
                                                                        <button
                                                                            onClick={(event) => handleRemoveItemEquipments(index, event.preventDefault())}>Remove
                                                                        </button>
                                                                    </div>
                                                                </label>
                                                            </p>
                                                        </>
                                                    ) : (

                                                        <p>
                                                            <label>
                                                                <input id="colorChecked" type="checkbox" className="filled-in"
                                                                       onClick={() => validateCheckedEquipments(index)}/>
                                                                <span>{itemEquipments.itemName}</span>
                                                                <div id="toRight">
                                                                    <button className="decreaseQuantity"
                                                                            onClick={(event) => handleDecreaseQuantityEquipments(index, event.preventDefault())}>-
                                                                    </button>
                                                                    <button className="Quantity"
                                                                            onClick={(event) => event.preventDefault()}> {itemEquipments.quantity} </button>
                                                                    <button className="increaseQuantity"
                                                                            onClick={(event) => handleIncreaseQuantityEquipments(index, event.preventDefault())}>+
                                                                    </button>

                                                                    <button
                                                                        onClick={(event) => handleRemoveItemEquipments(index, event.preventDefault())}>Remove
                                                                    </button>
                                                                </div>
                                                            </label>
                                                        </p>
                                                    )
                                                    }
                                                </div>
                                            ))}
                                        </div>

                                        <input id="addItemButton" value={inputValueEquipments}
                                               onChange={(event) => validateInputNewItemEquipments(event)}
                                               className='add-item-input' placeholder='add your item'/>
                                        <i className="material-icons prefix" onClick={() => handleAddItemButtonEquipments()}>add</i>
                                        <div>{errorNewItemEquipments}</div>
                                        <div className='total'>Total Items: {totalItemCountEquipments}</div>
                                        <div className='total'>Total Weight: {totalItemWeightEquipments} kg.</div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

































            {/*#########################################################################*/}
            {/*  #######################  ACCESSORIES LIST  ################################*/}
            <div className={"accessories"}>

                <div id="blockEssential" className="row">
                    <div className="col m10 s10">
                        <div className="card">
                            <div className="card-image">
                                <img src={require("../photo/backgroundAccessories3.jpg")}/>
                                <span className="card-title">ACCESSORIES</span>
                            </div>
                            <div className="card-content">

                                <form id="documents" action="#">
                                    <div className='main-container'>

                                        <div>
                                            {toDoListTrip.camera ?
                                                <CameraList/>
                                                : null
                                            }
                                        </div>


                                        <div>
                                            {toDoListTrip.camcorder ?
                                                <CamcorderList/>
                                                : null
                                            }
                                        </div>


                                        <div>
                                            {toDoListTrip.laptop ?
                                                <LaptopList/>
                                                : null
                                            }
                                        </div>




                                        <div>
                                            {toDoListTrip.car ?
                                                <Car/>
                                                : null
                                            }
                                        </div>

                                        <div>
                                            {toDoListTrip.beachListStatus ?
                                                <BeachListAccessories/>
                                                : null
                                            }
                                        </div>


                                        <div>
                                            {toDoListTrip.trekking ?
                                                <TrekkingListAccessories/>
                                                : null
                                            }
                                        </div>


                                        {/*Accesoriess adiidtional items*/}
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
                                        <i className="material-icons prefix" onClick={() => handleAddItemButtonAccessories()}>add</i>
                                        <div>{errorNewItem}</div>
                                        <div className='total'>Total Items: {totalItemCount}</div>
                                        <div className='total'>Total Weight: {totalItemWeight} kg.</div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>




                {/*#########################################################################*/}
                {/*  #######################  Clothes List  ################################*/}
                <div className={"clothes"}>

                    <div id="blockEssential" className="row">
                        <div className="col m10 s10">
                            <div className="card">
                                <div className="card-image">
                                    <img src={require("../photo/backgroundClothes3.jpg")}/>
                                    <span className="card-title">CLOTHES</span>
                                </div>
                                <div className="card-content">

                                    <form id="documents" action="#">
                                        <div className='main-container'>

                                            <div>
                                                {toDoListTrip.beachListStatus ?
                                                    <BeachList/>
                                                    : null
                                                }
                                            </div>
                                            {/*<div>Value of sex is: {toDoListTrip.sex}</div>*/}
                                            <div>
                                                {toDoListTrip.sex==="female" ?
                                                    <FemaleClothesList/>
                                                    : null
                                                }
                                            </div>


                                            <div>
                                                {toDoListTrip.trekking ?
                                                    <TrekkingListClothes/>
                                                    : null
                                                }
                                            </div>


                                            {/*<div>*/}
                                            {/*    {toDoListTrip.car ?*/}
                                            {/*        <Car/>*/}
                                            {/*        : null*/}
                                            {/*    }*/}
                                            {/*</div>*/}


                                            {/*Clothes additional items*/}
                                            <div className='item-list'>
                                                {itemsClothes.map((itemClothes, index) => (
                                                    <div className={"checkBox"}>
                                                        {itemClothes.isSelected ? (
                                                            <>
                                                                <p>
                                                                    <label>
                                                                        <input id="colorChecked" checked="true" type="checkbox"
                                                                               className={"filled-in"}
                                                                               onClick={() => validateCheckedClothes(index)}/>
                                                                        <span>{itemClothes.itemName}</span>
                                                                        <div id="toRight">
                                                                            <button className="decreaseQuantity"
                                                                                    onClick={(event) => handleDecreaseQuantityClothes(index, event.preventDefault())}>-
                                                                            </button>
                                                                            <button className="Quantity"
                                                                                    onClick={(event) => event.preventDefault()}> {itemClothes.quantity} </button>
                                                                            <button className="increaseQuantity"
                                                                                    onClick={(event) => handleIncreaseQuantityClothes(index, event.preventDefault())}>+
                                                                            </button>
                                                                            <button
                                                                                onClick={(event) => handleRemoveItemClothes(index, event.preventDefault())}>Remove
                                                                            </button>
                                                                        </div>
                                                                    </label>
                                                                </p>
                                                            </>
                                                        ) : (

                                                            <p>
                                                                <label>
                                                                    <input id="colorChecked" type="checkbox" className="filled-in"
                                                                           onClick={() => validateCheckedClothes(index)}/>
                                                                    <span>{itemClothes.itemName}</span>
                                                                    <div id="toRight">
                                                                        <button className="decreaseQuantity"
                                                                                onClick={(event) => handleDecreaseQuantityClothes(index, event.preventDefault())}>-
                                                                        </button>
                                                                        <button className="Quantity"
                                                                                onClick={(event) => event.preventDefault()}> {itemClothes.quantity} </button>
                                                                        <button className="increaseQuantity"
                                                                                onClick={(event) => handleIncreaseQuantityClothes(index, event.preventDefault())}>+
                                                                        </button>

                                                                        <button
                                                                            onClick={(event) => handleRemoveItemClothes(index, event.preventDefault())}>Remove
                                                                        </button>
                                                                    </div>
                                                                </label>
                                                            </p>
                                                        )
                                                        }
                                                    </div>
                                                ))}
                                            </div>

                                            <input id="addItemButton" value={inputValueClothes}
                                                   onChange={(event) => validateInputNewItemClothes(event)}
                                                   className='add-item-input' placeholder='add your item'/>
                                            <i className="material-icons prefix" onClick={() => handleAddItemButtonClothes()}>add</i>
                                            <div>{errorNewItemClothes}</div>
                                            <div className='total'>Total Items: {totalItemCountClothes}</div>
                                            <div className='total'>Total Weight: {totalItemWeightClothes} kg.</div>

                                            {/*<input placeholder="" value={name} type="text"*/}
                                            {/*       onChange={(event => setName(event.target.value))} className="validate"/>*/}
                                            {/*<input placeholder="" value={tripDays} type="text" onChange={(event=>setTripDays(event.target.value)}*/}
                                            {/*       className="validate"/>*/}







                                            {/*<input id="addItemButton" value={tripDays}*/}
                                            {/*       onChange={(event) => validateInputNewItemClothes(event)}*/}
                                            {/*       type={"text"} placeholder='add more days'> Trip Days: {tripDays} </input>*/}


                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>












                {/*#########################################################################*/}
                {/*  #######################  COSMETICS and First Aid List  ################################*/}
                <div className={"cosmetics"}>

                    <div id="blockEssential" className="row">
                        <div className="col m10 s10">
                            <div className="card">
                                <div className="card-image">
                                    <img src={require("../photo/backgroundCosmetics1.jpg")}/>
                                    <span className="card-title">COSMETICS AND FIRST AID</span>
                                </div>
                                <div className="card-content">

                                    <form id="documents" action="#">
                                        <div className='main-container'>

                                            <div>
                                                {toDoListTrip.beachListStatus ?
                                                    <BeachListCosmetics/>
                                                    : null
                                                }
                                            </div>
                                            <div>
                                                {toDoListTrip.sex==="female" ?
                                                    <FemaleCosmeticsList/>
                                                    : null
                                                }
                                            </div>


                                            {/*Clothes additional items*/}
                                            <div className='item-list'>
                                                {itemsCosmetics.map((itemCosmetics, index) => (
                                                    <div className={"checkBox"}>
                                                        {itemCosmetics.isSelected ? (
                                                            <>
                                                                <p>
                                                                    <label>
                                                                        <input id="colorChecked" checked="true" type="checkbox"
                                                                               className={"filled-in"}
                                                                               onClick={() => validateCheckedCosmetics(index)}/>
                                                                        <span>{itemCosmetics.itemName}</span>
                                                                        <div id="toRight">
                                                                            <button className="decreaseQuantity"
                                                                                    onClick={(event) => handleDecreaseQuantityCosmetics(index, event.preventDefault())}>-
                                                                            </button>
                                                                            <button className="Quantity"
                                                                                    onClick={(event) => event.preventDefault()}> {itemCosmetics.quantity} </button>
                                                                            <button className="increaseQuantity"
                                                                                    onClick={(event) => handleIncreaseQuantityCosmetics(index, event.preventDefault())}>+
                                                                            </button>
                                                                            <button
                                                                                onClick={(event) => handleRemoveItemCosmetics(index, event.preventDefault())}>Remove
                                                                            </button>
                                                                        </div>
                                                                    </label>
                                                                </p>
                                                            </>
                                                        ) : (

                                                            <p>
                                                                <label>
                                                                    <input id="colorChecked" type="checkbox" className="filled-in"
                                                                           onClick={() => validateCheckedCosmetics(index)}/>
                                                                    <span>{itemCosmetics.itemName}</span>
                                                                    <div id="toRight">
                                                                        <button className="decreaseQuantity"
                                                                                onClick={(event) => handleDecreaseQuantityCosmetics(index, event.preventDefault())}>-
                                                                        </button>
                                                                        <button className="Quantity"
                                                                                onClick={(event) => event.preventDefault()}> {itemCosmetics.quantity} </button>
                                                                        <button className="increaseQuantity"
                                                                                onClick={(event) => handleIncreaseQuantityCosmetics(index, event.preventDefault())}>+
                                                                        </button>

                                                                        <button
                                                                            onClick={(event) => handleRemoveItemCosmetics(index, event.preventDefault())}>Remove
                                                                        </button>
                                                                    </div>
                                                                </label>
                                                            </p>
                                                        )
                                                        }
                                                    </div>
                                                ))}
                                            </div>



                                            <input id="addItemButton" value={inputValueCosmetics}
                                                   onChange={(event) => validateInputNewItemCosmetics(event)}
                                                   className='add-item-input' placeholder='add your item'/>
                                            <i className="material-icons prefix" onClick={() => handleAddItemButtonCosmetics()}>add</i>
                                            <div>{errorNewItemCosmetics}</div>
                                            <div className='total'>Total Items: {totalItemCountCosmetics}</div>
                                            <div className='total'>Total Weight: {totalItemWeightCosmetics} kg.</div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div></div>

    );
};

export default ToDoListComponentsTrip;



