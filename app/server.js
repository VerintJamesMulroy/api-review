// Require express and create an instance of it
var express = require('express');
var app = express();
const config = require('./config/config');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers} = require('./models/TestAndCodeSchema');
const TestAndCodeApi = require('./models/TestAndCodeApi');

//For graphql calls we want to use apollo, create and new instance.
    const server = new ApolloServer({ typeDefs, resolvers, dataSources: ()=> ({TestApi: new TestAndCodeApi()})  });

//Use apollos apply middleware to become part of express.
server.applyMiddleware({app, path:"/api"});

//Routes for normal web traffic and content
var web = require('./routes/web');
app.use('/',web);

// For any other route that has no content, return 404
app.use( function (req,res,next){
    res.send('This is a 404');
});
//We're all built, on with the show.
app.listen(3025, function () {
    console.log('Api Review Server Running on Port 3024 \n ${server.graphqlPath}');
});