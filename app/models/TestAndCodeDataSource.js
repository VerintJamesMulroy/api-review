const { RESTDataSource } = require ('apollo-datasource-rest');
const config = require('../config/config');


class TestAndCodeAPI extends RESTDataSource {
    constructor(){
        super();
        this.baseURL = "https://test-and-code.p.rapidapi.com/";
    }
    async getPosts(limit = null, offset = null){
        return this.get('posts/');
    }
    willSendRequest(request){
         request.headers.set('x-rapidapi-key', config.TestAndCodeAPIkey);
         request.headers.set('x-rapidapi-host', config.TestAndCodeAPIhost);

    }
}
module.exports = TestAndCodeAPI;