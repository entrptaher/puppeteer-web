require('util.promisify/shim')();

const util = require('util');
const oldPromisify = util.promisify;

util.promisify = async (...args) => {
  try{
    oldPromisify(...args)
  }catch(e){
    return () => {}
  }
}

module.exports = util