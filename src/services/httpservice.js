var Fetch = require('whatwg-fetch');
var baseURL = "https://speciesrecapi.herokuapp.com";

var service = {
    get: function(url){
        return fetch(baseURL + url)
            .then(function(response) {
                return response.json()
            })
    },
    post: function(url, imageData){
        return fetch(baseURL + url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            image: imageData
          })
        })
        .then(function(response) {
            return response.json()
        })
    }
};

module.exports = service;