// module.exports -> export the module
// require -> used to import the module

const first = require('./first-module');

console.log(first.add(2,3));
console.log(first.sub(2,3));
console.log(first.mul(2,3));
console.log(first.div(2,3));

try{
    console.log('Divide by zero');
    console.log(first.div(12,0));
}catch(e){
    console.log("caught error");
    console.log(e.message);
}

// module wrapper function

// (
//     function(exports, require, module, __filename, __dirname){
//         // module code
//     }
// )