const lodash = require('lodash');

const names = ["ankir","dinesh","ankit","dinesh","ankit","ankir","ankit","dinesh","ankir"];
const capatilize = lodash.map(names,lodash.capitalize);

console.log(capatilize);