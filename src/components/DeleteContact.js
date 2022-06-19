import React, {useState} from 'react';
/* useState is used to set a value  */
/*
SmartLuggage Application
Marek Augustyn
12 May 2022
Final Project Software Developer
*/
//it deletes element when you say what id want to delete
const DeleteContact = ({item}) => {

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

export default DeleteContact;


