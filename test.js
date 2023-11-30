// main.js
const os = require('os');
const { names } = require('./people');

console.log(os.platform(), os.homedir(), names);