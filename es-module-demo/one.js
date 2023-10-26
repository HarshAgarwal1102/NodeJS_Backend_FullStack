// for using es6 modules we have to issue a command -> npm init, this will ask ques
// if we don't want to answer the ques then we can use npm init -y

// import {add} from './two.js';
const add = require('./two');
console.log('Add is ', add(10,20));
 const show = (z)=>{
    console.log('Show call');
    const r = add(10,20);
    return r * z;
}
module.exports = show;