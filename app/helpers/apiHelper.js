const request = require('request');
module.exports = {
  /*
  ** This method returns a promise
  ** which gets resolved or rejected based
  ** on the result from the API
  */
  make_API_call : function(protocol, domain, path, token, query){
      return new Promise((resolve, reject) => {
          request(protocol+domain+path,{ qs:query, json: true }, (err, res, body) => {
            if (err) reject(err)
            resolve(body)
          }).auth(null, null, true, token);
      })
  }
}
