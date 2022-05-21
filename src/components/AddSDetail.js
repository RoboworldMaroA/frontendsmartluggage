import React, {useState} from 'react';

const AddSDetail = ({setStudentInfo}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');

    const addStudent = async () => {
        const result = await fetch("api/v1/student", {
            method: "POST",
            body: JSON.stringify({name, email, dob}),
            headers: {
                "Content-Type": "application/json",
            }
        })
        const body = await result.json();
        setStudentInfo(body);
    }


    return (
        <div className="row">
            <form className="col s12" onSubmit={() => addStudent()}>
                <div className="row">
                    <div className="input-field col s6">
                        <input placeholder="Placeholder" value={name} type="text"
                               onChange={(event => setName(event.target.value))} className="validate"/>
                        <label htmlFor="name">First Name</label>
                    </div>
                    <div className="input-field col s6">
                        <input value={email} type="email" onChange={(event => setEmail(event.target.value))}
                               className="validate"/>
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field col s6">
                        <input value={dob} type="date" onChange={(event => setDob(event.target.value))}
                               className="validate"/>
                        <label htmlFor="dob">Day of Birth</label>
                    </div>
                </div>

                <div className="row">
                    <button className="waves-effect waves-light btn " type="submit" name="action">Add New Client
                    </button>
                </div>
            </form>
        </div>
    );
}
export default AddSDetail;


