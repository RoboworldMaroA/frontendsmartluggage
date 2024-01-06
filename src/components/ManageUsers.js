import React, {useEffect, useState} from 'react';

/*
SmartLuggage Application
Marek Augustyn
23 Nov 2023

*/
//This component display users data
const ManageUsers = ({item}) => {
    const [id, setId] = useState('');
    const [userData, setUserData] = useState(null);
    const [displayUserDetail, setDisplayUserDetail] = useState(false);

    //Fetch users data
    useEffect(() => {
        //do something when loading
        console.log("signal to do something using useEffect")
        fetch("https://smartluggagebackend.herokuapp.com/displayUsers").then((response) => response.json()).then((UserData) => {
            // fetch("api/v1/trip/").then((response) => response.json()).then((TripData) => {
            console.log("List of items in the trip", UserData);
            setUserData(UserData);
        });

    }, []);


    const deleteCustomer = async () => {
                const result = await fetch("https://smartluggagebackend.herokuapp.com/deleteUsers/" + id, {
            method: "DELETE",
        }).then(res =>
                    console.log(res.json))
    }



    //this method display or not the Trip Detail
    function changeStatus() {
        //here will be logic what lit to display, depend on what customer choose in the form FormCrteteList
        // console.log("State trip List", displayTripDetail);
        setDisplayUserDetail(!displayUserDetail);

    }


    return (


        <div >
            <button className="waves-effect waves-light btn #795548 brown "  onClick={()=> changeStatus()} >  View user data </button>
            <div>
                {displayUserDetail
                    ? userData.map((UserData) => {
                        return (
                            // <DisplayCustomerTrip key={TripData.id} item={TripData}/>

                        // this part display card with detail inside
                        <div className="row">
                            <form className="col s12" onSubmit={() => deleteCustomer()}>
                                <div className="row">
                                    <div className="col s12 m6">
                                        <div className="card blue-grey darken-1">
                                            <div className="card-content white-text">
                                <span className="card-title">
                                    <p>It is a detail a customer with ID: {UserData.id}</p>
                                    Name: {UserData.userName}
                                    <p> Surname: {UserData.userSurname}  </p>
                                    <p> Email: {UserData.userEmail} </p>
                                    <p> Phone Number: {UserData.userPhoneNumber} </p>
                                    <p> Date of birth: {UserData.userDob} </p>
                                        Password: {UserData.password}    </span>
                                            </div>
                                            <div className="card-action">
                                                <p> If you want delete user input user id and then press delete button </p>
                                                {/*<a href="#">This is a link</a>*/}
                                                {/*<a href="#">This is a link</a>*/}
                                                {/*<button onSubmit={()=>deleteCustomer(item.id)} >Delete Student</button>*/}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="input-field col s6">
                                        <input placeholder="Input user ID that you want to delete" type="text"
                                               onChange={(event => setId(event.target.value))} className="validate"/>
                                        {/*<label htmlFor="What Id want you delete">Id</label>*/}
                                    </div>
                                </div>
                                <div className="row">
                                    <button className="waves-effect waves-light btn " type="submit" name="action">Delete Customer
                                    </button>
                                </div>
                            </form>
                        </div>





                        );
                    }):"... press to see more detail about a trips"}
                {/*end*/}
            </div>

        </div>


        // this part display card with detail inside
    //     <div className="row">
    //         <form className="col s12" onSubmit={() => deleteCustomer()}>
    //             <div className="row">
    //                 <div className="col s12 m6">
    //                     <div className="card blue-grey darken-1">
    //                         <div className="card-content white-text">
    //                             <span className="card-title">
    //                                 <p>It is a detail a customer with ID: {item.id}</p>
    //                                 Name: {item.userName}
    //                                 <p> Surname: {item.surname}  </p>
    //                                 <p> Email: {item.userEmail} </p>
    //                                 <p> Phone Number: {item.userPhoneNumber} </p>
    //                                 <p> Date of birth: {item.userDob} </p>
    //                                 <p> Sex: {item.userSex} </p>
    //                                 <p>Age: {item.userAge}</p>
    //                                     Password: {item.password}    </span>
    //                         </div>
    //                         <div className="card-action">
    //                             <p> If you want delete user input user id and then press delete button </p>
    //                             {/*<a href="#">This is a link</a>*/}
    //                             {/*<a href="#">This is a link</a>*/}
    //                             {/*<button onSubmit={()=>deleteCustomer(item.id)} >Delete Student</button>*/}
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //
    //             <div className="row">
    //                 <div className="input-field col s6">
    //                     <input placeholder="Input user ID that you want to delete" type="text"
    //                            onChange={(event => setId(event.target.value))} className="validate"/>
    //                     {/*<label htmlFor="What Id want you delete">Id</label>*/}
    //                 </div>
    //             </div>
    //             <div className="row">
    //                 <button className="waves-effect waves-light btn " type="submit" name="action">Delete Customer
    //                 </button>
    //             </div>
    //         </form>
    //     </div>
    );
}

export default ManageUsers;


