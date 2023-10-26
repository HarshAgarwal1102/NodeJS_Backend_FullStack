// Learning about modules.


function add(x,y){
    return x + y;
}
const sub =(x=0,y=0)=>x-y;

console.log(module.exports); // it's just an object literal -> {}  // this is at reference 88

module.exports = add;   // this is at reference 88
module.exports = {add, sub}; // this is used to wrap everything inside the func" and then export them.
module.exports.add = add;     // this is at reference 88
module.exports.sub = sub;     // this is at reference 88


// Also do upper thing like below method.

exports.add = function add(x,y){        // this is at reference 88
    return x + y;               
}
exports.sub =(x=0,y=0)=>x-y;   // this is at reference 88



// this is something diff to know the diff b/w module.export vs exports

function add(x,y){
    return x + y;
}
const subt =(x=0,y=0)=>x-y;
exports = {add, sub};  // this is only wrapping everything inside the object  // this is at reference 99

module.exports = exports; // assigning the data of 99 to 88




console.log(exports); // {}
exports.add = function add(){
    console.log('I am Add ');
}
exports.sub=(x=0,y=0)=>x-y;
console.log(exports); // fn
