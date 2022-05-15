// const usersModels = require('./models/usersModels');

// const user = usersModels.users;

// //--------------------------------------

// const getusersInfo = async () => {
//     const x = await user.find();
//     return x
// }
// exports.getusersInfo = getusersInfo;


// //------------------------------------------
// // Get info of a user by its Email
// const findUserByEmail = async (theEmail) => {
//     const x = await user.findOne({ Email: theEmail })
//     // console.log(`findUserByEmail ${JSON.stringify(x)}`);
//     return x;
// }
// exports.findUserByEmail = findUserByEmail;


// //--------------------------------------
// // Add a user
// const addUser = async (formInfo) => {
//     const newuser = new user(formInfo);
//     const x = await newuser.save();
//     if (newuser.Email !== "nadeen.salameh6@gmail.com") {
//         newuser.usertype = "user"
//     }
//     else {
//         newuser.usertype = "admin"
//     }
// };

// exports.addUser = addUser;

// //--------------------------------------


// // Update info of a user by its Email
// const updateUser = async (theEmail, theUserInfo) => {
//     const x = await user.updateOne({ Email: theEmail }, theUserInfo)
//     if (x !== null) {
//         return true
//     }

//     return null;
// }

// exports.updateUser = updateUser;

// //--------------------------------------

// // Delete a user by its Email
// const deleteUserByEmail = async (userEmail) => {
//     const x = await user.deleteOne({ Email: userEmail });
//     console.log(x);
//     if (x !== null) {

//         return true;
//     }
//     return false;
// }
// exports.deleteUserByEmail = deleteUserByEmail;
// //--------------------------------------
