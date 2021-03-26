const { gql } = require("apollo-server-express");

const typeDefs = gql`
type post {
  userId: Int!
  id: Int!
  title: String!
  body: String!
}

type posts {
  """
  List of posts
  """
    posts: [post]!
}
type Query{
  notPosts: String
  posts: [post]!
  post(id: Int):post
}
`;

const resolvers = {
  Query: {
    notPosts(){
      return "Hello";
    },
    //if we're asked for post data, do an API call and return our structured data here.
    posts: async (_source, {}, { dataSources }) =>{
      
      var data = dataSources.TestAndCodeAPI.getPosts();
      
      return data;
    },
    post: async(_source, {id}, {dataSources})=>{

      var data = dataSources.TestAndCodeAPI.getPost(id);
      
      return data;

    }
  }
};

module.exports = {
    typeDefs,
    resolvers,
};