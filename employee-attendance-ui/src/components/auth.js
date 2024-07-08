// auth.js
const { auth } = require('../firebase');

const registerEmployee = async (email, password) => {
  try {
    await auth.createUserWithEmailAndPassword(email, password);
    console.log("Employee registered");
  } catch (error) {
    console.error("Error registering employee:", error.message);
  }
};

const loginEmployee = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
    console.log("Employee logged in");
  } catch (error) {
    console.error("Error logging in employee:", error.message);
  }
};

module.exports = { registerEmployee, loginEmployee };
