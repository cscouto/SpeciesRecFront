var Fetch = require('whatwg-fetch');
var baseURL = "https://speciesrecapi.herokuapp.com";

var service = {
  get: function(url){
      console.log("makingrequest")
    return fetch(baseURL + url, {'mode': 'no-cors'})
        then(function(response) {
            console.log("makingrequests")
            return response.json()
          }).then(function(json) {
            console.log('parsed json', json)
          }).catch(function(ex) {
            console.log('parsing failed', ex)
          })
  }
};

module.exports = service;