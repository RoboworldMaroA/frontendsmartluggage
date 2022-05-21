// import React, {useState, useEffect} from 'react';
// import LoginCustomerNew from "./LoginCustomerNew";
// /* useState is used to set a value  */
//
// //It is new display contacts and delete on the bottom with  option to it delete
//
// export const LoginNew = () => {
//
//     //data from useEffect Customer data
//     const [customer, setCustomer] = useState(null);
//     // const [trip, setTrip] = useState(null);
//
//     // useEffect(() => {
//     //     //do something when loading
//     //     console.log("yoyw yow do something from useeffect")
//     //     if(!customer) {
//     //         fetch("api/v1/customer").then((response) => response.json()).then((dataCustomer) => {
//     //             console.log("List of items in the customer", dataCustomer);
//     //             setCustomer(dataCustomer);
//     //         });
//     //     }
//     // }, [customer]);
//
//
//     useEffect(() => {
//         //do something when loading
//         console.log("yoyw yow do something from useeffect")
//         fetch("api/v1/customer").then((response) => response.json()).then((dataCustomer) => {
//             console.log("List of items in the customer", dataCustomer);
//             setCustomer(dataCustomer);
//         });
//     }, ["hI"]);
//
//
//
//     // useEffect(() => {
//     //     //do something when loading
//     //     console.log("yoyw yow do something from useeffect")
//     //     fetch("api/v1/trip").then((response) => response.json()).then((dataTrip) => {
//     //         console.log("List of items in the trip", dataTrip);
//     //         setTrip(dataTrip);
//     //     });
//     // }, ["hI trip"]);
//
//
//
//     return (
//         <div>
//             {/*<div>*/}
//             {/*    {customer*/}
//             {/*        ? customer.map((data) => {*/}
//             {/*            return (<ToDoListComponents key={data.id} data2={data}/>*/}
//             {/*                    );*/}
//             {/*        }):"..... loading page"}*/}
//             {/*</div>*/}
//             <div>
//                 {customer
//                     ? customer.map((data) => {
//                         return (<LoginCustomerNew key={data.id} dataCustomer2={data}/>
//                         );
//                     }):"..... loading page"}
//                 {/*end*/}
//             </div>
//
//         </div>
//     );
//
// }
//
// export default LoginNew;
//
//
