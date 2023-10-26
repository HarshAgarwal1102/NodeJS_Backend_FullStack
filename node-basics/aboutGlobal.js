console.log(global);
console.log(process);
console.log(console);
console.log(__dirname); // gives the directory path 
console.log(__filename); // gives the file name path
console.log(arguments);

console.log('X is ', x);
console.log('X is ', globalThis.x);

// Internal Working...
// Everything was wrapped inside a function
/*
function(exports, require, module, __filename, __dirname){
     
}
*/


var x = 10;
console.log('X is ', x);
console.log('X is ', globalThis.x);

// Internal Working...
/*
function(exports, require, module, __filename, __dirname){
     var x = 10;
}
*/