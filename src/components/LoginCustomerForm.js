// import React, {useState}  from 'react';
// import LoginCustomer from "./LoginCustomer";
//
// // This function call child with validation form and then display only one time
// // we have a form with buttons in functional component LoginCustomer we can press a button in the LoginCustomer
// // and this  will execite function in fuction parent LoginCustomerForm
// const LoginCustomerForm=(props) =>{
//     const validateLogin = (valueFromLoginCustomer) => {
//         alert(`Hello Validator ${valueFromLoginCustomer}`)
//
//
//         //{customerData.email ? 'yes':'no'}
//        // if(customerData.email.value() === `${valueFromLoginCustomer}`.valueOf()){
//        //
//        //
//        //     alert('Email is the same');
//        //  }
//        //
//        //  if (customerData.email.value() === " "){
//        //
//        //     alert('Email is empty fill out please');
//        //  }
//         // setEmail(valueFromLoginCustomer);
//
//
//
//     }
//     // this return has inside a validateHandler parameter that is used
//     // in button in the LoginCustomer form
//     return<LoginCustomer validateHandler={validateLogin}  />
//
// }
//
//
//
// export default LoginCustomerForm;