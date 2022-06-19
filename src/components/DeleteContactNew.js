import React, {useState} from 'react';
/* useState is used to set a value  */

//It is new display contacts and delete on the bottom with  option to it delete
/*
SmartLuggage Application
Marek Augustyn
12 May 2022
Final Project Software Developer
*/
const DeleteContactNew = ({item}) => {
    const [id, setId] = useState('');

    const deleteStudent = async () => {
        const result = await fetch("https://backendsmartluggage.herokuapp.com/api/v1/student/" + id, {
            // const result = await fetch("api/v1/student/" + id, {
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
        <div className="row">
            <form className="col s12" onSubmit={() => deleteStudent()}>

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


                <div className="row">
                    <div className="input-field col s6">
                        <input placeholder="Placeholder" value={id} type="text"
                               onChange={(event => setId(event.target.value))} className="validate"/>
                        <label htmlFor="What Id want you delete">Id</label>
                    </div>
                </div>

                <div className="row">
                    <button className="waves-effect waves-light btn " type="submit" name="action">Delete Contact
                    </button>
                </div>
            </form>
        </div>
    );
}

export default DeleteContactNew;


