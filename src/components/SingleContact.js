import React from "react";


/*
SmartLuggage Application
Marek Augustyn
*/

/* create object Single Contact*/
const SingleContact = ({item}) => (




    <div className="row">
        <div className="col s12 m6">
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                    <span className="card-title">{item.name} {item.email} {item.dob}  </span>

                </div>
                <div className="card-action">
                    <p>Student ID: {item.id}</p>

                    </div>



            </div>
        </div>
    </div>


);




export default SingleContact;