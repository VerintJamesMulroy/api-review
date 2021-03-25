const config = require('../config/config');
const request = require('request');



module.exports = {
    call_API : function(options){
        return new Promise((resolve, reject) => {
            request(options, function (error, response, body) {
                if (error) reject(error);
                resolve(body);
            });
        })
    }
}



