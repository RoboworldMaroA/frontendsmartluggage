import React, {useState}  from 'react';
    /* useState is used to set a value  */
//this  function add customer detail during a registration

/*
SmartLuggage Application
Marek Augustyn
12 May 2022
Final Project Software Developer
*/
    const AddDetailAdmin = ({setAdminInfo: setInfo}) => {

        const [name, setName] = useState('');
        const [surname, setSurname] = useState('');
        const [email, setEmail] = useState('');
        const [phoneNumber, setPhoneNumber] = useState('');
        const [dob, setDob] = useState('');
        const [sex, setSex] = useState('');
        const [customerPassword, setCustomerPassword] = useState('');
        const [customerPasswordAgain, setCustomerPasswordAgain] = useState('');

        //change fetch to customer database not a student
        const validateAdmin = async () => {
            const result = await fetch('https://backendsmartluggage.herokuapp.com/api/v1/customer', {
            // const result = await fetch('api/v1/customer', {
                method: "POST",
                body: JSON.stringify({name, surname,email, phoneNumber, dob,sex, customerPassword, customerPasswordAgain}),
                headers: {
                    "Content-Type": "application/json",
                }


            })

            const body = await result.json();
            setInfo(body);

        }

        return (
            <div className="row">
                <form className="col s12" onSubmit={() => validateAdmin()}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input placeholder="Placeholder" value={email} type="email" onChange={(event => setEmail(event.target.value))}
                                   className="validate"/>
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <input placeholder="password" value={customerPassword} type="text" onChange={(event =>
                                setCustomerPassword(event.target.value))}
                                   className="validate"/>
                            <label htmlFor="customerPassword">Type Password</label>
                            <p> It is what customer type {customerPassword}</p>
                        </div>
                    </div>

                    <div className="row">
                        <button className="waves-effect waves-light btn " type="submit" name="action">Login</button>
                    </div>
                </form>
            </div>


        );

    }

export default AddDetailAdmin;


