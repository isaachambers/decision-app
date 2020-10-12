console.log("here")
import validator from 'validator';

const square = (x) => {
    return x * x;
}

const add = (a, b) => {
    return a + b;
}
const subtract = (a, b) => {

    return a - b;
}

const isValidEmail = (email) => {
    return validator.isEmail(email)
}

//Named Exports
//Each file can have on max default exports
export {square, add, isValidEmail, subtract as default}
// Default Exports