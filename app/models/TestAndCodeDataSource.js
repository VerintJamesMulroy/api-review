const { RESTDataSource } = require ('apollo-datasource-rest');
const config = require('../config/config');

//Much like an ORM extend the class inherit; use what we need.
class TestAndCodeAPI extends RESTDataSource {
    constructor(){
        super();
        this.baseURL = "https://test-and-code.p.rapidapi.com/";
    }
    //Do the call, get the data
    async getPosts(){
        var data = this.get('posts/');
        return data;
    }
    async getPost(id){
        return this.get('/posts/'+id)
    }
    //Add our auth headers here
    willSendRequest(request){
         request.headers.set('x-rapidapi-key', config.TestAndCodeAPIkey);
         request.headers.set('x-rapidapi-host', config.TestAndCodeAPIhost);

    }
}
module.exports = TestAndCodeAPI;