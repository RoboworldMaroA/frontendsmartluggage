import React, {useState} from 'react';
/* useState is used to set a value  */
/*
SmartLuggage Application
Marek Augustyn
12 May 2022
Final Project Software Developer
*/
//It is new display contacts and delete on the bottom with  option to it delete
const DeleteCustomerNew = ({item}) => {
    const [id, setId] = useState('');
    const deleteCustomer = async () => {
        // const result = await fetch("https://backendsmartluggage.herokuapp.com/api/v1/customer/" + id, {
        //     const result = await fetch("deleteUsers/" + id, {
                const result = await fetch("https://backendsmartluggage.herokuapp.com/deleteUsers/" + id, {
            method: "DELETE",
            //body: JSON.stringify({id}),
            //headers: {
            //     "Content-Type": "application/json",
            // }
        })
        const body = await result.json();
        item(body);
    }


    return (
        // this part display card with detail inside
        <div className="row">
            <form className="col s12" onSubmit={() => deleteCustomer()}>
                <div className="row">
                    <div className="col s12 m6">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">
                                    <p>It is a detail a customer with ID: {item.id}</p>
                                    Name: {item.userName}
                                    <p> Surname: {item.surname}  </p>
                                    <p> Email: {item.userEmail} </p>
                                    <p> Phone Number: {item.userPhoneNumber} </p>
                                    <p> Date of birth: {item.userDob} </p>
                                    <p> Sex: {item.userSex} </p>
                                    <p>Age: {item.userAge}</p>
                                        Password: {item.password}    </span>
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
}

export default DeleteCustomerNew;


