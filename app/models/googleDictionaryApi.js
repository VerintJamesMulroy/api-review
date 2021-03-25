const config = require('../config/config');
const request = require('request');

const options = {
    method: 'GET',
    url: 'https://test-and-code.p.rapidapi.com/posts',
    headers: {
      'x-rapidapi-key': '6b3b897670msh1228fadd1b2f5d3p138838jsn8d85258c3018',
      'x-rapidapi-host': 'test-and-code.p.rapidapi.com',
      useQueryString: true
    }
  };
  
  request(options, function (error, response, body) {
      if (error) throw new Error(error);
  
      console.log(body);
  });



