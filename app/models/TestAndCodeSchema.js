const { gql } = require("apollo-server-express");

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
    },
    posts: async (_source, {}, { dataSources }) =>{
      return dataSources.TestAndCodeAPI.getPosts();
    }
  }
};

module.exports = {
    typeDefs,
    resolvers,
};