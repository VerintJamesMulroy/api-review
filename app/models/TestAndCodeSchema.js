const { gql } = require("apollo-server-express");
const TestAndCodeApi = require('./TestAndCodeApi');
const options = {
  method: 'GET',
  url: 'https://test-and-code.p.rapidapi.com/posts',
  headers: {
    'x-rapidapi-key': '6b3b897670msh1228fadd1b2f5d3p138838jsn8d85258c3018',
    'x-rapidapi-host': 'test-and-code.p.rapidapi.com',
    useQueryString: true
  }
};


const typeDefs = gql`
type post {
  userId: Int!
  id: Int!
  title: String!
  body: String!
}
type posts {
    posts: [post]!
}
type Query{
  notPosts: String
  posts: [post]!
}
`;

const resolvers = {
  Query: {
    notPosts(){
      return "Hello";
    }
  }
};

module.exports = {
    typeDefs,
    resolvers,
};