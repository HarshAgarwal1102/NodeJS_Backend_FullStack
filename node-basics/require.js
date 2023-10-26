// Learning about modules.

const fn = require("./export");   // if only one function is passing
console.log('Fn is ', fn(10,20));

// if object is passing
const obj = require('./export');
console.log(obj.add(10,20));
console.log(obj.sub(10,20));