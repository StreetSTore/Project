var retrieve = require('./read-from-db.js');

retrieve.retrieveStores(function(data){

console.log(data);

});