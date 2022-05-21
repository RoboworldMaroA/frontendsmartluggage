// const bcrypt = require('bcrypt');
// const {compare} = require("bcrypt");
//
// // const hashPassword = async (pw) => {
// //     //12 is standard if you make bigger then will be doing longer, beter crypro hashing
// //     const salt = await bcrypt.genSalt(12);
// //     const hash = await bcrypt.hash(pw,salt);
// //     console.log(salt);
// //     console.log(hash);
// // }
//
//
// //same but salt is included in this option and we are using only hash
// const hashPassword = async (pw) => {
//     //12 is standard if you make bigger then will be doing longer, beter crypro hashing
//     const hash = await bcrypt.hash(pw,12);
//     console.log(hash);
// }
//
//
// //login function
// const login = async (pw,hashedPw)=>{
//     const result = await bcrypt.compare(pw,hashedPw);
//     if (result){
//         console.log("Logged you in succesfull match");
//     }else{
//
//         console.log("incorect data");
//     }
//
//
// }
//
// // create account with monkey hashed
// // hashPassword('monkey');
// // login with hashed monkey
// //login('monkey1','$2b$12$JXYtY0qp/9DYDNrRkXH64.DwHiRlXBFmaLlOK76YK6LIH/5iyR5K2');
//
//
// login('monkey','$2b$12$gxe22gAe3id9dD08vxuwPuqe9mdiTixB.CWbpVsTTXVbVUN2gA2cS');