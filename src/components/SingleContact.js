import React from "react";


/*
SmartLuggage Application
Marek Augustyn
12 May 2022
Final Project Software Developer
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
                    {/*<a href="#">This is a link</a>*/}
                    {/*<a href="#">This is a link</a>*/}
                    {/*<button onSubmit={()=>deleteStudent(item.id)} >Delete Student</button>*/}

                    </div>



            </div>
        </div>
    </div>


);




export default SingleContact;